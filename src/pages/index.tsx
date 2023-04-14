import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <nav className="flex items-center justify-between w-full bg-lime-500">
        <a href="#" className="text-2xl font-bold">
          MongoClient
        </a>
        <ul className="flex items-center space-x-4">
          <li>
            <a href="#" className="text-lg font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-medium">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-medium">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </main>
  )
}
