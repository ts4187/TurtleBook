<script setup>
import { turtles } from '../turtles-db.json'
// route에서 파라미터로 받은 JSON 문자열을 다시 객채로 변환
// URL 파라미터로 객체를 전달 할 수 없기 떄문에, 객체로 문자열(JSON)로 변환
// 문자열로 변환하여 URL 파라미터로 전달하고, 다시 JSON 문자열을 피싱 / 원래 객체로 복원
const turtle = turtles[0];
</script>

<template>
  <div class="STDetail_container">
    <img class="turtle_img" :src="turtle.src" :alt="turtle.alt" width="400px" height="300px"/>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.turtle_img {
  width: auto;
}

.STDetail_container {
  padding-top: 7vh;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vw;
  background-color: aquamarine;
}
</style>
