<template>
  <div>
    <h1 v-purple>Inside Directive.vue</h1>

    <h2 v-color="'gold'">Custom Directive with value</h2>

    <h2 v-switching-color="['purple', 'gold', 'pink', 'blue']">
      Switching colors
    </h2>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class DirectiveExample extends Vue {}
</script>
