<template>
  <div class="list">
    <h2 class="h2">GitHub 用户数据</h2>
    <ul>
      <li v-for="(user,index) in users" :key="index">{{user.login}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GitHubUserList",
  data() {
    return {
      users:[]
    }
  },
  mounted() {
    this.$bus.$on('gitHubUsers',(data)=>{
      this.users = data
    })
  },
  beforeDestroy() {
    this.$bus.off('gitHubUsers')
  }
}
</script>

<style>
.list{
  margin-top: 30px;
  border-style: solid;
  width: 1000px;
  height: 200px;
  background-color: antiquewhite;
}
h2 {
  text-align: center;
}
</style>