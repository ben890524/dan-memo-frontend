<template>
  <a-layout>
    <template v-if="!!$slots.header">
      <!-- is null not render -->
      <slot name="header" />
    </template>
    <a-layout-content class="px-0 lg:px-[10%]">
      <template v-if="!!$slots.breadcrumb">
        <slot name="breadcrumb" />
      </template>
      <!-- is null not render -->
      <a-layout style="padding: 24px 0; background: #fff">
        <template v-if="!!$slots.sider">
          <slot name="sider" />
        </template>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <template v-if="!!$slots.default">
            <slot />
          </template>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <template v-if="!!$slots.footer">
      <!-- is null not render -->
      <a-layout-footer style="text-align: center">
        <slot name="footer" />
      </a-layout-footer>
    </template>
  </a-layout>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss"></style>
