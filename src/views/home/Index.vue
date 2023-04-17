<template>
  <default-layout>
    <template #header>
      <Header />
    </template>
    <template #breadcrumb>
      <Breadcrumb />
    </template>
    <template #sider>
      <a-layout-sider
        v-model:collapsed="collapsed"
        :trigger="null"
        collapsible
      >
        <div class="logo" />
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="inline"
        >
          <a-menu-item key="1">
            <pie-chart-outlined />
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <desktop-outlined />
            <span>Option 2</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
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
import { ref } from 'vue';

const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);
</script>
<style scoped lang="scss"></style>
