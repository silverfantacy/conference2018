<script>
import GoogleMap from '@/components/GoogleMap'
/* global firebase */
let CreditDataRef = firebase.database().ref('/creditData')
let AgendaDataRef = firebase.database().ref('/agendaData')
// console.log(CreditDataRef)
// console.log(AgendaDataRef)

export default {
  name: 'index',
  components: {
    GoogleMap
  },
  data() {
    return {
      AgendaData: [],
      CreditData: [],
      CreditDataArray: [],
      selectClass: ''
    }
  },
  mounted() {
    // document.location.href = 'https://nutraceutical.org.tw/'

    var body = document.body
    var burgerMenu = document.getElementsByClassName('b-menu')[0]
    var burgerContain = document.getElementsByClassName('b-container')[0]
    var burgerNav = document.getElementsByClassName('b-nav')[0]

    burgerMenu.addEventListener(
      'click',
      function toggleClasses() {
        ;[body, burgerContain, burgerNav].forEach(function(el) {
          el.classList.toggle('open')
        })
      },
      false
    )
  },
  created() {
    this.getAgenda()
    this.getCredit()
  },
  methods: {
    /* 取得 Data */
    getAgenda() {
      let vm = this
      AgendaDataRef.orderByChild('id').on('value', function(snapshot) {
        var val = snapshot.val()
        // console.log(val)
        vm.AgendaData = val
      })
    },

    /* 取得 Data */
    getCredit() {
      let vm = this
      CreditDataRef.on('value', function(snapshot) {
        // array 使用
        snapshot.forEach(function(childSnapshot) {
          // var key = childSnapshot.key
          var childData = childSnapshot.val()
          // console.log(key, childData)
          vm.CreditDataArray.push(childData)
          // vm.CreditDataArray = childData
          // console.log(vm.CreditDataArray)
        })
        var val = snapshot.val()
        // console.log(val)
        vm.CreditData = val
        // console.log(vm.CreditData)
      })
    }
  },
  computed: {
    // 類別列表
    className() {
      let vm = this
      var str = ''
      var allClass = []
      // console.log(vm.CreditData)
      vm.CreditDataArray.forEach(function(item) {
        str = item.class
        allClass.push(str)
      })
      // console.log(allClass)
      // 篩選出第一個符合的 element
      var result = allClass.filter(function(element, index, arr) {
        return arr.indexOf(element) === index
      })
      return result
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
