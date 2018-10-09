<script>
import TitleNav from '@/components/TitleNav'
export default {
  name: 'admin',
  components: {
    TitleNav
  },
  data() {
    return {}
  },
  created() {
    // console.log(this.$route.fullPath)
    var password = prompt('請輸入密碼', '')
    if (password === '335') {
      alert('Welcome!')
      if (this.$route.fullPath === '/admin/schedule') {
        location.href = '/?#/admin/schedule'
      } else if (this.$route.fullPath === '/admin/credit') {
        location.href = '/?#/admin/credit'
      } else {
        location.href = '/?#/admin'
      }
    } else {
      if (password !== '335') {
        alert('輸入錯誤')
        location.href = '/#/index'
      }
    }
  },
  computed: {
    scheduleActiveClass() {
      if (this.$route.fullPath === '/admin/schedule') {
        return {
          'btn-third': true,
          'btn-outline-third': false
        }
      } else {
        return {
          'btn-third': false,
          'btn-outline-third': true
        }
      }
    },
    creditActiveClass() {
      if (this.$route.fullPath === '/admin/credit') {
        return {
          'btn-third': true,
          'btn-outline-third': false
        }
      } else {
        return {
          'btn-third': false,
          'btn-outline-third': true
        }
      }
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
