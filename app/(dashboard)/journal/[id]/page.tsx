import authOption from '@/app/auth/authOption'
import Editor from '@/components/Editor'
import prisma from '@/utilities/db'
import { getServerSession } from 'next-auth'
import { use } from 'react'

interface Prop {
  params: { id: string }
}

const getEntry = async (id: string) => {
  const session = await getServerSession(authOption)
  if (session) <p>Authentication failed</p>
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  })
  if (!user) <p>Authetication failed</p>

  const entry = await prisma.journal.findUnique({
    where: {
      userId: user?.id,
      id,
    },
  })
  return entry
}

const EntryPage = async ({ params }: Prop) => {
  const entry = await getEntry(params.id)

  return (
    <div className="px-4 dark:bg-black">
      <div className="col-span-2">
        <Editor entry={entry!} />
      </div>
    </div>
  )
}
export const revalidate = 360000

export default EntryPage
