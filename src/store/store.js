import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // BPM Counter
    // Use appropriate getters to export this raw data to different use-cases
    'bpm': 90,

    // BPM Controls Window State:
    // 0 - Closed
    // 1 - Peeking
    // 2 - Open
    'bpmControls': 1,

    'bpmClickMuted': true,

    // Music Loaded Trigger
    'musicLoaded': false
  },
  getters: {
    getControlsState (state) {
      return state.bpmControls
    },
    getBpmRadial (state) {
      let bpm = 0.228554 + (1.093834 - 0.228554) / (1 + Math.pow((state.bpm / 99.45512), 4.168781))
      return bpm.toFixed(3) + 's'
    },
    getBpmMetronome (state) {
      let bpm = 0.4571079 + (2.187667 - 0.4571079) / (1 + Math.pow((state.bpm / 99.45512), 4.168781))
      return bpm.toFixed(3) + 's'
    },
    getBpm (state) {
      return state.bpm
    },
    getBpmClick (state) {
      return state.bpmClickMuted
    },
    isMusicLoaded (state) {
      return state.musicLoaded
    }
  },
  mutations: {
    closeControls (state) {
      state.bpmControls = 0
    },
    peekControls (state) {
      state.bpmControls = 1
    },
    openControls (state) {
      state.bpmControls = 2
    },
    setBpm (state, bpm) {
      state.bpm = bpm
    },
    setMusicLoaded (state, musicLoaded) {
      state.musicLoaded = musicLoaded
    },
    toggleBpmClick (state) {
      state.bpmClickMuted = !state.bpmClickMuted
    }
  },
  actions: {
    incrementBpm (context) {
      if (context.state.bpm < 240) {
        context.commit('setBpm', context.state.bpm + 30)
      }
    },
    decrementBpm (context) {
      if (context.state.bpm > 60) {
        context.commit('setBpm', context.state.bpm - 30)
      }
    },
    setMusicLoaded (context, payload) {
      context.commit('setMusicLoaded', payload)
    },
    togglePeekControls (context, payload) {
      if (context.state.bpmControls === 0) {
        context.commit('peekControls')
      } else if (context.state.bpmControls === 1) {
        if (payload === 0) {
          context.commit('closeControls')
        } else {
          context.commit('peekControls')
        }
      }
    },
    toggleOpenControls (context) {
      if (context.state.bpmControls === 2) {
        context.commit('closeControls')
      } else {
        context.commit('openControls')
      }
    },
    toggleBpmClick (context) {
      context.commit('toggleBpmClick')
    }
  }
})
