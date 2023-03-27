<template>
  <section name="header">
    <div @click="toggleDark()">
      132132
    </div>
  </section>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<style scoped lang="scss"></style>
