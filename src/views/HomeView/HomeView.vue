<script setup>
import HeaderWidget from '@/components/HeaderWidget.vue'
import FooterWidget from '@/components/FooterWidget.vue'
import GameItem from '@/components/GameItem.vue'

import games from '@/data/games.js'

const apps = games
</script>

<template>
  <div
    class="container mx-auto grid justify-center gap-4 p-4"
    style="grid-template-columns: repeat(auto-fill, 94px); grid-auto-rows: 94px"
  >
    <HeaderWidget />
    <GameItem v-for="app in apps" :key="app.id" :game="app" />
  </div>
  <FooterWidget />
</template>

<style scoped></style>
