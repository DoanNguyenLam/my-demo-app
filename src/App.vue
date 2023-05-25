<template>
  <div id="app">
    <header>
      <div
        class="navbar fixed top-0 right-0 h-12 bg-slate-300 left-0 flex justify-center items-center space-x-3"
      >
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </header>

    <RouterView />
    <confirm-modal />
  </div>
</template>

<script>
import ConfirmModal from './components/ConfirmModal.vue'
export default {
  components: { ConfirmModal },
  setup() {}
}
</script>

<style lang="scss" scoped>
#app {
  * {
    box-sizing: border-box;
  }
  .navbar {
    a {
      display: block;
      height: 100%;
      padding: 10px;
      &:hover {
        background: none;
      }
    }
    .router-link-exact-active {
      border-bottom: 3px solid #777;
      background: none;
    }
  }
}
</style>
