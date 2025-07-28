import { useState } from 'react'
import { Search } from 'lucide-react'
import Header from './components/Header'
import Card from './components/Card'

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
