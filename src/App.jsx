import React from 'react'
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable'

import { Dock, Home, NavBar, Welcome } from '#components'
import { Finder, Resume, Safari, Terminal, Text, Image, Contact } from '#windows';


gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <NavBar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Contact/>
      <Home/>
    </main>
  )
}

export default App