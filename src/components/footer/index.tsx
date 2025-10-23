interface Props {
  handleScroll: (sectionId: string) => void;
}

const socials = [
  {
    id: "social-1",
    icon: "/social/github.svg",
    url: "https://github.com/sakib-333",
  },
  {
    id: "social-2",
    icon: "/social/linkedin.svg",
    url: "https://www.linkedin.com/in/sakibur-rahman",
  },
  {
    id: "social-3",
    icon: "/social/whatsapp.svg",
    url: "https://api.whatsapp.com/send?phone=8801955207333"
  },
  {
    id: "social-4",
    icon: "/social/facebook.svg",
    url: "https://www.facebook.com/sakib071",
  },
]

function Footer({ handleScroll }: Props) {
  return (
    <section id="footer-section" className="min-h-[20vh] flex flex-col justify-between py-8">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold cursor-pointer tracking-tight md:text-2xl hover:text-primary transition-all duration-200"
            onClick={()=>handleScroll("home-section")}
          >
            Sakib
        </p>
        <div className="flex items-center gap-4">
          {
            socials.map(s => (
              <a key={s.id} href={s.url} target="_blank">
                <img src={s.icon} alt="icon" className="w-6 h-6 hover:text-white" />
              </a>
            ))
          }
        </div>
      </div>
      <p className="text-[10px] text-center">Copyright &copy; 2025</p>    
    </section>
  )
}

export default Footer