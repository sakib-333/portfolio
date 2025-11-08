import ContactCard from "@/components/contact-card"
import Section from "@/components/section"
import SectionHeader from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

const contacts = [
  {
    id: "contact-1",
    title: "Email",
    value: "sakib.cse.333@gmail.com",
    icon: <Mail />
  },
  {
    id: "contact-2",
    title: "Phone",
    value: "+8801955-207333",
    icon: <Phone />
  },
  {
    id: "contact-3",
    title: "Location",
    value: "Dhaka, Bangladesh",
    icon: <MapPin />
  },

]

function ContactSection() {
  return (
//     <Section id="contact-section" className="bg-primary/20">
<Section id="contact-section">
      <SectionHeader 
       heading="Contact"
       title="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
      />
      <div className="pt-10 grid md:grid-cols-2 gap-8 p-4 pb-0 rounded-sm">
        <div className="flex flex-col gap-4 justify-between h-full">
          {
            contacts.map(contact => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          }
        </div>
        <form className="space-y-4 ">
          <Input placeholder="Your name..." required />
          <Input placeholder="Your email..." required type="email" />
          <Textarea placeholder="Message..." required />
          <Button className="w-full">
            <Send />Send
          </Button>
        </form>
      </div>
    </Section>
  )
}

export default ContactSection