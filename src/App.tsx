import Navbar from "./components/header/Navbar";
import About from "./components/main/About";
import Experience from "./components/main/Experience";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-primary-container selection:text-white">
      <Navbar />
      <main className="w-full mx-auto">
        <About />
        <Experience />
      </main>
    </div>
  )
}

export default App