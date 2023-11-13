<template>
    <div>

        <div class="toast">
             <i :class="type=='success'?'iconfont icon-toast_chenggong':
             (type=='warnig'?'iconfont icon-toast-jinggao':'iconfont icon-toast-shibai_huaban')"></i>
             <span> {{ msg }} </span>
            </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'JifenshopPromtBox',

  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {

  },
  computed: {
    ...mapState({
      msg: state => state.isshowPromt.msg,
      type: state => state.isshowPromt.type

    })
  }
}
</script>

<style lang="less" scoped>
.toast{ position: fixed;
     padding: 10px 20px;
   display: flex;
    justify-content: center;
     align-items: center;
      background: #fff;
       left: 50%; top: 0; transform: translateX(-50%); border-radius: 10px;
       .iconfont{ margin-right: 10px; }
       .icon-toast-shibai_huaban{ color: red; }
       .icon-toast_chenggong{ color: green; }
       .icon-toast-jinggao{ color: orange; }
}

</style>
