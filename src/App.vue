<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Home' }" exact
            ><img class="logo" src="./assets/build-a-bot-logo.png" alt="logo" />
            Build-a-bot</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Build' }" exact
            >Build</router-link
          >
        </li>
        <li class="nav-link nav-profile">
          User: {{ user.name }}
          <button @click="changeUserName()">Change</button>
        </li>
      </ul>
    </nav>
  </header>
  <div class="container">
    <aside class="aside"><router-view name="sidebar"></router-view></aside>
    <main>
      <!-- <home-page /> -->
      <!-- <robot-builder /> -->
      <!-- <search /> -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
// import HomePage from './home/HomePage.vue';
import RobotBuilder from './build/RobotBuilder.vue'
import Search from './search/Search.vue'

export default {
  name: 'App',
  data() {
    return {
      user: { name: 'John' },
    }
  },
  provide() {
    // Cascades the property to its descendants
    return { user: this.user }
  },
  methods: {
    changeUserName() {
      this.user.name = 'Fred'
    },
  },
}
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style lang="scss" scoped>
/* >>> == /deep/ */
.content >>> .robot-name {
  /* color: red; */
  border: 2px solid blue;
}
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
main {
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
nav ul {
  position: relative;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
  list-style-type: none;
}
.nav-profile {
  position: absolute;
  right: 15px;
  padding: 10px 0;
}
.router-link-active {
  color: white;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
</style>
