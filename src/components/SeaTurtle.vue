<script setup>
const turtles = [
  { src: '/src/components/image/sea_turtle-image/longturtle.png', alt: '장수거북' },
  { src: '/src/components/image/sea_turtle-image/other-image1.png', alt: '붉은바다거북' }, // 예시 경로 수정
  { src: '/src/components/image/sea_turtle-image/other-image2.png', alt: '바다거북' }, // 예시 경로 수정
  { src: '/src/components/image/sea_turtle-image/other-image3.png', alt: '아르켈론' }, // 예시 경로 수정
  { src: '/src/components/image/sea_turtle-image/other-image4.png', alt: '납작등바다거북' }, // 예시 경로 수정
  { src: '/src/components/image/sea_turtle-image/other-image5.png', alt: '캠프각시바다거북' }, // 예시 경로 수정
  { src: '/src/components/image/sea_turtle-image/other-image6.png', alt: '올리브각시바다거북' } // 예시 경로 수정
]
</script>

<template>
  <div class="seaturtle-container">
    <div class="">
      <h1>바다거북</h1>
    </div>
    <div class="turtle-image-box" v-for="(turtle, index) in turtles" :key="index">
      <img class="turtle-img" :src="turtle.src" :alt="turtle.alt" />
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

.seaturtle-container {
  padding-top: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.turtle-image-box {
  display: flex;
  margin: 20px;
  width: 400px;
  height: 300px;
  background-color: rgb(97, 155, 232);
  overflow: hidden;
}

.turtle-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지가 div를 꽉 채우면서 잘리지 않도록 설정 */
}
</style>
