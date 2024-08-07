<template>
  <div>
    <MySalarInfo :salary-info="salaryInfo"></MySalarInfo>
    <button @click="showRes">Update Salary</button>
  </div>
</template>

<script setup>
import MySalarInfo from "@/components/MySalarInfo.vue";
import { reactive } from "vue";

const salaryInfo = reactive({
  username: "wusongming",
  salary: 16000
});

function showRes() {

  salaryInfo.salary += 100; // 直接修改 reactive 对象的属性
  console.log("add",salaryInfo.salary)  
}
</script>

