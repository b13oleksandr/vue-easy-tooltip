# Usage

## Base usage
``` vue
<template>
  <button>
    Hover me
    <tooltip-vue>
      I am a tooltip
    </tooltip-vue>
  </button>
</template>

<script>
  import TooltipVue from "tooltip-vue"
  
  components: {
    TooltipVue
  }
</script>
```


## With v-model
``` vue
<template>
  <button @click="tooltip = !tooltip">
    Click me
    <tooltip-vue v-model="tooltip">
      I am a tooltip
    </tooltip-vue>
  </button>
</template>

<script>
  import TooltipVue from "tooltip-vue"
  
  components: {
    TooltipVue
  },
  
  data: () => ({
    tooltip: false
  })
</script>
```
