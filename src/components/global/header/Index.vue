<template>
  <section
    name="header"
    class="dark-mode-bg mx-0 lg:mx-[10%]"
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
          class="dark-mode-text"
          v-bind="{
            ...button.attrs,
          }"
          v-on="{
            ...button.listeners,
          }"
        >
          <template #icon>
            <component
              :is="`${button.icon}Filled`"
              v-if="isDark"
            />
            <component
              :is="`${button.icon}Outlined`"
              v-else
            />
          </template>
        </a-button>
      </div>
    </div>
    <wrapper-menu />
  </section>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import WrapperMenu from '@/components/antDesignWrapper/menu/Index.vue';
import { IAntDesignButton } from '@/composables/useAntDesignVue/types';
import { useI18n } from '@/composables/useI18n/index';
interface IHeader {
  buttons: Array<IAntDesignButton>;
}
const isDark = useDark();
const toggleDark = useToggle(isDark);
// const data_headerSchema = reactive({});
const data_header: IHeader = reactive({
  buttons: [
    {
      name: 'button_darkMode',
      icon: 'Bulb',
      attrs: {
        disabled: false,
        loading: false,
        type: 'text',
        title: computed(() =>
          isDark.value
            ? `${useI18n('ENABLE')} ${useI18n('DARK_MODE')}`
            : `${useI18n('DISABLE')} ${useI18n('DARK_MODE')}`
        ),
      },
      listeners: {
        click: () => {
          toggleDark();
        },
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
        click: () => {
          window.location.href = 'https://github.com/ben890524/danmemo-chara-list';
        },
        focus: () => {},
      },
    },
  ],
});
</script>
<style scoped lang="scss"></style>
