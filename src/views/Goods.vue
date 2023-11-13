<template>
  <div class="goods">
    <div class="warp">
      <Crumb> </Crumb>
      <img src="../assets/img/banner.4c6b6225.png" width="100%" alt="" />
      <ul class="options">
        <li>
          <strong>排序：</strong>
          <span  :class="num1==index?'active':''" v-for="item,index in options1" :key="index" @click="opt1clcik(index,item)"
          >
            {{ item.txt }}</span>

        </li>
        <li>
          <strong>分类：</strong>
          <span  :class="num2==index?'active':''" v-for="item,index in options2" :key="index" @click="opt2clcik(index,item)"
          >
          >{{ item.txt }}
        </span>
        </li>
      </ul>
      <List :arr="goodslist" :MAXlength="18"></List>
    </div>
  </div>
</template>
<script>

import Crumb from '../components/Crumb.vue'
import List from '../components/home/List.vue'
import { GoodDetailssousuoAPI } from '@/request/Api'
export default {
  name: 'GouWche',
  data () {
    return {
      did: 0,
      type: 0,
      // 积
      min: 0,
      max: 0,
      keyword: '',
      goodslist: [],
      options1: [{ min: 0, max: 10000, txt: ' 全部 ' },
        { min: 0, max: 0, txt: ' 我还可以兑换 ' },
        { min: 0, max: 500, txt: '0-500 分 ' },
        { min: 500, max: 1000, txt: '500-1000 分 ' },
        { min: 1000, max: 1500, txt: '1000-1500 分 ' },
        { min: 1500, max: 2500, txt: '1500-2500 分 ' },
        { min: 2500, max: 6500, txt: '2500-6500 分 ' },
        { min: 6500, max: 10000, txt: '6500-10000 分 ' }],
      // 分类数组项
      options2: [
        { type: 0, txt: ' 全部 ' },
        { type: 1, txt: ' 实体商品 ' },
        { type: 2, txt: ' 虚拟商品 ' }
      ],
      num1: 0,
      num2: 0
    }
  },
  components: {
    Crumb,
    List
  },
  watch: {
    '$route.query.keyword': {
      handler (newVal, oldVal) {
        this.keyword = newVal
        this.goodsearch()
      }
    }
  },
  created () {
    this.keyword = this.$route.query.keyword || ''
    this.goodsearch()
  },
  methods: {
    opt1clcik (i, item) {
      this.num1 = i
      this.min = item.min
      this.max = item.max
      this.goodsearch()
    },
    opt2clcik (i, item) {
      this.num2 = i
      this.type = item.type

      this.goodsearch()
    },
    async  goodsearch () {
      const res = await GoodDetailssousuoAPI({
        did: this.did,
        type: this.type,
        min: this.min,
        max: this.max,
        keyword: this.keyword
      })
      this.goodslist = res.data
      console.log(res.data)
    }
  }

}
</script>

<style lang = "less" scoped>
@import "../assets/yangshi/quanjude.less";

.goods {
  padding-bottom: 50px;
  background: #efefef;
  padding-top: 20px;
  .options {
    padding-top: 20px;
    padding-bottom: 40px;
    li {
      margin-top: 20px;
      strong {
        color: #000;
        font-weight: bold;
      }
      span {
        margin-right:20px;
        margin-left: 10px;
        cursor: pointer;
        color: #999;
        &.active {
          color: @base-color;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
