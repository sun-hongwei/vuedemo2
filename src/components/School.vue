<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="add">school</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'School',
  data() {
    return {
      name: '长春工业大学',
      address: '北远达大街'
    }
  },
  methods: {
    add() {
      alert('school')
    }
  },
  mounted() {
    this.$bus.$on('hello', (data) => {
      alert('我是组件School 接收到了数据' + data)
    })
  },
  beforeDestroy() {
    this.$bus.off('hello')
  }
}
</script>

<style>
.school {
  background-color: #c47914;
}
</style>