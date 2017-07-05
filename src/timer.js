// Original Credit to https://github.com/tanepiper &  https://github.com/handerson

export default class HighResolutionTimer {

  constructor (duration, callback) {
    this.duration = duration
    this.callback = callback

    this.totalTicks = 0
    this.deltaTime = 0
  }

  run () {
    let lastTime = this.currentTime
    this.currentTime = Date.now()

    if (!this.startTime) {
      this.startTime = this.currentTime
    }
    if (lastTime !== undefined) {
      this.deltaTime = (this.currentTime - lastTime)
    }

    this.callback(this)

    let nextTick = this.duration - (this.currentTime - (this.startTime + (this.totalTicks * this.duration)))
    this.totalTicks++

    this.timer = setTimeout(() => {
      this.run()
    }, nextTick)
  }

  stop () {
    if (this.timer !== undefined) {
      clearTimeout(this.timer)
      this.timer = undefined
    }
  }
}
