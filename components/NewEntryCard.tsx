'use client'
import { createNewEntry } from '@/utilities/api'
import {
  AbsoluteCenter,
  Button,
  Card,
  CardHeader,
  Heading,
  Tooltip,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

const NewEntryCard = () => {
  const router = useRouter()
  const handleOnClick = async () => {
    const data = await createNewEntry()
    router.push(`/journal/${data?.id}`)
    router.refresh()
  }
  return (
    <Card
      className="bg-slate-100/90"
      minH={150}
      minW={150}
      size="md"
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform .15s ease-in',
      }}
    >
      <CardHeader>
        <AbsoluteCenter>
          <Tooltip hasArrow label="Create new entry">
            <Heading>
              <Button size="20px" variant="link" onClick={handleOnClick}>
                New Entry
              </Button>
            </Heading>
          </Tooltip>
        </AbsoluteCenter>
      </CardHeader>
    </Card>
  )
}

export default NewEntryCard
