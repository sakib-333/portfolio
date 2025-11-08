import { AnimatePresence, motion } from "motion/react"
import { Button } from "../ui/button";
import Text from "../text";

const navItems = [
  { label: "Home", id: "home-section" },
  { label: "About", id: "about-section" },
  { label: "Experiance", id: "experiance-section" },
  { label: "Skills", id: "skills-section" },
  { label: "Projects", id: "projects-section" },
  { label: "Education", id: "education-section" },
  { label: "Contact", id: "contact-section" },
];

interface Props {
  open: boolean;
  handleScroll: (sectionId: string) => void;
  handleToggle: () => void;
  activeSection: string;
}

export default function NavbarSimple({ open, handleToggle, handleScroll, activeSection}: Props) {


  return (
      <div className="sticky top-0 z-50 bg-primary/30">
            <header className="container px-4 mx-auto w-full backdrop-blur border-foreground/50">
                  <nav className="mx-auto flex items-center justify-between py-4">
                  {/* LEFT: Brand */}
                  <p className="text-xl font-semibold cursor-pointer tracking-tight md:text-2xl hover:text-primary transition-all duration-200"
                  onClick={()=>handleScroll("home-section")}
                  >
                  Sakib
                  </p>

                  {/* RIGHT: Desktop nav */}
                  <ul className="hidden items-center gap-2 lg:flex">
                  {navItems.map((item) => (
                        <motion.li key={item.id}
                        whileTap={{ scale: 0.8 }}
                        transition={{duration: 0.4}}
                        className={`capitalize transition-colors text-sm duration-200 border hover:bg-primary px-3 py-0.5 rounded-3xl cursor-pointer 
                        ${activeSection === item.id && "bg-primary"}`
                        }
                        onClick={() => handleScroll(item.id)}
                        >
                        <Text>{ item.label }</Text>
                        </motion.li>
                  ))}
                  </ul>

                  <Button className="lg:hidden group" variant="outline" onClick={handleToggle}>
                  <div className="space-y-0.5">
                        <div className={`w-5 h-0.5 bg-primary rounded group-hover:bg-card ${open && "translate-y-0.5 rotate-45"} transition-all duration-200`}></div>
                        <div className={`w-5 h-0.5 bg-primary rounded group-hover:bg-card ${open && "hidden"} transition-all duration-200`}></div>
                        <div className={`w-5 h-0.5 bg-primary rounded group-hover:bg-card ${open && "-translate-y-0.5 -rotate-45"} transition-all duration-200`}></div>
                  </div>
                  </Button>
                  </nav>

                  {/* MOBILE: Collapsible panel */}
                  <AnimatePresence initial={false}>
                  {open ? (
                  <motion.div 
                        className="absolute top-[69px] w-full bg-background blur-in min-h-[90vh] overflow-hidden overflow-y-hidden"
                        initial={{ left: -100, opacity: 0 }}
                        animate={{ left: 0, opacity: 1 }}
                        exit={{ left: -100, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                  >
                        <motion.ul 
                        className="flex flex-col gap-1 px-1 py-3"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                        visible: {
                              transition: {
                              staggerChildren: 0.1,
                              }
                        },
                        hidden: {
                              transition: {
                              staggerChildren: 0.05,
                              staggerDirection: -1,
                              }
                        }
                        }}
                        >
                        {navItems.map((item) => (
                        <motion.li 
                              key={item.id}
                              variants={{
                              hidden: { 
                              opacity: 0, 
                              x: -20,
                              display: "none" 
                              },
                              visible: { 
                              opacity: 1, 
                              x: 0,
                              display: "block" 
                              }
                              }}
                              whileTap={{ scale: 0.8 }}
                              transition={{
                              duration: 0.3,
                              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                              }}
                              className={`w-full text-center cursor-pointer ${activeSection === item.id && "text-primary underline"} hover:text-primary block rounded-md px-3 py-2`}
                              onClick={() => handleScroll(item.id)}
                        >
                              {item.label}
                        </motion.li>
                        ))}
                        </motion.ul>
                  </motion.div>
                  ) : null}
                  </AnimatePresence>
            </header>
      </div>
  );
}

