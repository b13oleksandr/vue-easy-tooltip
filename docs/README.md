---
layout: CustomLayout
home: true
heroImage:
tagline: null
actionText: null
actionLink: /guide/
features: null
footer: null
---
## Installation
``` sh
yarn add tooltip-vue
```

``` sh
npm i tooltip-vue
```

::: slot baseUsage
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
:::


::: slot withVModel
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
:::
