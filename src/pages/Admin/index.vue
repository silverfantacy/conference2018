<script>
/* global firebase */
// let adminDataRef = firebase.database().ref('/chatData/')
let AgendaDataRef = firebase.database().ref('/agendaData/')
// console.log(AgendaDataRef)
export default {
  name: 'admin',
  data() {
    return {
      tempAgendaData: {
        // id: 1,
        start_time: '08:02',
        end_time: '15:20',
        title:
          'Dietary supplementation with a special nutritional formula protects lipolytic and thermogenic deplation of adipose in cachectic mice treated with erlotinib.',
        lector: {
          job: '弘●科技大學 營●系暨●養●●研究所',
          name: '王●● ●●教授'
        },
        leader: {
          job: '國立臺灣●洋大學 食●●學系',
          name: '●彰● 特聘●●'
        }
      },
      AgendaData: []
    }
  },
  mounted() {
    this.getData()
    // console.log(AgendaDataRef.orderByChild('id'))
  },
  methods: {
    getData() {
      let vm = this
      AgendaDataRef.orderByChild('id').on('value', function(snapshot) {
        var val = snapshot.val()
        // console.log(val)
        vm.AgendaData = val
      })
    },
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
        lector: {
          job: temData.lector.job,
          name: temData.lector.name
        },
        leader: {
          job: temData.leader.job,
          name: temData.leader.name
        }
      }
      AgendaDataRef.child(setId).set(str)
      vm.tempAgendaData = {
        start_time: '',
        end_time: '',
        title: '',
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
    removeTodo(key) {
      AgendaDataRef.child(key).set(null)
      console.log(key)
    }
  },
  computed: {}
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
