<template>
  <section class="MetaHero">
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isMusicLoaded: 'isMusicLoaded'
    })
  },
  methods: {
  }
}
</script>
