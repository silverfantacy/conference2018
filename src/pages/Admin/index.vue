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
    let vm = this
    AgendaDataRef.orderByChild('id').on('value', function(snapshot) {
      var val = snapshot.val()
      // console.log(val)
      vm.AgendaData = val
    })
  },
  methods: {
    submitAgenda() {
      let vm = this
      // 避免亂數產生，使用時間命名
      var timestamp = Math.floor(Date.now())
      // console.log(timestamp)
      // var itemId = 2
      // var itemId = 1 + vm.AgendaData.length
      // console.log(itemId)
      AgendaDataRef.child(timestamp).set(vm.tempAgendaData)
      // vm.tempAgendaData = ''
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
