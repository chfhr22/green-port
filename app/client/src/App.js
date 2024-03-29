import React from 'react'
import Intro from './pages/Intro'
import About from './pages/About'
import Stack from './pages/Stack'
import Work from './pages/Work'
import Motto from './pages/Motto'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Port from './pages/Port'

const App = () => {
  return (
    <>
        <Intro />
        <About />
        <Stack />
        <Experience />
        {/* <Work /> */}
        <Port />
        <Motto />
        <Contact />
    </>
  )
}

export default App