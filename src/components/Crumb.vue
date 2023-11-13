<template>
    <div>
<span v-for=" item,index in nav" :key="index">
<span >{{ item.name }}</span>
</span>

    </div>
</template>

<script>
export default {
  name: 'JifenshopCrumb',
  props: ['nav'],
  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
