<template>
  <i :class="classes" :style="styles" @click="handleClick"></i>
</template>
<script>
const prefixCls = "icon"
import "@/assets/fonts/fonts.css"
export default {
  name: "FontIcon",
  props: {
    type: {
      type: String,
      default: "",
    },
    size: [Number, String],
    color: String,
    opacity: String,
    custom: {
      type: String,
      default: "",
    },
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.type}`]: this.type !== "",
          [`${this.custom}`]: this.custom !== "",
        },
      ]
    },
    styles() {
      const style = {}
      if (this.size) {
        style["font-size"] = `${this.size}px`
      }
      if (this.color) {
        style.color = this.color
      }
      if (this.opacity) {
        style.opacity = this.opacity
      }
      return style
    },
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event)
    },
  },
}
</script>