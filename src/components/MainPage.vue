<template>
  <div class="Mainpage_container">
    <transition name="fade">
      <div v-if="showBackground" class="background-image"></div>
    </transition>
    <transition name="fade">
      <div v-if="showText" class="text-container">
        <div :class="['site_name_box', { 'fade-in': showNameBox }]">
          <img class="openBook_img" src="/icons/openBook.png" alt="Book" />
          <h1 class="site_name">: 거북이의 세계</h1>
        </div>
        <div :class="['site_Intro_box', { 'fade-in': showIntroBox }]">
          <h2 class="site_Intro">거북이의 다양한 종류와 그들의 독특한 특성에 대해 알아보세요!</h2>
          <br />
          <h2 class="site_Intro">
            <RouterLink class="Sea_turtle_Link RouterLink" to="/SeaTurtleIntro"
              >바다거북</RouterLink
            >
            부터
            <RouterLink class="Land_turtle_Link RouterLink" to="/LandTurtleIntro"
              >육지거북</RouterLink
            >
            까지, 각 거북이의 생태와 특징을 소개하는 사이트입니다!
          </h2>
          <br />
          <h2 class="site_Intro">
            거북이에 대한 흥미로운 사실과 깊이 있는 정보를 통해 이 경이로운 생명체들을 더 가까이서
            느껴보세요!
          </h2>
        </div>
        <div :class="['ex_turtle_image_container', { 'fade-in': showeximage }]">
          <div class="ex_turtle_image_box">
            <RouterLink class="ex_image_Link" to="/SeaTurtleIntro">
              <img
                class="ex_image"
                src="/public/image/sea_turtle_image/exseaturtle.jpeg"
                alt="바다거북 예시"
              />
              <h2 class="ex_name">바다거북 보러가기!</h2>
            </RouterLink>
          </div>
          <div class="ex_turtle_image_box">
            <RouterLink class="ex_image_Link" to="/LandTurtleIntro">
              <img
                class="ex_image"
                src="/public/image/sea_turtle_image/exlandturtle.jpeg"
                alt="육지거북 예시"
              />
              <h2 class="ex_name">육지거북 보러가기!</h2>
            </RouterLink>
          </div>
        </div>
        <div :class="['ps_box', { 'fade-in': showPsBox }]">
          <h6 class="ps">바다거북과 육지거북을 클릭해보세요!</h6>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const seaexturtle = ref([])
const landexturtle = ref([])

const showeximage = ref(false)
const showNameBox = ref(false)
const showIntroBox = ref(false)
const showPsBox = ref(false)
const showText = ref(false)
const showBackground = ref(true)

onMounted(() => {
  setTimeout(() => {
    showBackground.value = false
    setTimeout(() => {
      showText.value = true
      setTimeout(() => {
        showNameBox.value = true
      }, 500)
      setTimeout(() => {
        showIntroBox.value = true
      }, 1000)
      setTimeout(() => {
        showeximage.value = true
      }, 1250)
      setTimeout(() => {
        showPsBox.value = true
      }, 1500)
    }, 1000)
  }, 1000) // 3초 지연 후 시작
})

onMounted(async () => {
  try {
    const response1 = await fetch('/data/seaturtles.json')
    const response2 = await fetch('/data/landturtles.json')
    if (!response1.ok) {
      throw new Error('에러발생')
    } else if (!response2.ok) {
      throw new Error('에러발생2')
    }
    const data1 = await response1.json()
    const data2 = await response2.json()
    seaexturtle.value = data1
    landexturtle.value = data2
    console.log(seaexturtle.value)
    console.log(landexturtle.value)
  } catch (err) {
    console.error('데이터 불러오기 실패', err.message)
  }
})
</script>

<style scoped>
/* 스타일 정의 */
* {
  padding: 0;
  margin: 0;
}

.ps {
  font-size: 15px;
}

.ex_turtle_image_container {
  display: flex;
  align-items: center;
  justify-content: center ;
  width: 100%;
}

.ex_turtle_image_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 40px;
  width: 200px;
  height: 230px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.ex_image_Link {
  width: 200px;
  height: 180px;
  text-decoration: none;
}

.ex_image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ex_name {
  margin-top: 10px;
  font-size: 15px;
  font-weight: bold;
  color: #333;
  text-align: center;
}

body {
  background-color: #f2f2f2;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/public/image/sea_turtle_image/turtlebook-background-image.jpeg'); /* 배경 이미지 경로 */
  background-size: cover;
  background-position: center;
}

.Mainpage_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.openBook_img {
  width: 130px;
}

.site_name_box,
.site_Intro_box,
.ps_box {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 2s ease-in-out,
    transform 2s ease-in-out;
}

.ex_turtle_image_container {
  opacity: 0;
  transform: translateX(200px);
  transition:
    opacity 2s ease-in-out,
    transform 2s ease-in-out;
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.site_name_box {
  margin-bottom: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.site_Intro_box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.site_Intro {
  font-size: 20px;
}

.site_name {
  font-size: 40px;
}

.ps_box {
  margin-top: 3vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.RouterLink {
  text-decoration: none;
  font-weight: bold;
}

.Main_page_Link {
  color: black;
}

.Land_turtle_Link {
  color: brown;
}

.Sea_turtle_Link {
  color: rgb(42, 114, 209);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
