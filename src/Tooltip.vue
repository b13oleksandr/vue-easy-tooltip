<script>
import Vue from 'vue'

const POSITION = {
  top: 'top',
  bottom: 'bottom'
}

export default {
  name: 'Tooltip',

  props: {
    offset: {
      type: Number,
      default: 12
    },
    withArrow: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: POSITION.bottom
    },
    backgroundColor: {
      type: String,
      default: null
    },
    classes: {
      type: String,
      default: ''
    },
    styles: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: Boolean,
      default: undefined
    }
  },

  data: () => ({
    target: null,
    tooltip: null
  }),

  watch: {
    value() {
      this.value === true && this.show()
      this.value === false && this.destroy()
    }
  },

  computed: {
    computedStyles() {
      const styles = {}

      for (const [key, value] of Object.entries({ ...this.styles })) {
        styles[key] = value
      }

      return {
        ...styles,
        ...(this.backgroundColor && {
          backgroundColor: this.backgroundColor,
          borderColor: this.backgroundColor
        })
      }
    }
  },

  methods: {
    show() {
      this.create()
      this.setPosition()
      this.tooltip.$el.classList.add('active')
    },

    create() {
      if (this.tooltip) {
        return
      }

      const el = document.createElement('div')
      document.body.append(el)

      const Tooltip = Vue.extend({
        render: (h) =>
          h(
            'div',
            {
              attrs: {
                __tooltip__: ''
              },
              class: {
                tooltip: true,
                'tooltip--anchor': this.withArrow,
                [`tooltip--position-${this.position}`]: true,
                [this.classes]: true
              },
              style: this.computedStyles
            },
            this.$slots.default
          )
      })

      this.tooltip = new Tooltip().$mount(el)
    },

    destroy() {
      if (!this.tooltip) {
        return
      }

      this.tooltip.$el.classList.remove('active')

      if (this.value) {
        this.$emit('input', false)
      }
      setTimeout(() => {
        this.tooltip?.$el.remove()
        this.tooltip = null
      }, 200)
    },

    setPosition() {
      const targetCoords = this.target.getBoundingClientRect()
      const targetCenterY = targetCoords.x + targetCoords.width / 2
      const tooltipCoords = this.tooltip.$el.getBoundingClientRect()

      switch (this.position) {
        case POSITION.bottom: {
          this.tooltip.$el.style.top =
            targetCoords.y + targetCoords.height + this.offset + 'px'

          this.tooltip.$el.style.left =
            targetCenterY - tooltipCoords.width / 2 + 'px'
          break
        }

        case POSITION.top: {
          this.tooltip.$el.style.top =
            targetCoords.y - tooltipCoords.height - this.offset + 'px'

          this.tooltip.$el.style.left =
            targetCenterY - tooltipCoords.width / 2 + 'px'
          break
        }
      }
    }
  },

  mounted() {
    this.target = this.$el.parentElement

    if (this.value === undefined) {
      this.target.addEventListener('mouseover', this.show)
      this.target.addEventListener('mouseleave', this.destroy)
    }
    document.addEventListener('scroll', this.destroy)

    if (this.value === true) {
      this.show()
    }
  },

  beforeDestroy() {
    this.target.removeEventListener('mouseover', this.show)
    this.target.removeEventListener('mouseleave', this.destroy)
    document.removeEventListener('scroll', this.destroy)
  },

  render(h) {
    return h('')
  }
}
</script>

<style lang="stylus">
[__tooltip__].tooltip
  display block
  border-radius 4px
  box-shadow 0 2px 24px 0 rgba(0, 0, 0, 0.16)
  padding 6px 8px
  position fixed
  z-index 1000000
  background-color #505050
  transition opacity .2s, transform .2s
  opacity 0
  pointer-events none
  border-color #505050
  font-size 14px
  line-height 18px
  color white

  &--anchor
    &::before
      content ''
      display block
      border-style solid
      border-width 6px
      position absolute
      left 50%
      border-color transparent
      transform translateX(-50%)

  &--position-bottom
    transform translateY(-10px)
    &::before
      border-top none
      top -6px
      border-bottom-color inherit

  &--position-top
    transform translateY(10px)
    &::before
      border-color transparent
      border-bottom none
      bottom: -6px
      border-top-color inherit

  &.active
    opacity 1
    transform translateY(0)
</style>
