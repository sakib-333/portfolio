import Navbar from "./components/header/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-primary-container selection:text-white">
      <Navbar />
      <main className="pt-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold font-space-grotesk tracking-tighter">Welcome to my Portfolio</h1>
        <p className="mt-4 text-zinc-400 max-w-2xl">
          I am a MERN stack developer focused on building high-performance web applications with modern aesthetics.
        </p>
      </main>
    </div>
  )
}

export default App