import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import App from './App.vue'
import axios from 'axios';
import router from "./router";

import "./style.css"

const app = createApp(App)

app.use(ElementPlus).use(Antd).use(router).mount('#app')

// axios.defaults.baseURL = 'http://192.168.xxx.xxx:xxxx/api/';
