<template>
  <div class="dark-mode-bg">
    <div class="flex py-2.5 px-5">
      <div class="square-boxify-image">
        <img
          class="rounded-lg image-inside"
          :src="SiteIcon"
          alt="LOGO"
        >
      </div>
      <h1 class="text-2xl font-bold mx-2.5 my-auto tracking-wider dark-mode-text">
        地城邂逅攻略
      </h1>
    </div>
    <a-menu v-bind="{ ...data_headerMenu.menu.attrs }">
      <a-menu-item
        v-for="(data_headerMenuItem, index) in data_headerMenu.menu.items"
        :key="index"
      >
        <router-link v-bind="{ ...data_headerMenuItem.attrs }">
          <span class="dark-mode-text">{{ data_headerMenuItem.text }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script setup lang="ts">
import { reactive, computed } from 'vue';
import { useI18n } from '@/composables/useI18n/index';
import { useDark } from '@vueuse/core';
import SiteIcon from '@/assets/images/site-icon.jpg';
import { IAntDesignMenu } from '@/composables/useAntDesignVue/types';
const isDark = useDark();
interface IHeaderMenu {
  menu: IAntDesignMenu;
}
const data_headerMenuSchema = reactive({
  title: computed(() => useI18n('SITE_TITLE')),
  home: computed(() => useI18n('SITE_HOME')),
  list: computed(() => useI18n('SITE_LIST')),
  filter: computed(() => useI18n('SITE_FILTER')),
});
const data_headerMenu: IHeaderMenu = reactive({
  menu: {
    name: 'menu_headerMenu',
    items: [
      { text: data_headerMenuSchema.home, attrs: { class: 'px-5 font-bold text-[13px]', name: '', to: '/' } },
      { text: data_headerMenuSchema.list, attrs: { class: 'px-5 font-bold text-[13px]', name: '', to: '/' } },
      { text: data_headerMenuSchema.filter, attrs: { class: 'px-5 font-bold text-[13px]', name: '', to: '/' } },
    ],
    attrs: {
      theme: computed(() => (isDark.value ? 'dark' : 'light')),
      mode: 'horizontal',
      class: 'bg-transparent',
    },
    listeners: {
      click: () => {},
      focus: () => {},
    },
  },
});
</script>
<style scoped lang="scss"></style>
