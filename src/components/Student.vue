<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age + 1 }}</h2>
    <button @click="add">学生点击我</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Student',
  //数据来源于父组件传递
  // data() {
  //   return {
  //     name: '张三',
  //     age: '15'
  //   }
  // },
  methods: {
    add() {
      this.$bus.$emit('hello', '我是三年二班的学生' + this.name)
    }
  },
  //定义传递的数值
  //:age 将变量的数值变成表达式
  //props: ['name', 'age']
  /*props: {
    name: String,
    age: Number
  }*/
  props: {
    name: {
      type: String,
      request: true
    },
    age: {
      type: Number,
      default: 99
    }
  }
}
</script>

<style>
.student {
  background-color: aqua;
}
</style>