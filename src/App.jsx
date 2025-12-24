import About from "./Component/About"
import Contact from "./Component/Contact"
import Hero from "./Component/Hero"
import Navbar from "./Component/Navbar"
import Projects from "./Component/Project"
import Skills from "./Component/Skill"


const App = () => {
  return (
<div>
<Navbar/>
<Hero/>
<About/>
<Skills/>
<Projects/>
<Contact/>
    </div>
  )
}
export default App;