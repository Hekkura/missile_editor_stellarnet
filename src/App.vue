<script setup lang="ts">
import { RouterView } from 'vue-router'
import MissileBodyModal from './components/MissileBodyModal.vue'
</script>

<template>
  <div class="bg-gray-950 h-screen w-screen font-neb text-gray-200 scrollbar-custom">
    <RouterView></RouterView>
  </div>
</template>
