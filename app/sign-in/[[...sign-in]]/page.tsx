import { AbsoluteCenter, Center } from '@chakra-ui/react'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex items-end justify-center">
      <SignIn />
    </div>
  )
}
