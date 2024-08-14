<template>
  <header>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div :class="['app_container', { 'fade-in': roadappcontainer }]">
      <div class="wrapper">
        <RouterLink class="openBook_img_RouterLink" to="/">
          <img class="openBook_img" src="/icons/openBook.png" alt="Book" />
        </RouterLink>
        <RouterLink class="Main_page_Link site_name" to="/">: 거북이의 세계</RouterLink>
      </div>
      <!-- Image with mouseover event -->
      <div class="image-container" @mouseover="handleMouseOver" @mouseleave="handleMouseOut">
        <img :src="plusImage" alt="Plus Icon" class="plus-icon" />
        <nav
          v-if="showLinks"
          class="hidden-nav"
          @mouseover="handleMouseOver"
          @mouseleave="handleMouseOut"
        >
          <!-- index.js에 있는 path와 to 의 이름이 같아야 이동가능 -->
          <RouterLink class="RouterLink" to="/">페이지 소개</RouterLink>
          <RouterLink class="RouterLink" to="/SeaTurtleIntro">바다 거북</RouterLink>
          <RouterLink class="RouterLink" to="/LandturtleIntro">육지 거북</RouterLink>
        </nav>
      </div>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue' // ref = 반응형 상태를 만들기 위해 사용
import { RouterLink, RouterView } from 'vue-router'
import plusImage from '/icons/Plus.png' // 이미지 경로

const roadappcontainer = ref(false)
// 반응형 상태 = showLinks / 초기값을 false로 설정 / 객체 형태로 저장, showLinks.value에 저장
const showLinks = ref(false)

// mouseover가 실행될 경우 showLinks.value의 값을 ture로 변경
const handleMouseOver = () => {
  showLinks.value = true
}
// mouseout이 실행될 경우 showLinks.value의 값을 false로 변경
const handleMouseOut = () => {
  showLinks.value = false
}

onMounted (() => {
  setTimeout(() => {
    roadappcontainer.value = true
  }, 2000)
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

/* Base styles */
.app_container {
  opacity: 0;
  transition: opacity 2s ease-in;
}

.fade-in {
  opacity: 1;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.openBook_img {
  width: 60px;
  height: 60px;
}

header {
  width: 100%;
  position: fixed;
  top: 0;
}

.site_name {
  font-size: 23px;
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  font-weight: bold;
  display: block;
}

.app_container {
  background-color: #1db85b;
  height: 6.5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.image-container {
  position: relative;
}

.plus-icon {
  width: 32px;
  height: 32px;
  cursor: pointer;
}

.hidden-nav {
  position: absolute;
  top: 100%;
  left: -80px; /* 왼쪽으로 이동 */
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  gap: 0.5rem;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  overflow: visible; /* 텍스트가 잘리지 않도록 */
}

.RouterLink {
  color: black;
  text-decoration: none;
  font-weight: bold;
  display: block;
  padding: 0.5rem 1rem; /* 충분한 여백 */
}

.RouterLink:hover {
  text-decoration: underline;
}

/* Responsive Styles */

/* Mobile (Small devices, 600px and down) */
@media only screen and (max-width: 600px) {
  .wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .site_name {
    font-size: 18px;
  }

  .openBook_img {
    width: 50px;
    height: 50px;
  }

  .plus-icon {
    width: 28px;
    height: 28px;
  }

  .hidden-nav {
    left: 0; /* 중앙 정렬 */
    width: 100vw; /* 화면 전체 너비 사용 */
    text-align: center;
  }

  .RouterLink {
    padding: 1rem;
  }
}

/* Tablets (601px to 768px) */
@media only screen and (min-width: 601px) and (max-width: 768px) {
  .wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .site_name {
    font-size: 20px;
  }

  .openBook_img {
    width: 55px;
    height: 55px;
  }

  .plus-icon {
    width: 30px;
    height: 30px;
  }

  .hidden-nav {
    left: -40px; /* 살짝 왼쪽으로 이동 */
  }

  .RouterLink {
    padding: 0.75rem 1.5rem;
  }
}

/* Desktop (769px and up) */
@media only screen and (min-width: 769px) {
  .wrapper {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .site_name {
    font-size: 23px;
  }

  .openBook_img {
    width: 60px;
    height: 60px;
  }

  .plus-icon {
    width: 32px;
    height: 32px;
  }

  .hidden-nav {
    left: -80px; /* 왼쪽으로 이동 */
  }

  .RouterLink {
    padding: 0.5rem 1rem;
  }
}
</style>