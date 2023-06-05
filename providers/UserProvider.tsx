'use client'

import { MyUsersContextProvider } from '@/hooks/useUser'

interface IUserProvider {
  children: React.ReactNode
}

const UserProvider: React.FC<IUserProvider> = ({ children }) => {
  return <MyUsersContextProvider>{children}</MyUsersContextProvider>
}

export default UserProvider
