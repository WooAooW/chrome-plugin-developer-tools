<template>
    配置为: {{ favoritesRule }}
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { FAVORITES_KEY, FavoritesRule } from '../api/storage'

// 读取用户的配置信息
const defaultRule: FavoritesRule = new FavoritesRule()
const favoritesRule = useLocalStorage(FAVORITES_KEY, defaultRule)

</script>