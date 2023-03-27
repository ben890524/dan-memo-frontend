<template>
  <default-layout>
    <template #header>
      <Header />
    </template>
    <template #breadcrumb>
      <Breadcrumb />
    </template>
    <template #sider>
      123
    </template>
    <template #footer>
      123
    </template>
    <template #default>
      123456
    </template>
  </default-layout>
</template>
<script setup lang="ts">
/** import component */
import DefaultLayout from '@/layout/default.vue';
import Breadcrumb from '@/components/global/breadcrumb/Index.vue';
import Header from '@/components/global/header/Index.vue';
</script>
<style scoped lang="scss"></style>
