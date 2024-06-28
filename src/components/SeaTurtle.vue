<script setup>
const turtles = [
  { src: '/src/components/image/sea_turtle_image/longturtle.png', alt: '장수거북' },
  { src: '/src/components/image/sea_turtle_image/redturtle.png', alt: '붉은바다거북' },
  { src: '/src/components/image/sea_turtle_image/Archelon.png', alt: '아르켈론' },
  { src: '/src/components/image/sea_turtle_image/Flat-backed.png', alt: '납작등바다거북' },
  { src: '/src/components/image/sea_turtle_image/camp.png', alt: '캠프각시바다거북' },
  { src: '/src/components/image/sea_turtle_image/olive.png', alt: '올리브각시바다거북' }
]
</script>

<template>
  <div class="seaturtle_container">
    <div class="seaturtle_intro_box">
      <h1 class="seaturtle_title">바다거북</h1>
      <h3 class="seaturtle_intro">
        해양 파충류 중 바다에 가장 잘 적응하고 특화된 멋진 동물이에요!
      </h3>
    </div>
    <div class="turtle_image_container">
      <div class="turtle_image_box" v-for="(turtle, index) in turtles" :key="index">
        <img class="turtle_img" :src="turtle.src" :alt="turtle.alt" />
        <h3 class="turtle_name">{{ turtle.alt }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

body {
  background-color: #f2f2f2; /* 배경색을 부드러운 회색으로 변경 */
}

.seaturtle_title {
  padding-bottom: 10px;
  color: #333; /* 텍스트 색상 어둡게 */
  text-align: center; /* 가운데 정렬 추가 */
}

.seaturtle_intro_box {
  padding-top: 10px;
  width: 100%;
  text-align: center; /* 가운데 정렬 추가 */
}

.seaturtle_container {
  flex-direction: column;
  display: flex;
  padding-top: 7vh;
  align-items: center; /* 가운데 정렬 */
}

.turtle_image_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 20px; /* 패딩 추가 */
}

.turtle_image_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 20px 20px;
  width: 300px; /* 너비 조정 */
  height: 350px; /* 이미지 높이 + 이름 높이 */
  background-color: white; /* 배경색 변경 */
  border-radius: 15px; /* 둥근 모서리 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  overflow: hidden;
}

.turtle_img {
  width: 100%;
  height: 80%; /* 이미지 높이를 조정하여 이름과 비율 맞춤 */
  object-fit: cover;
}

.turtle_name {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #333; /* 텍스트 색상 어둡게 */
  text-align: center;
}
</style>
