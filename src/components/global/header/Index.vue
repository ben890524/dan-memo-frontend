<template>
  <section
    name="header"
    class="bg-default-primary-color dark:bg-dark-primary-color mx-0 lg:mx-[10%]"
  >
    <div class="flex items-center justify-between px-5 py-2.5">
      <template v-if="true">
        <div class="text-dark-primary-color dark:text-default-primary-color">
          <span class="text-base">LOGO-SITE</span>
        </div>
      </template>
      <template v-if="false">
        <img
          src=""
          alt="logo"
        >
      </template>
      <div class="flex items-center justify-center">
        <a-button
          v-for="button in data_header.buttons"
          :key="button.name"
          v-bind="{
            ...button.attrs,
          }"
          v-on="{
            ...button.listeners,
          }"
        >
          <template #icon>
            <component
              :is="'GithubOutlined'"
              v-if="isDark"
            />
          </template>
        </a-button>
        <!-- <button
          title="123132"
          class="flex items-center outline-none dark-mode-text mr-2.5 text-base"
          alt="131313"
          @click="toggleDark()"
        >
          <bulb-outlined v-if="isDark" />
          <bulb-filled v-else />
        </button>

        <a-button
          type="primary"
          shape="circle"
        >
          <template #icon>
            <github-outlined />
          </template>
        </a-button> -->
        <!-- <button class="flex items-center text-base outline-none dark-mode-text" @click="toggleDark()">
          <github-outlined v-if="isDark" />
          <github-filled v-else />
        </button> -->
      </div>
    </div>
    <wrapper-menu />
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
// import { BulbOutlined, BulbFilled, GithubOutlined, GithubFilled } from '@ant-design/icons-vue';
import { useDark, useToggle } from '@vueuse/core';
import WrapperMenu from '@/components/antDesignWrapper/menu/Index.vue';
import { IAntDesignButton } from '@/composables/useAntDesignVue/types';

interface IHeader {
  buttons: Array<IAntDesignButton>;
}
const isDark = useDark();
const toggleDark = useToggle(isDark);

const data_headerSchema = reactive({});
const data_header: IHeader = reactive({
  buttons: [
    {
      name: 'button_darkMode',
      icon: 'Bulb',
      attrs: {
        disabled: false,
        loading: false,
        type: 'text',
        title: isDark.value ? '開啟黑暗模式' : '關閉黑暗模式',
      },
      listeners: {
        click: () => {},
        focus: () => {},
      },
    },
    {
      name: 'button_github',
      icon: 'Github',
      attrs: {
        disabled: false,
        loading: false,
        type: 'text',
        title: '前往GitHub~',
      },
      listeners: {
        click: () => {},
        focus: () => {},
      },
    },
  ],
});
</script>
<style scoped lang="scss"></style>
