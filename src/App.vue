<template>
    <div v-if="isSidePanel">
        <n-button type="info" @click="openNewTab">新页面使用</n-button>
        <n-p/>
    </div>
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
import { ref } from 'vue'
import { NTabs, NTabPane, NButton, NP, createDiscreteApi } from 'naive-ui'
import Favorites from './components/Favorites.vue'
import TimeUtils from './components/time/TimeUtils.vue'
import M3U8Utils from './components/m3u8/M3U8Utils.vue'

// 消息提示框
const { message } = createDiscreteApi(['message', 'dialog', 'notification', 'loadingBar'])

// 判断是否在侧边栏
const isSidePanel = ref(true)

// 打开新的标签页
const openNewTab = () => {
    window.open('index.html')
}

// 加载页面信息
const loadTabInfo = () => {
    const queryInfo = {
        active: true,
        currentWindow: true
    }
    if(!chrome) {
        message.warning('当前环境不支持 chrome 插件!')
        return;
    }
    if(!chrome.tabs) {
        message.warning('插件无法申请到 tabs 权限, 请确定当前活动标签为 wiki 页面!')
        return;
    }
    chrome.tabs.query(queryInfo, tabs => {
        const url = tabs[0].url
        if(url?.startsWith("chrome-extension://")) {
            isSidePanel.value = false
        } else {
            isSidePanel.value = true
        }
    })
    return true
}
loadTabInfo()
</script>