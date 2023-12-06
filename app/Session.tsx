'use client'
import { divider } from '@nextui-org/react'
import { useSession } from 'next-auth/react'

const Session =  () => {
  const session =  useSession()
  return(
    <div></div>
  )
}
