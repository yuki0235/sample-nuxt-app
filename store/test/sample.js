export const state = () => ({
  message: 'Good evening',
  count: 10
})

export const mutations = {
  increment(state) {
    state.count += 4
  }
}
