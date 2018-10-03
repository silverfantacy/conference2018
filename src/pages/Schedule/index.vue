<script>
/* global firebase */
let AgendaDataRef = firebase.database().ref('/agendaData')
// console.log(AgendaDataRef)
export default {
  name: 'admin',
  data() {
    return {
      tempAgendaData: {
        // id: 1,
        start_time: '',
        end_time: '',
        title: {
          cht_1: '',
          eng_1: '',
          cht_2: '',
          eng_2: ''
        },
        lector: {
          job: '',
          name: ''
        },
        leader: {
          job: '',
          name: ''
        }
      },
      AgendaData: []
    }
  },
  created() {
    this.getData()
    // console.log(AgendaDataRef.orderByChild('id'))
  },
  methods: {
    /* 取得 Data */
    getData() {
      let vm = this
      AgendaDataRef.orderByChild('id').on('value', function(snapshot) {
        var val = snapshot.val()
        // console.log(val)
        vm.AgendaData = val
      })
    },

    /* 送出 Data */
    submitAgenda() {
      let vm = this
      var temData = vm.tempAgendaData
      if (!temData.start_time) {
        return
      }
      var setTime = temData.start_time.split(':')
      // console.log(typeof (setTime[0] + setTime[1]))
      var setId = parseInt(setTime[0] + setTime[1])
      // console.log(setId)
      var str = {
        id: setId,
        start_time: temData.start_time,
        end_time: temData.end_time,
        title: temData.title,
        lector: temData.lector,
        leader: temData.leader
      }
      AgendaDataRef.child(setId).set(str)
      vm.tempAgendaData = {
        start_time: '',
        end_time: '',
        title: {
          cht_1: '',
          eng_1: '',
          cht_2: '',
          eng_2: ''
        },
        lector: {
          job: '',
          name: ''
        },
        leader: {
          job: '',
          name: ''
        }
      }
    },

    /* 刪除 Data */
    removeTodo(key) {
      AgendaDataRef.child(key).set(null)
      // console.log(key)
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
