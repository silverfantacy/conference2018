<script>
/* global firebase */
let CreditDataRef = firebase.database().ref('/creditData')
// console.log(CreditDataRef)
export default {
  name: 'credit',
  data() {
    return {
      tempCreditData: {
        class: '',
        other_class: '',
        title: '',
        credit: ''
      },
      CreditData: [],
      CreditDataArray: [],
      selectClass: ''
    }
  },
  created() {
    this.getData()
  },
  methods: {
    /* 取得 Data */
    getData() {
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
    },

    /* 送出 Data */
    submitCredit() {
      // alert('有呼叫到')
      let vm = this
      var temData = vm.tempCreditData

      // 沒有內容 不送出
      if (!temData.title) {
        return
      }

      // 內容設定
      var str = {}
      var timestamp = Math.floor(Date.now())
      // console.log(timestamp)
      if (!temData.other_class) {
        str = {
          id: timestamp,
          class: temData.class,
          title: temData.title,
          credit: temData.credit
        }
      } else {
        str = {
          id: timestamp,
          class: temData.other_class,
          title: temData.title,
          credit: temData.credit
        }
      }

      // set 到 firebase 裡
      CreditDataRef.child(timestamp).set(str)
      // alert('push 完成')

      // 清空資訊
      vm.tempCreditData = {
        class: '',
        other_class: '',
        title: '',
        credit: ''
      }
    },

    /* 刪除 Data */
    removeCredit(key) {
      CreditDataRef.child(key).set(null)
      // console.log(key)
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
