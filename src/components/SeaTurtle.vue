<script setup>
const turtles = [
  { src: '/src/components/image/sea_turtle_image/longturtle.png', alt: '장수거북' },
  { src: '/src/components/image/sea_turtle_image/redturtle.png', alt: '붉은바다거북' },
  { src: '/src/components/image/sea_turtle_image/Archelon.png', alt: '아르켈론' },
  { src: '/src/components/image/sea_turtle_image/Flat-backed.png', alt: '납작등바다거북' },
  { src: '/src/components/image/sea_turtle_image/camp.png', alt: '캠프각시바다거북' },
  { src: '/src/components/image/sea_turtle_image/olive.png', alt: '올리브각시바다거북' }
]

const logTurtle = (turtle) => {
  console.log('Navigating with turtle:', turtle)
}
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
        <!-- to="" 의 값을 JSON.stringify로 문자열로 변환하는 이유는 URL경로 파라미터는 문자열만 허용하기 때문이다. -->
        <!-- [객체 -> 문자열 / 문자열 ->(피싱) 객체 ] -->
        <RouterLink
          class="turtle_RouterLink"
          :to="{ name: '거북이 상세페이지', params: { turtle: JSON.stringify(turtle) } }"
          @click="logTurtle(turtle)"
        >
          <img class="turtle_img" :src="turtle.src" :alt="turtle.alt" />
          <h3 class="turtle_name">{{ turtle.alt }}</h3>
        </RouterLink>
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
  background-color: #f2f2f2;
}

.seaturtle_title {
  padding-bottom: 10px;
  color: #333;
  text-align: center;
}

.seaturtle_intro_box {
  padding-top: 10px;
  width: 100%;
  text-align: center;
}

.seaturtle_container {
  flex-direction: column;
  display: flex;
  padding-top: 7vh;
  align-items: center;
}

.turtle_image_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 20px;
}

.turtle_RouterLink {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-decoration: none;
}

.turtle_image_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 20px 20px;
  width: 300px;
  height: 350px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  overflow: hidden;
}

.turtle_img {
  width: 100%;
  height: 80%;
  object-fit: cover;
}

.turtle_name {
  margin-top: 23px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
}
</style>
