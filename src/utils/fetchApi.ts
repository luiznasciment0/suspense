import { User } from "../types/userType"

type UsersMap = {
  [key: number]: string
}

const users: UsersMap = {
  1: 'luiznasciment0',
  2: 'juliomerisio',
  3: 'sibelius',
}

const fetchUser = async (username: string): Promise<User> => {
  const response = await fetch(`https://api.github.com/users/${username}`)

  return response.json()
}

export const fetchUserProfileData = (userId: number): Promise<User> => fetchUser(users[userId])

