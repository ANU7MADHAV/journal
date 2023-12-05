import Editor from '@/components/Editor'
import getUserIdByClerkId from '@/utilities/auth'
import prisma from '@/utilities/db'

interface Prop {
  params: { id: string }
}

const getEntry = async (id: string) => {
  const user = await getUserIdByClerkId()
  if (user?.id === undefined) {
    console.log('user id undefined')
  }
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user?.id!,
        id,
      },
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
