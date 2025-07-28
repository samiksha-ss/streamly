import { Search } from 'lucide-react'

const Header = () => {
    return (
        <header className="w-full bg-zinc-950 text-white px-6 py-4 flex items-center justify-between shadow-md fixed top-0 z-10">
            <div className="text-3xl font-bold">
                🎬{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                    Streamly
                </span>
            </div>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-zinc-800 text-white rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
        </header>
    )
}

export default Header
