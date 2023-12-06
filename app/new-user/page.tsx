import { currentUser } from '@clerk/nextjs'
import prisma from '@/utilities/db'
import { redirect } from 'next/navigation'

const NewUser = async () => {
  const user = await currentUser()
  console.log(user)

  const match = await prisma?.user.findUnique({
    where: {
      clerkId: user?.id,
    },
  })
  if (!match) {
    const newUser = await prisma?.user.create({
      data: {
        clerkId: user?.id!,
        email: user?.emailAddresses[0].emailAddress!,
      },
    })
  }

  return <div>NewUser</div>
}

export default NewUser
