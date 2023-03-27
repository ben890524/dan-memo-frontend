<template>
  <section
    name="header"
    class="bg-default-primary-color dark:bg-dark-primary-color mx-0 lg:mx-[10%]"
  >
    <div class="flex items-center justify-between px-5 py-2.5">
      <template v-if="true">
        <div class="text-dark-primary-color dark:text-default-primary-color">
          LOGO-SITE
        </div>
      </template>
      <template v-if="false">
        <img
          src=""
          alt="logo"
        >
      </template>
      <div class="flex items-center justify-center">
        <button
          class="flex items-center outline-none text-dark-primary-color dark:text-default-primary-color"
          @click="toggleDark()"
        >
          <bulb-outlined v-if="isDark" />
          <bulb-filled v-else />
        </button>
      </div>
    </div>
    <wrapper-menu />
  </section>
</template>

<script setup lang="ts">
import WrapperMenu from '@/components/antDesignWrapper/menu/Index.vue';
import { BulbOutlined, BulbFilled } from '@ant-design/icons-vue';
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<style scoped lang="scss"></style>
