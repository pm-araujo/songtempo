<template>
  <section class="StatsHero">
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      musicLoaded: 'musicLoaded'
    })
  },
  methods: {
  }
}
</script>
