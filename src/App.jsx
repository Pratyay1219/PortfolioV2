import React from 'react'
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable'

import { Dock, NavBar, Welcome } from '#components'
import { Finder, Resume, Safari, Terminal, Text, Image } from '#windows';

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
    </main>
  )
}

export default App