import authOption from '@/app/auth/authOption'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export const POST = async () => {
  const session = await getServerSession(authOption)
  const user = await prisma?.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  })
  const entry = await prisma?.journal.create({
    data: {
      userId: user?.id!,
      title: 'Reflectify',
      content: 'Write about your day',
    },
  })
  revalidatePath('/journal')

  return NextResponse.json({ data: entry })
}
