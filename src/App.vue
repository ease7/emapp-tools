<template>
  <div id="app">
    <log eventId="test"
         :eventData="{id:'sdfsdf'}"
         @click="testClick">测试按钮</log>
  </div>
</template>

<script>
import Log from "../packages/log";

export default {
  name: "testssss_a_b_c",
  test: "sdfsdf",
  components: {
    log: Log
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{
    testClick(){
      console.log("clicked...")
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
