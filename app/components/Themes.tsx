import { HoverEffect } from "./ui/card-hover-effect"

export default function Themes() {
  const themes = [
    {
      title: "AI/ML/DL ",
      description: "Explore the cutting-edge world of AI, Machine Learning, and Deep Learning to innovate and solve real-world challenges.",
    },
    {
      title: "Open Innovation",
      description: "Unleash the power of open innovation to transform healthcare, finance, web development, and app development with collaborative, cutting-edge solutions.",
    },
    {
      title: "Cyber Security",
      description: "Impower the future of digital safety by innovating and collaborating on cutting-edge cybersecurity solutions to protect against evolving threats.",
    },
    {
      title: "Blockchain",
      description: "Revolutionize industries with decentralized solutions and transparent technologies through the power of blockchain innovation.",
    },
    {
      title: "AR/VR",
      description: "Transform experiences and redefine reality by pushing the boundaries of innovation in Augmented and Virtual Reality.",
    },
    {
      title: "IOT",
      description: "Connect the world seamlessly with smart, intuitive solutions through the power of the Internet of Things (IoT).",
    },
  ]

  return (
    <section id="themes" className="py-20">
      <div className="container mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          CodeStorm Themes
        </h2>
        <HoverEffect items={themes} />
      </div>
    </section>
  )
}

