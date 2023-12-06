import prisma from '@/utilities/db'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import authOption from '../auth/authOption'

const NewUser = async () => {
  const session = await getServerSession(authOption)
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  })
  const match = await prisma?.user.findUnique({
    where: {
      id: user?.id,
    },
  })
  if (!match) {
    return <div>New page</div>
  }
  redirect('/journal')
}

export default NewUser
