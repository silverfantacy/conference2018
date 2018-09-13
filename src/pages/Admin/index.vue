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
  mounted() {
    console.log(this.$route.fullPath)
  },
  computed: {
    scheduleActiveClass() {
      if (this.$route.fullPath === '/admin/schedule') {
        return {
          'btn-info': true,
          'btn-outline-info': false
        }
      } else {
        return {
          'btn-info': false,
          'btn-outline-info': true
        }
      }
    },
    creditActiveClass() {
      if (this.$route.fullPath === '/admin/credit') {
        return {
          'btn-info': true,
          'btn-outline-info': false
        }
      } else {
        return {
          'btn-info': false,
          'btn-outline-info': true
        }
      }
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
