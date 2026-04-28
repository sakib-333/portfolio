import Navbar from "./components/header/Navbar";
import About from "./components/main/About";
import Experience from "./components/main/Experience";
import Contact from "./components/main/Contact";
import Education from "./components/main/Education";
import Home from "./components/main/Home";



const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-primary-container selection:text-white">
      <Navbar />
      <main className="w-full mx-auto">
        <Home />
        <Experience />
        <Education />
        <About />
        <Contact />


      </main>
    </div>
  )
}

export default App