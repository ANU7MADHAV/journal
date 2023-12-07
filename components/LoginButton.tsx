import authOption from '@/app/auth/authOption'
import { getServerSession } from 'next-auth'

import Link from 'next/link'

export default async function LoginComponent() {
  const session = await getServerSession(authOption)
  if (session) {
    return (
      <>
        Signed in as {session.user?.name} <br />
        <Link href={'/api/auth/signout'}>
          <button>Sign out</button>
        </Link>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <Link href={'/api/auth/signin'}>
        <button>Sign in</button>
      </Link>
    </>
  )
}
