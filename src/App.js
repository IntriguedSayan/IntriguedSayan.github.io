import { Box } from '@chakra-ui/react'
import Github from './Components/GitHub'
import Navbar from './Components/Navbar'
import About from './Page/About'
import Contact from './Page/Contact'
import Projects from './Page/Projects'
import Skills from './Page/Skills'
import Start from './Page/Start'
import GitStatistics from './Components/GitStatistics'


function App() {
  

  return (
    <Box  backgroundColor={"#1a202c"} overflowX="hidden">
      <Navbar/>
      <Start/>
      <About/>
      <Projects/>
      <GitStatistics/>
      <Github/>
      <Skills/>
      <Contact/>
    </Box>
        
  )
}

export default App
