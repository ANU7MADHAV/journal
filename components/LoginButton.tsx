'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function LoginComponent() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user?.name} <br />
        <Link href={'/api/auth/signin'}>
          <button>Sign out</button>
        </Link>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
