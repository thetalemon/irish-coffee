export const initialState = {}

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "login":
      return action.payload.user
    case "logout":
      return initialState
    default:
      return state
  }
}