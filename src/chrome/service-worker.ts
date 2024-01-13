console.log('加载 service-worker 脚本');

// 安装完成事件
chrome.runtime.onInstalled.addListener(() => {
  console.log('插件已安装完成')
});

// 通过按钮打开侧边栏
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

// 监听 Tab 切换事件
chrome.tabs.onUpdated.addListener(async (tabId, _changeInfo, tabInfo) => {
  if(!tabInfo.url) return;

  let disable = false;

  // 禁用一些特殊页面
  const disableList = ['chrome://', 'chrome-devtools://', 'chrome-extension://', 'chrome-search://', 'chrome-native://', 'chrome-untrusted://', 'chrome://newtab/'];
  for (const item of disableList) {
    if(tabInfo.url.startsWith(item)) {
      disable = true;
      
    }
  }

  // 禁用侧边栏
  if(disable) {
    await chrome.sidePanel.setOptions({ tabId, enabled: false})
  } else {
    await chrome.sidePanel.setOptions({ tabId, enabled: true, path: 'index.html'})
  }
});