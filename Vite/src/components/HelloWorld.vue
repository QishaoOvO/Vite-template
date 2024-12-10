<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <a-button type="primary" @click="message.info('Hello, Ant Design Vue!');">Ant Design</a-button>
    <a style="padding: 5px"></a>
    <el-button type="primary" @click="ElMessage('Hello, Element Plus!')">Element Plus</el-button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>


<script setup>
import { ref } from 'vue'
import {message} from "ant-design-vue";
import { ElMessage } from 'element-plus'

defineProps({
  msg: String,
})

</script>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
