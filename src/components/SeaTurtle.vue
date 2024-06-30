<script setup>
import { ref, onMounted } from 'vue'

const turtles = ref([])
const load = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('/turtles.json')
    if (!response.ok) {
      throw new Error('안되용')
    }
    const data = await response.json()
    turtles.value = data
  } catch (err) {
    error.value = err.message
  } finally {
    load.value = false
  }
})
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
        <RouterLink
          class="turtle_RouterLink"
          :to="{ name: '거북이 상세페이지', params: { turtle: JSON.stringify(turtle) } }"
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
