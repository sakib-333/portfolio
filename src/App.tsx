import Navbar from "./components/header/Navbar";
import About from "./components/main/About";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-primary-container selection:text-white">
      <Navbar />
      <main className="pt-20 px-6 w-full mx-auto">
        <About />
      </main>
    </div>
  )
}

export default App