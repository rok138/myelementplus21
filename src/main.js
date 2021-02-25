import { createApp } from 'vue'
import App from './App.vue'
// import './them#1d2228/index.css' 	
// import '../element-var.scss'
import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/lib/theme-chalk/display.css';
import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn'
import { router } from './router'
// import './assets/fontawesome-free-5.11.2-web/css/all.min.css'
// import '@fortawesome/fontawesome-free/css/all.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'


var app = createApp(App)

// app.use(ElementPlus, { locale, size: 'small', zIndex: 3000 })
app.use(ElementPlus, { locale })
app.use(router)

app.mount('#app')
