import Header from "./Component/Header"
import About from "./Component/About"
import Contact from "./Component/Contact"
import Projects from "./Component/Projects"
import Skill from "./Component/Skill"
import Footer from "./Component/Footer"



const App =() => {
  return (
    <>
<div className="sm:px-2">
<Header/>
<About/>
<Skill/>
<Projects/>
<Contact/>
<Footer/>
</div>
    
    
    </>
  )
}

export default App