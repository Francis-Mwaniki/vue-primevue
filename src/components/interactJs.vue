<template>
    <div class="resize-drag" ref="resizeDragElement">
      Resize from any edge or corner
    </div>
  </template>
  
  <script>
  import interact from 'interactjs';
  export default {
    name: 'ResizeDragComponent',
    mounted() {
      this.setupInteract();
    },
    methods: {
      setupInteract() {
        const el = this.$refs.resizeDragElement;
  
        interact(el)
          .resizable({
            edges: { left: true, right: true, bottom: true, top: true },
            listeners: {
              move: this.resizeMoveListener,
            },
            modifiers: [
              interact.modifiers.restrictEdges({
                outer: 'parent',
              }),
              interact.modifiers.restrictSize({
                min: { width: 100, height: 50 },
              }),
            ],
            inertia: true,
          })
          .draggable({
            listeners: { move: this.dragMoveListener },
            inertia: true,
            modifiers: [
              interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true,
              }),
            ],
          });
      },
      resizeMoveListener(event) {
        const target = event.target;
        const x = (parseFloat(target.getAttribute('data-x')) || 0);
        const y = (parseFloat(target.getAttribute('data-y')) || 0);
  
        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';
  
        const deltaX = event.deltaRect.left;
        const deltaY = event.deltaRect.top;
  
        target.style.transform = `translate(${x + deltaX}px, ${y + deltaY}px)`;
  
        target.setAttribute('data-x', x + deltaX);
        target.setAttribute('data-y', y + deltaY);
  
        target.textContent = `${Math.round(event.rect.width)}×${Math.round(event.rect.height)}`;
      },
      dragMoveListener(event) {
        const target = event.target;
        const x = (parseFloat(target.getAttribute('data-x')) || 0);
        const y = (parseFloat(target.getAttribute('data-y')) || 0);
  
        const newX = x + event.dx;
        const newY = y + event.dy;
  
        target.style.transform = `translate(${newX}px, ${newY}px)`;
  
        target.setAttribute('data-x', newX);
        target.setAttribute('data-y', newY);
      },
    },
  };
  </script>
  
  <style scoped>
  .resize-drag {
    width: 320px;
    height: 300px;
    background-color: rgb(213, 213, 213);
    touch-action: none;
    box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
  }
  </style>
  