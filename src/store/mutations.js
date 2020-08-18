export function login (state, data) {
  state.user = data.user
  state.access = data.access
  state.token = data.token
}

export function logout (state) {
  state.user = ''
  state.access = ''
  state.token = ''
}
