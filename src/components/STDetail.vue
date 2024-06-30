<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// 라우트 정보 가져오기
const route = useRoute()

const turtleId = ref(route.params.turtleId)

// 바다거북 목록
const turtles = ref([])
// computed 속성 사용 - 선택한 바다거북 반환
const turtle = computed(() => {
  return turtles.value.find((turtle) => turtle.id === turtleId.value)
})

// 레이터 로딩중인지 확인
const loading = ref(true)
// 오류 발생 여부 확인
const error = ref(false)

// 컴포넌트 열릴 때 실행
onMounted(async () => {
  try {
    // 서버에서 turtles.json 파일 가져옴
    const response = await fetch('/turtles.json')
    // 응답 없으면 에러 띄움
    if (!response.ok) {
      throw new Error('바다거북 데이터를 불러오는 데 실패했습니다.')
    }
    // JSON 형식으로 변환된 데이터 변수에 넣기
    turtles.value = await response.json()

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
  <div v-else-if="turtle" class="STDetail_container">
    <h1>{{ turtle.alt }}</h1>
    <div class="img_container">
      <img :src="turtle.src" :alt="turtle.alt" />
    </div>
  </div>
  <div v-else class="STDetail_container">
    <p>해당하는 바다거북을 찾을 수 없습니다.</p>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: aquamarine;
}
.img_container {
  margin-top: 20px;
}
</style>
