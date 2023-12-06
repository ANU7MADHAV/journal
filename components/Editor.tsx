'use client'
import { deleteEntry, updateEntry, updatedEntry } from '@/utilities/api'
import { Box, Button, Flex } from '@chakra-ui/react'
import { JournalEntry } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Autosave } from 'react-autosave'

interface Prop {
  entry: JournalEntry
}

const Editor = ({ entry }: Prop) => {
  const [value, setValue] = useState(entry.content)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  Autosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true)
      const updated = await updateEntry(entry.id, _value)
      router.refresh()
      setIsLoading(false)
    },
  })
  return (
    <Box className="dark:bg-black">
      {isLoading && <div>...Loading</div>}
      <textarea
        id="editor"
        className="m-5 h-full w-full rounded-md border p-4 focus:border-blue-500 focus:outline-none focus:ring dark:bg-white sm:px-6"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Box marginTop={10}>
        <Flex justify="center" alignItems="center" gap={5}>
          <Button
            className="border-black bg-red-600/80 transition-shadow hover:scale-105"
            colorScheme="red"
            onClick={async () => {
              await deleteEntry(entry.id)
              router.push('/journal')
            }}
          >
            Delete
          </Button>
          <Button
            className="bg-blue-600/80 transition-shadow hover:scale-105"
            colorScheme="blue"
            onClick={async () => {
              await updatedEntry(entry.id, value)
              router.push('/journal')
              router.refresh()
            }}
          >
            Submit
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default Editor
