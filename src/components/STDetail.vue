<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// 라우트 정보 가져오기
const route = useRoute()

// id를 문자열로 변환하여 저장
const id = ref(route.params.id)

// 바다거북 목록
const turtles = ref([])
const turtlestory = ref([])

// computed 속성 사용 - 선택한 바다거북 반환
const turtle = computed(() => {
  // turtles 배열이 비어 있는 경우
  if (turtles.value.length === 0 || turtlestory.value.length === 0) {
    return null
  }

  // turtles 배열에서 id와 일치하는 바다거북 찾기
  const foundTurtle = turtles.value.find((turtle) => turtle.id.toString() === id.value)

  // turtlestory에서 id와 일치하는 바다거북 정보 찾기
  const foundStory = turtlestory.value.find((story) => story.id.toString() === id.value)

  // 일치하는 바다거북이 없는 경우
  if (!foundTurtle || !foundStory) {
    return null
  }

  // 이미지와 상세 정보를 합쳐 반환
  return {
    ...foundTurtle,
    ...foundStory
  }
})

// 로딩 상태 확인
const loading = ref(true)
// 오류 발생 여부 확인
const error = ref(false)

// 컴포넌트 열릴 때 실행
onMounted(async () => {
  try {
    // 서버에서 turtles.json 파일 가져오기
    const response1 = await fetch('/src/components/data/turtles.json')
    if (!response1.ok) {
      throw new Error('바다거북 데이터를 불러오는 데 실패했습니다.')
    }
    // JSON 형식으로 변환된 데이터 변수에 넣기
    turtles.value = await response1.json()
    console.log('Turtles:', turtles.value)

    // 두 번째 JSON 파일 가져오기 (turtlestory.json)
    const response2 = await fetch('/src/components/data/turtlestory.json')
    if (!response2.ok) {
      throw new Error('바다거북 상세 데이터를 불러오는 데 실패했습니다.')
    }
    // JSON 형식으로 변환된 데이터 변수에 넣기
    turtlestory.value = await response2.json()
    console.log('Turtle Stories:', turtlestory.value)

    // 로딩 완료
    loading.value = false
  } catch (error) {
    // 오류 발생하면 출력시킴
    console.error('바다거북 데이터를 불러오는 중 오류 발생:', error.message)

    // 데이터 로딩 완료
    loading.value = false
    error.value = true
  }
})
</script>

<template>
  <div v-if="loading" class="STDetail_container">
    <p>Loading...</p>
  </div>
  <div v-else-if="error" class="STDetail_container">
    <p>바다거북 데이터를 불러오는 중 오류가 발생했습니다.</p>
  </div>
  <div v-else>
    <div v-if="turtle" class="STDetail_container">
      <div class="img_container">
        <img class="turtle_image" :src="turtle.src" :alt="turtle.alt" />
        <h1 class="turtle_name">{{ turtle.alt }}</h1>
      </div>
      <div class="habitat_box">
        <h3>서식지:</h3>
        <p>{{ turtle.habitat }}</p>
      </div>
    </div>
    <div v-else class="STDetail_container">
      <p>해당하는 바다거북을 찾을 수 없습니다.</p>
    </div>
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
  height: 100vh;
  background-color: #f2f2f2;
}

.img_container {
  margin-left: 0.5vh;
  flex-direction: column;
  display: flex;
  width: 500px;
  height: 400px;
  margin-top: 0.5vh;
  border-radius: 23px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  overflow: hidden;
}

.turtle_image {
  display: flex;
  width: 100%;
  height: 80%;
}

.turtle_name {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.habitat_box {
  font-size: 30px;
  margin: 0.5vh 20vh 0px;
  width: 700px;
  height: 300px;
  display: flex;
  flex-direction: column;
}
</style>
