<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// route에서 파라미터로 받은 JSON 문자열을 다시 객채로 변환
// URL 파라미터로 객체를 전달 할 수 없기 떄문에, 객체로 문자열(JSON)로 변환
// 문자열로 변환하여 URL 파라미터로 전달하고, 다시 JSON 문자열을 피싱 / 원래 객체로 복원
const route = useRoute()
let turtle

if (route.params.turtle) {
  try {
    turtle = JSON.parse(route.params.turtle)
  } catch (error) {
    console.error('Failed to parse turtle JSON:', error)
    turtle = null // 또는 기본값 설정
  }
} else {
  console.error('No turtle parameter found')
  turtle = null // 또는 기본값 설정
}
</script>

<template>
  <div class="STDetail_container">
    <div class="img_container">
      <img :src="turtle.src" :alt="turtle.alt" />
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.STDetail_container {
  padding-top: 7vh;
  display: flex;
  width: 100vw;
  height: 100vw;
  background-color: aquamarine;
}
</style>
