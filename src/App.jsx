import './App.css'
import { useState } from 'react'
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

const Card = ({ title, description, image, alt }) => {
  const [hasLiked, setHasLiked] = useState(false)
  const [inList, setInList] = useState(false)

  return (
    <div className="bg-zinc-900 text-white rounded-xl w-[220px] h-[370px] shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200 ease-in-out flex flex-col overflow-hidden">
      {/* Image */}
      <div className="w-full h-[250px] bg-zinc-800 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={alt || title} className="object-cover w-full h-full" />
        ) : (
          <div className="text-gray-500 text-sm">No Image</div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between p-3">
        <div className="space-y-1">
          <h2 className="text-base font-semibold truncate">{title}</h2>
          <p className="text-xs text-gray-300 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => setHasLiked(!hasLiked)}
            className={`flex-1 px-2 py-1 rounded-md font-medium text-xs transition-colors duration-200 ${
              hasLiked
                ? 'bg-zinc-700 text-green-400 hover:bg-zinc-600'
                : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
            }`}
          >
            {hasLiked ? 'Liked ❤️' : 'Like ♡'}
          </button>

          <button
            onClick={() => setInList(!inList)}
            className={`flex-1 px-2 py-1 rounded-md font-medium text-xs transition-colors duration-200 ${
              inList
                ? 'bg-zinc-700 text-blue-400 hover:bg-zinc-600'
                : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
            }`}
          >
            {inList ? 'Added ✅' : 'Add ➕'}
          </button>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <main className="pt-[100px] px-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 max-w-[1400px] mx-auto">
          {/* -- Your Cards -- */}
          <Card
            image="https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg"
            title="Inception"
            description="A thief who steals corporate secrets through dream-sharing gets one last job: planting an idea."
          />

          <Card
            image="https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg"
            title="Interstellar"
            description="Explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
          />

          <Card
            image="https://m.media-amazon.com/images/I/91KkWf50SoL._AC_SY679_.jpg"
            title="The Dark Knight"
            description="Batman faces off against the Joker in a crime-ridden Gotham spiraling into chaos."
          />

          <Card
            image="https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg"
            title="Avengers: Endgame"
            description="The Avengers unite for a final stand to reverse the damage caused by Thanos."
          />

          <Card
            image="https://images-cdn.ubuy.co.in/63497d4c524b6263e43a00ee-the-matrix-movie-poster-us-version-24x36.jpg"
            title="The Matrix"
            description="A hacker learns the shocking truth about reality and his role in the war against machines."
          />

          <Card
            image="https://images-cdn.ubuy.co.in/646abb27adcf0b0f40693a06-joker-movie-poster-24-x-36-inches-full.jpg"
            title="Joker"
            description="A mentally troubled comedian descends into madness, sparking a violent revolution."
          />

          <Card
            image="https://images-cdn.ubuy.co.in/6364358337da3701121dc9f4-parasite-2019-movie-poster-24x36-inches.jpg"
            title="Parasite"
            description="Greed and class discrimination threaten the symbiotic relationship between two families."
          />

          <Card
            image="https://m.media-amazon.com/images/I/71cS3aGfH0L.jpg"
            title="Dune"
            description="A noble family becomes embroiled in a war for control over the galaxy’s most valuable resource."
          />

          <Card
            image="https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            title="Everything Everywhere All At Once"
            description="An aging immigrant discovers she can access the multiverse to stop an existential threat."
          />

          <Card
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMClMW03gSIkHkFH7f5K-YJlvPCI1CU0ccQ&s"
            title="The Social Network"
            description="The story of Facebook’s rise from dorm room to billion-dollar empire—and the fallout that followed."
          />
        </div>
      </main>
    </>
  )
}

export default App
