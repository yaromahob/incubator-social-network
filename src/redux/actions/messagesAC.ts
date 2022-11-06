export const addMessageAC = (text: string) => {
  return {
    type: 'ADD-MESSAGE',
    payload: text
  }
}