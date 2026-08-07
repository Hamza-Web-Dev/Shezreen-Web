import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collection from './components/Collection'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [category, setCategory] = useState('all')

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Collection category={category} onCategoryChange={setCategory} />
        <Story />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
