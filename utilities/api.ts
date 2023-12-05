import { revalidatePath } from 'next/cache'

const createURL = (path: string) => {
  return window.location.origin + path
}

export const updateEntry = async (id: string, content: any) => {
  const res = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: 'PATCH',
      body: JSON.stringify({ content }),
    })
  )
  if (res.ok) {
    const data = await res.json()
    return data.data
  } else {
    console.error('something happened')
  }
}
export const updatedEntry = async (id: string, content: any) => {
  const res = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: 'PUT',
      body: JSON.stringify({ content }),
    })
  )
  if (res.ok) {
    const data = await res.json()
    return data.data
  } else {
    console.error('something happened')
  }
}

export const createNewEntry = async () => {
  const res = await fetch(
    new Request(createURL('/api/journal'), {
      method: 'POST',
    })
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  }
}

export const deleteEntry = async (id: any) => {
  const res = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: 'DELETE',
    })
  )
  if (res.ok) {
    return await res.json()
  }
}
