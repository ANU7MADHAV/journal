import authOption from '@/app/auth/authOption'
import prisma from '@/utilities/db'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

interface Prop {
  params: { id: string }
}
export const PATCH = async (request: NextRequest, { params }: Prop) => {
  const { content } = await request.json()
  const session = await getServerSession(authOption)

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  })
  const journalEntry = await prisma.journal.findUnique({
    where: {
      id: params.id,
      userId: user?.id,
    },
  })

  if (!journalEntry) {
    return NextResponse.json({ error: 'Invalid Entry' }, { status: 404 })
  }
  if (journalEntry) {
    const updatedEntry = await prisma.journal.update({
      where: {
        id: journalEntry.id,
      },
      data: {
        content,
      },
    })
    revalidatePath('/journal')
    return NextResponse.json({ updatedEntry }, { status: 200 })
  }
}

export const PUT = async (request: NextRequest, { params }: Prop) => {
  const { content } = await request.json()
  const session = await getServerSession(authOption)
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  })

  const journalEntry = await prisma.journal.findUnique({
    where: {
      id: params.id,
      userId: user?.id!,
    },
  })

  if (!journalEntry) {
    return NextResponse.json({ error: 'Invalid Entry' }, { status: 404 })
  }
  if (journalEntry) {
    const updatedEntry = await prisma.journal.update({
      where: {
        id: journalEntry.id,
      },
      data: {
        content,
      },
    })
    revalidatePath('/journal')
    return NextResponse.json({ updatedEntry }, { status: 200 })
  }
}

export const DELETE = async (request: Request, { params }: Prop) => {
  const session = await getServerSession(authOption)

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  })

  await prisma.journal.delete({
    where: {
      id: params.id,
      userId: user?.id!,
    },
  })

  return NextResponse.json({ data: { id: params.id } })
}
