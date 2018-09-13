<script>
/* global firebase */
let CreditDataRef = firebase.database().ref('/CreditData')
console.log(CreditDataRef)
export default {
  name: 'credit'
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
