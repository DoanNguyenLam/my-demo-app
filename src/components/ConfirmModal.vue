<template>
  <el-dialog class="p-0" v-model="dialogVisible" close-header width="30%">
    <h6 class="text-xl text-center">{{ objInfo.title }}</h6>
    <p>{{ objInfo.sub }}</p>
    <template #footer>
      <span class="dialog-footer">
        <el-button :type="objInfo.cancelType" @click="cancel()">Cancel</el-button>
        <el-button :type="objInfo.okType" @click="confirm()"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>
  
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'AboutView',
  setup() {
    // Define reactive data using ref
    const store = useStore()
    const dialogVisible = computed(() => store.state.confirmModal.isShow)
    const objInfo = computed(() => store.state.confirmModal.customObj)

    const confirm = () => {
      store.dispatch('confirmModal/confirm')
    }

    const cancel = () => {
      store.dispatch('confirmModal/cancel')
    }

    // Return data and methods
    return {
      dialogVisible,
      confirm,
      cancel,
      objInfo
    }
  }
}
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
  