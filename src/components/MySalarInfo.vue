<template>
  <div>
    姓名：<input type="text" v-model="localSalaryInfo.username"><br>
    薪水：<input type="number" v-model="localSalaryInfo.salary"><br>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'; // 从 vue 包中导入
import { defineProps } from 'vue'; // 从 vue 包中导入

// 定义 props 的类型
const props = defineProps({
  salaryInfo: {
    type: Object,
    required: true
  }
});

// 创建一个本地的 reactive 对象作为数据的副本
const localSalaryInfo = reactive({ ...props.salaryInfo });

// 监听 prop 的变化，并同步到本地副本
watch(() => props.salaryInfo, (newValue) => {
  Object.assign(localSalaryInfo, newValue);
}, { deep: true });
</script>
