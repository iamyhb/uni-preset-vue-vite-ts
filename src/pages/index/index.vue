<template>
  <view class="aab"> <my-box-center>1111</my-box-center></view>

  <view class="demo-uni-row">
    <uni-row>
      <uni-col :span="12">
        <view class="dark"
          ><my-box-center>{{ store.count }}</my-box-center></view
        >
      </uni-col>
      <uni-col :span="12">
        <view class="light" @click="add"></view>
      </uni-col>
    </uni-row>
  </view>
</template>

<script lang="ts" setup>
import { useCounterStore } from '../../store/store'

const store = useCounterStore()
const add = () => {
  store.increment()
}
</script>
<style scoped lang="scss">
.demo-uni-row {
  width: 100rpx;
}
.aab {
  background-color: red;
  @include dimensions(200rpx, 200rpx);
}
.dark {
  background-color: red;
  height: 100rpx;
}
.light {
  background-color: yellow;
  height: 100rpx;
}
</style>
