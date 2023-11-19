export const getUserId = () => {
  const persistedState = JSON.parse(localStorage.getItem("persist:root"))
  if (persistedState) {
    const authState = JSON.parse(persistedState.auth)
    return authState.auth.user.id
  }
  return null
}
