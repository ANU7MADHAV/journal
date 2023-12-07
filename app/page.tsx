import { Button, Center, Heading, Text } from '@chakra-ui/react'

import Link from 'next/link'

export default function Home() {
  return (try {
       <div className="h-screen w-screen dark:bg-black dark:text-white">
      <div className="flex h-full w-full items-center justify-center">
        <div className="space-y-5 px-4">
          <Heading className="text-center">Reflectify</Heading>
          <Text className="text-center font-medium">
            Welcome to Reflectify, the ultimate destination for introspection
            and self-discovery. This innovative journal web app is designed to
            be your digital sanctuary, providing a seamless and delightful
            experience for capturing your thoughts, emotions, and cherished
            moments.
          </Text>
          <Center>
            <Button colorScheme="blue" variant="solid" className="bg-blue-700">
              <Link href={'/journal'}>Get Start</Link>
            </Button>
          </Center>
        </div>
      </div>
    </div>
    } catch (error) {
      console.log(error)
    }
   
  )
}
