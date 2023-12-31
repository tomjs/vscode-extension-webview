// eslint-disable-next-line simple-import-sort/imports
import '@tomjs/vscode-extension-webview/client';

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

window.addEventListener('message', e => {
  console.log('from extension:', e);
});
