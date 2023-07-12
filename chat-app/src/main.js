import { createApp } from 'vue'

// 替换前
// import App from './App.vue'

//createApp(App).mount('#app')

// 替换后
import Chat from './components/Chat.vue' 

createApp(Chat).mount('#app')