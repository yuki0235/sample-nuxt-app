export const state = () => ({
  message: 'Hello World',
  count: 0,
  hour: 0,
  min: 0,
  rem: 0,
  totalTime: 0
})

export const mutations = {
  increment(state) {
    state.count += 2
  },
  decrement(state) {
    state.count -= 2
  },
  addHour(state, time) {
    state.hour += time
  },
  addMin(state, time) {
    state.min += time
  },
  addRem(state, time) {
    state.rem += time
  },
  addTime(state, time) {
    state.totalTime += time
  },
  totalTimeClear(state) {
    state.hour = 0
    state.min = 0
    state.rem = 0
    state.totalTime = 0
  }
}
