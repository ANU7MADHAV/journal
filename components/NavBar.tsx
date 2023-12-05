import { UserButton } from '@clerk/nextjs'

import Link from 'next/link'

const NavBar = () => {
  const links = [
    { label: 'Home', value: '/' },
    { label: 'Journal', value: '/journal' },
  ]
  return (
    <div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.value}>
              <Link href={link.value}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
