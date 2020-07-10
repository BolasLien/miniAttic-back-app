export function login (state, data) {
  state.user = data
}

export function logout (state) {
  state.user = ''
}
