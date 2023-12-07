'use client'
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function LoginComponent() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <Dropdown>
          <DropdownTrigger>
            <Avatar showFallback src={session.user?.image!} size="md" />
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" className="dark:text-white">
            <DropdownItem key="name">{session.user?.name}</DropdownItem>

            <DropdownItem key="signout" className="text-danger" color="danger">
              <Link href={'/api/auth/signout'}>Sign out</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </>
    )
  }
  return (
    <>
      <Link href={'/api/auth/signin'}>
        <button>Sign in</button>
      </Link>
    </>
  )
}
