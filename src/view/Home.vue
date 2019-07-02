<template>
  <div class="home">
    <header>
      <div class="head">
        <div class="logo">
          <Logo></Logo>
        </div>
        <div class="user-info"></div>
      </div>
    </header>
    <nav>
      <ul>
        <li></li>
      </ul>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<style scoped lang="sass">

</style>
<script>
import Logo from "@/assets/svgs/logo.svg"
export default {
  components: { Logo },
  data() {
    return {
      msg: "123",
    }
  },
}
</script>

