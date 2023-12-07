import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
} from '@chakra-ui/react'
import { Journal } from '@prisma/client'

interface Prop {
  entry: Journal
}
const EntryCard = ({ entry }: Prop) => {
  const date = new Date(entry.createdAt).toDateString()
  return (
    <Card
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform .15s ease-in',
      }}
    >
      <CardHeader>
        <Heading color="gold">Daily Reflections</Heading>
      </CardHeader>
      <CardBody>
        <Box>{date}</Box>
        <Divider />
        <Box>summary</Box>
        <Divider />
        <Box>Journal</Box>
        <Divider />
      </CardBody>
    </Card>
  )
}

export default EntryCard
