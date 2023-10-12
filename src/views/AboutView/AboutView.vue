<template>
  <div v-loading="loading" style="width: 100%">
    <h1 class="text-5xl">About view</h1>
    <p>Count: {{ count }}</p>
    <button @click="openModalConfirm()">Submit</button>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'AboutView',
  setup() {
    // Define reactive data using ref
    const count = ref(0)
    const store = useStore()
    const isShow = computed(() => store.state.confirmModal.isShow)
    const loading = computed(() => store.state.confirmModal.isLoading)

    // Define component methods
    const increment = async () => {
      count.value++
      console.log('called')
    }

    const openModalConfirm = () => {
      store.dispatch('confirmModal/open', {
        callback: increment,
        title: 'AV',
        sub: 'When this is feature is enabled, the content under default slot will be destroyed with a v-if directive. Enable this when you have perf concerns.'
      })
    }

    // Return data and methods
    return {
      count,
      increment,
      openModalConfirm,
      isShow,
      loading
    }
  }
}
</script>