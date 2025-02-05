import { Button } from "./ui/moving-border"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import { SparklesCore } from "./ui/sparkles"

export default function Hero() {
  return (
    <section className="text-center relative flex flex-col justify-center min-h-screen pt-16">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.05}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-sky-500">
          MU CodeStorm
        </h1>
        <TextGenerateEffect
          words="Innovate • Collaborate • Create"
          className="text-xl md:text-2xl mb-8 text-gray-300"
        />
        <p className="text-lg md:text-xl mb-8 text-indigo-300">
          March 21-22, 2025 • 36 Hours • Mandsaur University Campus
        </p>
        <a href="https://your-registration-link.com" target="_blank" rel="noopener noreferrer">
          <Button
            borderRadius="1.75rem"
            className="bg-indigo-600 hover:bg-indigo-700 text-white border-neutral-200 dark:border-slate-800 font-bold py-4 px-8 text-lg transition-colors duration-300"
          >
            Register Now
          </Button>
        </a>
      </div>
    </section>
  )
}
