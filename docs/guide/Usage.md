# Usage

## Base usage
``` vue
<template>
  <button>
    Hover me
    <vue-easy-tooltip>
      I am a tooltip
    </vue-easy-tooltip>
  </button>
</template>

<script>
  import VueEasyTooltip from "vue-easy-tooltip"
  
  components: {
    VueEasyTooltip
  }
</script>
```

## With v-model
``` vue
<template>
  <button @click="tooltip = !tooltip">
    Click me
    <vue-easy-tooltip v-model="tooltip">
      I am a tooltip
    </vue-easy-tooltip>
  </button>
</template>

<script>
  import VueEasyTooltip from "vue-easy-tooltip"
  
  components: {
    VueEasyTooltip
  },
  
  data: () => ({
    tooltip: false
  })
</script>
```
