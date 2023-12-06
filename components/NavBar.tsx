import Link from 'next/link'
import { ThemeSwitcher } from './ThemeSwitcher'
import LoginComponent from './LoginButton'

const NavBar = () => {
  const links = [
    { label: 'Home', value: '/' },
    { label: 'Journal', value: '/journal' },
  ]
  return (
    <div className="dark:bg-black dark:text-white">
      <nav className="flex justify-between px-8 py-4">
        <ul className="flex gap-4 font-medium">
          {links.map((link) => (
            <li key={link.value}>
              <Link href={link.value}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <section className="flex gap-5">
          <ThemeSwitcher />
          <LoginComponent />
        </section>
      </nav>
    </div>
  )
}

export default NavBar
