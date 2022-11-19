export type UserType = {
  name: string
  id: number
  uniqueUrlName: null | string
  photos: { small: string, large: string }
  status: null | string
  followed: boolean
}
