# vue-js-tooltip

## Installation
``` sh
yarn add tooltip-vue
```

``` sh
npm i tooltip-vue
```

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
