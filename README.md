# vue-js-tooltip

## Installation
``` sh
yarn add vue-easy-tooltip
```

``` sh
npm i vue-easy-tooltip
```

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

# Props

| Name                   | Type            | Default       | Description                                                                      |
| :----------------------|:----------------|:--------------|:---------------------------------------------------------------------------------|
| offset                  | `Number`       | `12`          | Number to offset the tooltip vertically in pixels                                |
| withArrow               | `Boolean`      | `false`       | Show tooltip arrow                                                               |
| position                | `String`       | `bottom`      | Position of the tooltip relative to its target. Accepted values: `top`, `bottom` |
| backgroundColor         | `String`       | `#505050`     | Color tooltip background                                                         |
| classes                 | `String`       | `''`          | CSS classes for the tooltip                                                      |
| styles                  | `Object`       | `{}`          | Object with CSS properties and values for styling the tooltip                    |

# Slots

| Name                   | Description                                                |
| :----------------------|:-----------------------------------------------------------|
| default                | Used for pass the content                                  |
