
  const Card = {
    name: 'Card',
    template: /* html */ `
      <div class="drop-shadow bg-white rounded flex flex-col">
        <div class="flex p-2">
          <strong class="text-xl">{{ title }}</strong>
        </div>
        <div class="flex flex-col p-2 border-t">
          <slot></slot>
        </div>
      </div>
    `,
    props: ['title'],
  }
  
