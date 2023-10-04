const vuetify = Vuetify.createVuetify()

const app = Vue.createApp({
  data() {
    return {
      viewMode: 'card',
      keyword: '',
      photos: [],
      pending: false
    }
  },
  computed: {
    filterPhotos() {
      return this.photos.filter((p) => {
        // 轉換小寫字母
        const author = p.author.toLocaleLowerCase()
        // 使用轉換小寫後的文字做比對
        return author.includes(this.keyword)
      })
    },
    isCardMode() {
      return this.viewMode === 'card'
    },
    isListMode() {
      return this.viewMode === 'list'
    },
    isEmpty() {
      return !this.pending && this.filterPhotos.length === 0
    }
  },  
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.pending = true
      fetch('https://picsum.photos/v2/list?page=2&limit=30')
        .then((res) => res.json())
        .then((json) => {
          // 故意延遲，只是想顯示skeleton效果
          setTimeout(() => {
            this.photos = json
            this.pending = false
          }, 3000)
        })
        .catch((err) => console.error(err))
    },
  }
})
app.use(vuetify)
app.mount('#app')