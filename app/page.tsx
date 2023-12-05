import { Button, Heading, Text } from '@chakra-ui/react'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default function Home() {
  const { userId } = auth()
  const href = userId ? '/journal' : '/new-user'
  return (
    <div className="h-screen w-screen dark:bg-black dark:text-white">
      <div className="flex h-full w-full items-center justify-center">
        <div>
          <Heading>Hello Journal app</Heading>
          <Text>Best Journal app ever made</Text>
          <Button colorScheme="blue" variant="solid" className="bg-blue-700">
            <Link href={href}>Get Start</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
