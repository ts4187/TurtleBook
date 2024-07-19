<template>
  <div class="Mainpage_container">
    <div :class="{ 'fade-in': showNameBox }" class="site_name_box">
      <img class="openBook_img" src="/icons/openBook.png" alt="Book" />
      <h1 class="site_name">: 거북이의 세계</h1>
    </div>
    <div :class="{ 'fade-in': showIntroBox }" class="site_Intro_box">
      <h2 class="site_Intro">거북이의 다양한 종류와 그들의 독특한 특성에 대해 알아보세요!</h2>
      <br />
      <h2 class="site_Intro">
        <RouterLink class="Sea_turtle_Link RouterLink" to="/SeaTurtleIntro">바다거북</RouterLink>
        부터
        <RouterLink class="Land_turtle_Link RouterLink" to="/LandTurtleIntro">육지거북</RouterLink>
        까지, 각 거북이의 생태와 특징을 소개하는 사이트입니다!
      </h2>
      <br />
      <h2 class="site_Intro">
        거북이에 대한 흥미로운 사실과 깊이 있는 정보를 통해 이 경이로운 생명체들을 더 가까이서
        느껴보세요!
      </h2>
      <div :class="{ 'fade-in': showPsBox }" class="ps_box">
        <h6 class="ps">바다거북과 육지거북을 클릭해보세요!</h6>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const showNameBox = ref(false);
const showIntroBox = ref(false);
const showPsBox = ref(false);

onMounted(() => {
  setTimeout(() => {
    showNameBox.value = true;
  }, 500);
  setTimeout(() => {
    showIntroBox.value = true;
  }, 1000);
  setTimeout(() => {
    showPsBox.value = true;
  }, 1500);
});
</script>

<style scoped>
/* 스타일 정의 */
* {
  padding: 0;
  margin: 0;
}

body {
  background-color: #f2f2f2;
}

.Mainpage_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 92vh;
}

.openBook_img {
  width: 130px;
}

.site_name_box,
.site_Intro_box,
.ps_box {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 2s ease-in-out, transform 2s ease-in-out;
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.site_name_box {
  margin-bottom: 20vh;
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

.site_name {
  font-size: 80px;
}

.ps_box {
  margin-top: 10vh;
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
</style>