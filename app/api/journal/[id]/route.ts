import getUserIdByClerkId from '@/utilities/auth'
import prisma from '@/utilities/db'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

interface Prop {
  params: { id: string }
}
export const PATCH = async (request: NextRequest, { params }: Prop) => {
  const { content } = await request.json()
  const user = await getUserIdByClerkId()

  const journalEntry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        id: params.id,
        userId: user?.id!,
      },
    },
  })

  if (!journalEntry) {
    return NextResponse.json({ error: 'Invalid Entry' }, { status: 404 })
  }
  if (journalEntry) {
    const updatedEntry = await prisma.journalEntry.update({
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
  const user = await getUserIdByClerkId()

  const journalEntry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        id: params.id,
        userId: user?.id!,
      },
    },
  })

  if (!journalEntry) {
    return NextResponse.json({ error: 'Invalid Entry' }, { status: 404 })
  }
  if (journalEntry) {
    const updatedEntry = await prisma.journalEntry.update({
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
  const user = await getUserIdByClerkId()

  await prisma.journalEntry.delete({
    where: {
      userId_id: {
        id: params.id,
        userId: user?.id!,
      },
    },
  })

  return NextResponse.json({ data: { id: params.id } })
}
