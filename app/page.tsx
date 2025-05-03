"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, RefreshCw, Zap, BarChart, Workflow, Cog, LineChart } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

// Animated text content options
const heroTitles = [
  "We transform businesses through",
  "We optimize operations with",
  "We revolutionize workflows using",
  "We accelerate growth with",
  "We enhance productivity through",
  "We streamline processes with",
  "We reduce operational costs using",
  "We maximize efficiency with",
]

const heroSubtitles = [
  "Process Automation",
  "Intelligent Workflows",
  "Business Reengineering",
  "Digital Transformation",
  "Smart Process Management",
  "Workflow Optimization",
  "Automated Decision Systems",
  "Strategic Process Innovation",
]

export default function Home() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [subtitleIndex, setSubtitleIndex] = useState(0)
  const [isChanging, setIsChanging] = useState(false)

  // Rotate through titles and subtitles
  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true)
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % heroTitles.length)
        setSubtitleIndex((prev) => (prev + 1) % heroSubtitles.length)
        setIsChanging(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white text-[#0F1A3C] flex flex-col">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 border-b border-gray-100">
        <MainNav />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="pattern-bg py-24 md:py-36">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-12 max-w-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0F1A3C]">
                  XutoAi - Your Partner in Business Automation & Transformation
                </h2>

                <div className="h-40 md:h-44">
                  <h1
                    className={`text-4xl md:text-5xl font-bold tracking-tight text-[#0F1A3C] transition-opacity duration-500 ${isChanging ? "opacity-0" : "opacity-100"}`}
                  >
                    {heroTitles[titleIndex]}
                  </h1>
                  <h2
                    className={`text-4xl md:text-5xl font-bold text-[#00D1B2] mt-2 transition-opacity duration-500 ${isChanging ? "opacity-0" : "opacity-100"}`}
                  >
                    {heroSubtitles[subtitleIndex]}
                  </h2>
                </div>

                <p className="text-[#0F1A3C]/80 text-lg animate-slide-up">
                  We help organizations streamline operations, reduce costs, and improve efficiency through intelligent
                  automation and strategic process reengineering.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up pt-4">
                  <Link href="/contact">
                    <Button className="bg-[#00D1B2] hover:bg-[#00b89c] text-white group w-full sm:w-auto">
                      Transform your business
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                  <Button variant="outline" className="border-[#0F1A3C]/20 text-[#0F1A3C] hover:bg-[#0F1A3C]/5">
                    Schedule a consultation
                  </Button>
                </div>
              </div>

              <div className="relative animate-float">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#00D1B2]/10 to-[#0F1A3C]/20 rounded-full blur-3xl opacity-30"></div>
                <div className="relative blob-shape bg-gradient-to-br from-[#00D1B2]/30 to-[#0F1A3C]/30 p-1">
                  <div className="bg-white h-full w-full blob-shape p-6">
                    <Image
                      src="/bpa-bpr-process.png"
                      width={500}
                      height={500}
                      alt="Business Process Automation and Reengineering"
                      className="w-full h-auto rounded-lg"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-[#0F1A3C] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold gradient-text mb-4">Our Solutions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Leverage cutting-edge automation and process reengineering to transform your business operations and
                create exceptional efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Workflow className="h-8 w-8 text-[#00D1B2]" />,
                  title: "Process Automation",
                  description: "Automate repetitive tasks and workflows to reduce manual effort and minimize errors.",
                },
                {
                  icon: <RefreshCw className="h-8 w-8 text-[#00D1B2]" />,
                  title: "Business Process Reengineering",
                  description:
                    "Redesign core business processes to achieve dramatic improvements in productivity and quality.",
                },
                {
                  icon: <LineChart className="h-8 w-8 text-[#00D1B2]" />,
                  title: "Performance Analytics",
                  description: "Gain actionable insights from your process data to continuously improve operations.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#1a2a54] rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-[#00D1B2]/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold gradient-text mb-4">Our Approach</h2>
              <p className="text-[#0F1A3C]/80 max-w-2xl mx-auto">
                We follow a proven methodology to transform your business processes and achieve measurable results.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Analyze",
                  description:
                    "We thoroughly analyze your current processes to identify inefficiencies and bottlenecks.",
                  icon: <BarChart className="h-6 w-6 text-[#00D1B2]" />,
                },
                {
                  step: "02",
                  title: "Design",
                  description: "We design optimized processes that align with your business goals and objectives.",
                  icon: <Cog className="h-6 w-6 text-[#00D1B2]" />,
                },
                {
                  step: "03",
                  title: "Implement",
                  description: "We implement automation solutions and process changes with minimal disruption.",
                  icon: <Zap className="h-6 w-6 text-[#00D1B2]" />,
                },
                {
                  step: "04",
                  title: "Optimize",
                  description: "We continuously monitor and optimize processes to ensure maximum efficiency.",
                  icon: <RefreshCw className="h-6 w-6 text-[#00D1B2]" />,
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-8 border border-gray-100 card-shadow h-full">
                    <div className="absolute -top-4 -left-4 bg-[#00D1B2] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div className="pt-4">
                      <div className="mb-4 flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-[#0F1A3C]">{step.title}</h3>
                        {step.icon}
                      </div>
                      <p className="text-[#0F1A3C]/70">{step.description}</p>
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-8 w-8 text-[#00D1B2]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#0F1A3C]/5 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "60%", label: "Cost Reduction" },
                { value: "85%", label: "Efficiency Increase" },
                { value: "50+", label: "Enterprise Clients" },
                { value: "100%", label: "Accuracy" },
              ].map((stat, index) => (
                <div key={index} className="animate-pulse-slow">
                  <div className="text-4xl font-bold text-[#00D1B2] mb-2">{stat.value}</div>
                  <div className="text-[#0F1A3C]/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold gradient-text mb-4">What Our Clients Say</h2>
              <p className="text-[#0F1A3C]/80 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about our process automation and
                reengineering solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "XutoAi transformed our order processing system. What used to take days now happens in minutes, and our error rate has dropped by 90%.",
                  author: "Sarah Johnson",
                  role: "COO, Global Manufacturing Inc.",
                },
                {
                  quote:
                    "The business process reengineering project led by XutoAi helped us identify and eliminate redundancies we didn't even know existed. Our operational costs are down 40%.",
                  author: "Michael Chen",
                  role: "VP of Operations, TechFlow Solutions",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-8 card-shadow border border-gray-100">
                  <div className="flex items-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#0F1A3C]/80 italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-[#0F1A3C]">{testimonial.author}</p>
                    <p className="text-[#0F1A3C]/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-[#0F1A3C] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold gradient-text mb-4">Industries We Serve</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our business process automation and reengineering solutions are tailored to meet the unique needs of
                various industries.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Manufacturing",
                "Healthcare",
                "Financial Services",
                "Retail",
                "Logistics",
                "Insurance",
                "Government",
                "Education",
              ].map((industry, index) => (
                <div
                  key={index}
                  className="bg-[#1a2a54] rounded-lg p-6 text-center hover:bg-[#00D1B2]/20 transition-colors"
                >
                  <p className="font-medium">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#0F1A3C] mb-6">Ready to transform your business processes?</h2>
              <p className="text-[#0F1A3C]/80 mb-8">
                Join the hundreds of businesses that are already saving time, reducing costs, and improving efficiency
                with our automation and reengineering solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#00D1B2] hover:bg-[#00b89c] text-white">Schedule a Demo</Button>

                <Button variant="outline" className="border-[#0F1A3C]/20 text-[#0F1A3C] hover:bg-[#0F1A3C]/5">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
