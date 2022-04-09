<template>
  <div>
    <input type="text" placeholder="请输入关键字" v-model='searchKey'/>
    <button @click="getGitHubData">获取GitHub数据</button>
  </div>
</template>

<script>
//引入axios
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'GetGithubData',
  data() {
    return {
      searchKey: ''
    }
  },
  methods: {
    getGitHubData() {
      if(this.searchKey === ''){
        alert('请输入查询信息')
        return
      }
      //发送get请求
      axios.get(`https://api.github.com/search/users?q=${this.searchKey}`).then(
          response => {
            //总线事件触发
            this.$bus.$emit('gitHubUsers',response.data.items)
            console.log(response.data.items)
          },
          error => {
            console.log(error)
          })
    }
  },
}
</script>

<style>
div{
  margin-top: 30px;
}
</style>