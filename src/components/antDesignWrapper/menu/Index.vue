<template>
  <div class="dark-mode-bg">
    <div class="flex py-2.5 px-5">
      <div class="square-boxify-image">
        <img
          class="rounded-lg image-inside"
          src="https://image.boom-app.wiki/wiki/5dce6847b1b4b819979866e3/icon_icon.jpg?w=80"
          alt="LOGO"
        >
      </div>
      <h1 class="text-2xl font-bold mx-2.5 my-auto tracking-wider dark-mode-text">
        地城邂逅攻略
      </h1>
    </div>
    <a-menu
      mode="horizontal"
      class="bg-transparent"
    >
      <a-menu-item key="1">
        <router-link
          class="px-5 dark-mode-text font-bold text-[13px]"
          to="/"
        >
          首頁
        </router-link>
      </a-menu-item>

      <a-menu-item key="2">
        <router-link
          class="px-5 dark-mode-text font-bold text-[13px]"
          to="/"
        >
          角色清單
        </router-link>
      </a-menu-item>

      <a-menu-item key="3">
        <router-link
          class="px-5 dark-mode-text font-bold text-[13px]"
          to="/"
        >
          角色篩選
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss"></style>
