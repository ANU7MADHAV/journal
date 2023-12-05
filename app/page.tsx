import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default function Home() {
  const { userId } = auth()
  const href = userId ? '/journal' : '/new-user'
  return (
    <Box bg="black" w="100%" h="100vh">
      <Flex direction="row" justify="center" align="center" height="100vh">
        <Box>
          <Heading color="white">Hello Journal app</Heading>
          <Text color="white">Best Journal app ever made</Text>

          <Button colorScheme="blue" variant="solid" className="bg-blue-700">
            <Link href={href}>Get Start</Link>
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}
