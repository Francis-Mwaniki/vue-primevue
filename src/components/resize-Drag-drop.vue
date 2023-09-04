<template>
  <div class="drag-resize-container">
    <div
      class="draggable resizable"
      :style="{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`
      }"
      @mousedown="startDragOrResize"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDragging: false,
      isResizing: false,
      startPosition: { x: 0, y: 0 },
      initialPosition: { x: 50, y: 50 },
      initialSize: { width: 150, height: 100 },
      position: { x: 50, y: 50 },
      size: { width: 150, height: 100 }
    };
  },
  methods: {
    startDragOrResize(event) {
      const { offsetX, offsetY } = event;
      if (offsetX >= this.size.width - 20 && offsetY >= this.size.height - 20) {
        this.isResizing = true;
      } else {
        this.isDragging = true;
      }
      this.startPosition.x = event.clientX - this.position.x;
      this.startPosition.y = event.clientY - this.position.y;
      window.addEventListener("mousemove", this.handleMove);
      window.addEventListener("mouseup", this.stopDragOrResize);
    },
    handleMove(event) {
      if (this.isDragging) {
        this.position.x = event.clientX - this.startPosition.x;
        this.position.y = event.clientY - this.startPosition.y;
      } else if (this.isResizing) {
        this.size.width = Math.max(
          this.initialSize.width + (event.clientX - this.startPosition.x),
          50
        );
        this.size.height = Math.max(
          this.initialSize.height + (event.clientY - this.startPosition.y),
          50
        );
      }
    },
    stopDragOrResize() {
      this.isDragging = false;
      this.isResizing = false;
      window.removeEventListener("mousemove", this.handleMove);
      window.removeEventListener("mouseup", this.stopDragOrResize);
    }
  }
};
</script>

<style scoped>
.drag-resize-container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.draggable {
  position: absolute;
  cursor: move;
  background-color: #3498db;
  color: white;
  padding: 10px;
}

.resizable {
  resize: both;
  overflow: hidden;
}

.resizable::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  cursor: se-resize;
}
</style>
