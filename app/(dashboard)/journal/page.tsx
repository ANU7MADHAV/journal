import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'
import getUserIdByClerkId from '@/utilities/auth'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import Link from 'next/link'

const getEntries = async () => {
  const user = await getUserIdByClerkId()
  const entries = await prisma?.journalEntry.findMany({
    where: {
      userId: user?.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
  return entries
}

const JournalPage = async () => {
  const entries = await getEntries()

  return (
    <div className="px-4 dark:bg-black sm:space-x-5">
      <h1 className="text-3xl dark:text-white sm:px-6">Journals</h1>
      <SimpleGrid columns={{ xl: 4, md: 3, sm: 2, base: 1 }} gap={3}>
        <NewEntryCard />
        {entries?.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <EntryCard key={entry.id} entry={entry} />
          </Link>
        ))}
      </SimpleGrid>
    </div>
  )
}

export default JournalPage
