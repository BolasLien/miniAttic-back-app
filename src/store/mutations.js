export function login (state, data) {
  state.user = data.user
  state.access_right = data.access_right
}

export function logout (state) {
  state.user = ''
  state.access_right = ''
}
