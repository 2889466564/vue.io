<template>
  <div class="home">
        <van-tabbar v-model="active">
          <van-tabbar-item icon="home-o" to="/list">关注</van-tabbar-item>
          <van-tabbar-item icon="search" to="/home">发现</van-tabbar-item>
          <van-tabbar-item icon="friends-o" to="/about">同城</van-tabbar-item>
      </van-tabbar>

      <van-card
          @click="goDeatil(item.id)"
          v-for="(item,index) in shopping"
          :key="index"
        title="item.name"
        thumb="item.img"
      />
  </div>
</template>

<script>
import Axios from 'axios'

export default {
   data() {
    return {
      active: 0,
    };
  },
  created() {
    Axios.get("/getList").then(res=>{
      console.log(data)
      this.shopping=data.data
    })
  }
}
</script>
