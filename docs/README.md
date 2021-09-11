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
yarn add vue-easy-tooltip
```

``` sh
npm i vue-easy-tooltip
```

::: slot baseUsage
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
:::


::: slot withVModel
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
:::
