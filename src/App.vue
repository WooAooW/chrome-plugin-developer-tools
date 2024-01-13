<template>
    <n-tabs type="card">
        <n-tab-pane key="rule" name="个人收藏" display-directive="show">
            <Favorites/>
        </n-tab-pane>
        <n-tab-pane key="result" name="时间工具" display-directive="show">
            <TimeUtils />
        </n-tab-pane>
        <n-tab-pane key="result" name="M3U8" display-directive="if">
            <M3U8Utils />
        </n-tab-pane>
    </n-tabs>
</template>
  
<script setup lang="ts">
import { NTabs, NTabPane } from 'naive-ui'
import Favorites from './components/Favorites.vue'
import TimeUtils from './components/time/TimeUtils.vue'
import M3U8Utils from './components/m3u8/M3U8Utils.vue'
</script>