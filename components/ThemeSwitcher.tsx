'use client'

import { useTheme } from 'next-themes'
import { FaSun } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { VisuallyHidden, useSwitch } from '@nextui-org/react'

export function ThemeSwitcher(props: any) {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            className: [
              'h-8 w-8',
              'flex items-center justify-center',
              'rounded-lg bg-default-100 hover:bg-default-200',
            ],
          })}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {isSelected ? <FaMoon /> : <FaSun />}
        </div>
      </Component>
    </div>
  )
}
