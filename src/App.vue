<template>
  <div>
    <School/>
    <Student name="王五" :age="20"/>
    <GetGithubData/>
    <GitHubUserList/>

    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--          <a class="list-group-item active" href="./about.html">About</a>-->
          <!--          <a class="list-group-item" href="./home.html">Home</a>-->
          <!-- 路由标签 -->
          <router-link replace class="list-group-item" active-class="active" :to="{name:'aboutName'}">About
          </router-link>
          <router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
        <div>
          <button @click="routerChange">路由切换</button>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件呈现的位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>

    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";
import GetGithubData from "@/components/GetGithubData";
import GitHubUserList from "@/components/GitHubUserList";

export default {
  name: 'App',
  components: {
    School,
    Student,
    GetGithubData,
    GitHubUserList
  },
  //编程式路由
  methods: {
    routerChange() {
      if (this.$router.history.current.name !== 'aboutName') {
        this.$router.push({
          name: 'aboutName'
        })
      }

    }
  }
}
</script>

<style>
.row {
  margin-bottom: 50px;
}
</style>