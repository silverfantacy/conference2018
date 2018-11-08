<script>
export default {
  name: 'googleMap',
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: {
        lat: 25.02368,
        lng: 121.534225
      },
      markers: [
        {
          position: {
            lat: 25.02368,
            lng: 121.534225
          },
          title: '台北福華國際文教會館 2F 卓越堂'
        }
      ],
      places: [],
      currentPlace: null
    }
  },

  mounted() {
    this.geolocate()
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.markers.push({ position: marker })
        this.places.push(this.currentPlace)
        this.center = marker
        this.currentPlace = null
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: 25.02368,
          lng: 121.534225
          // lat: position.coords.latitude,
          // lng: position.coords.longitude
        }
      })
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
