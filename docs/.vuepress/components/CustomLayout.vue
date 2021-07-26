<template>
  <div>
    <navbar />
    <home>
      <Content slot-key="baseUsage"/>
      <div style="text-align: center; padding: 16px;">
        <custom-button>
          Hover me
          <tooltip-vue>
            I am a tooltip
          </tooltip-vue>
        </custom-button>
      </div>

      <Content slot-key="withVModel"/>
      <div style="text-align: center; padding: 16px;">
        <custom-button @click.native="tooltip = !tooltip">
          Click me
          <tooltip-vue v-model="tooltip">
            I am a tooltip
          </tooltip-vue>
        </custom-button>
      </div>
    </home>
  </div>
</template>

<script>

import Navbar from "./Navbar"
import Home from "./Home"
import CustomButton from "./CustomButton"
import TooltipVue from "../../../src/Tooltip"

export default {
  components: {
    Home,
    Navbar,
    TooltipVue,
    CustomButton
  },

  data: () => ({
    tooltip: false
  })
}
</script>
