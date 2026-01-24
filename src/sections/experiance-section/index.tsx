import ExperianceCard from "@/components/experiance-card"
import Section from "@/components/section"
import SectionHeader from "@/components/section-header"

const experianceData = [
  {
    id: "experiance-3",
    companyLogo: "/companies/edutechs.png",
    companyName: "Edutechs Limited",
    companySite: "https://edutechs.app/welcome",
    position: "Junior Software Developer",
    duration: "November 2025 - Present",
    workedWith: [
      "Designed, implemented, and maintained secure user authentication and real-time data synchronization using Firebase Authentication and Realtime Database.",
      "Delivered end-to-end feature development from concept to production, including seamless frontend and backend integration.",
      "Identified, debugged, and resolved application issues while optimizing performance to enhance responsiveness, reliability, and scalability.",
      "Collaborated cross-functionally with product managers, designers, and QA teams; integrated and maintained third-party APIs (payments, notifications, analytics) and ensured quality through structured testing and regression validation."
    ]

  },
  {
    id: "experiance-2",
    companyLogo: "/companies/edutechs.png",
    companyName: "Edutechs Limited",
    companySite: "https://edutechs.app/welcome",
    position: "Software Developer Intern",
    duration: "August 2025 - November 2025",
    workedWith: [
      "Built and maintained web applications using React.js, focusing on creating responsive and user-friendly interfaces.",
      "Implemented Firebase Authentication and Realtime Database for secure user management and real-time data synchronization.",
      "Designed and optimized database schemas with Supabase, ensuring efficient data handling and scalability.",
      "Integrated multiple third-party APIs to extend application functionality and improve user experience."
    ]
  },
  {
    id: "experiance-1",
    companyLogo: "/companies/tfs.png",
    companyName: "TwinForce Solutions Limited",
    companySite: "https://twinforce.net",
    position: "Software Engineer Intern",
    duration: "May 2025 - July 2025",
    workedWith: [
      "Completed an internship focused on CRM development using the Salesforce platform, gaining hands-on experience in real-world business scenarios.",
      "Learned and practiced core Salesforce Admin functionalities including object configuration, permission sets, page layouts, and automation tools.",
      "Gained foundational knowledge in Apex programming, Lightning Web Components (LWC), and Flow Builder for building scalable and dynamic Salesforce solutions.",
      "Developed and tested custom triggers and components to automate business processes and enhance user experience within the Salesforce environment."
    ]
  },
]

function ExperianceSection() {
  return (
    <Section id="experiance-section">
      <SectionHeader
        heading="Experiance"
        title="A summary of my professional experiences that have enhanced my practical skills, problem-solving abilities, and industry knowledge."
      />
      <div className="pt-10 space-y-8">
        {experianceData.map(exp => (
          <ExperianceCard key={exp.id} experiance={exp} />
        ))}
      </div>
    </Section>
  )
}

export default ExperianceSection