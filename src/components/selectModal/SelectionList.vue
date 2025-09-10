<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import type { MissileBody } from '@/types/Body'

const props = defineProps<{
  missileBodyData: MissileBody[]
}>()

const emit = defineEmits<{}>()
</script>
<template></template>
