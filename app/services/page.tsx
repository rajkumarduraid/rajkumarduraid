import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Workflow, RefreshCw, LineChart, Bot, Zap, BarChart, Cog, FileText } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F1A3C] flex flex-col">
      <header className="container mx-auto py-6 px-4 border-b border-gray-100">
        <MainNav />
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#0F1A3C] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-300">
                Comprehensive business process automation and reengineering solutions to transform your operations
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="bg-[#00D1B2]/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Workflow className="h-8 w-8 text-[#00D1B2]" />
                </div>
                <h2 className="text-3xl font-bold text-[#0F1A3C]">Business Process Automation</h2>
                <p className="text-[#0F1A3C]/80">
                  Our business process automation services help organizations streamline operations, reduce manual
                  effort, and minimize errors. We leverage cutting-edge technologies to automate repetitive tasks and
                  workflows, allowing your team to focus on high-value activities.
                </p>
                <ul className="space-y-3">
                  {[
                    "Workflow automation",
                    "Document processing automation",
                    "Data entry and validation automation",
                    "Approval process automation",
                    "Integration with existing systems",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 text-[#00D1B2]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-[#00D1B2] hover:bg-[#00b89c] text-white">Learn More</Button>
              </div>

              <div className="space-y-8">
                <div className="bg-[#00D1B2]/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <RefreshCw className="h-8 w-8 text-[#00D1B2]" />
                </div>
                <h2 className="text-3xl font-bold text-[#0F1A3C]">Business Process Reengineering</h2>
                <p className="text-[#0F1A3C]/80">
                  Our business process reengineering services help organizations fundamentally rethink and redesign
                  business processes to achieve dramatic improvements in critical performance measures such as cost,
                  quality, service, and speed.
                </p>
                <ul className="space-y-3">
                  {[
                    "Process analysis and mapping",
                    "Bottleneck identification",
                    "Process redesign and optimization",
                    "Change management",
                    "Implementation and training",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 text-[#00D1B2]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-[#00D1B2] hover:bg-[#00b89c] text-white">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-[#0F1A3C]/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 gradient-text">Additional Services</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <LineChart className="h-8 w-8 text-[#00D1B2]" />,
                  title: "Process Analytics",
                  description:
                    "Gain actionable insights from your process data to identify improvement opportunities and measure the impact of changes.",
                },
                {
                  icon: <Bot className="h-8 w-8 text-[#00D1B2]" />,
                  title: "Intelligent Automation",
                  description:
                    "Leverage AI and machine learning to create intelligent automation solutions that can adapt and learn over time.",
                },
                {
                  icon: <Cog className="h-8 w-8 text-[#00D1B2]" />,
                  title: "System Integration",
                  description:
                    "Seamlessly integrate your existing systems and applications to create a unified workflow and eliminate data silos.",
                },
                {
                  icon: <FileText className="h-8 w-8 text-[#00D1B2]" />,
                  title: "Documentation & Training",
                  description:
                    "Comprehensive documentation and training to ensure your team can effectively use and maintain the new processes.",
                },
                {
                  icon: <BarChart className="h-8 w-8 text-[#00D1B2]" />,
                  title: "Performance Monitoring",
                  description:
                    "Continuous monitoring of process performance to identify and address issues before they impact your business.",
                },
                {
                  icon: <Zap className="h-8 w-8 text-[#00D1B2]" />,
                  title: "Digital Transformation",
                  description:
                    "End-to-end digital transformation services to help your organization embrace new technologies and ways of working.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 card-shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-[#00D1B2]/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#0F1A3C]">{service.title}</h3>
                  <p className="text-[#0F1A3C]/70">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold gradient-text mb-4">How We Work</h2>
              <p className="text-[#0F1A3C]/80 max-w-2xl mx-auto">
                Our proven methodology ensures successful implementation of business process automation and
                reengineering projects.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#00D1B2]/20 -translate-x-1/2"></div>

              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Discovery & Analysis",
                    description:
                      "We start by understanding your business goals and analyzing your current processes to identify inefficiencies and improvement opportunities.",
                  },
                  {
                    step: "02",
                    title: "Solution Design",
                    description:
                      "We design optimized processes and automation solutions tailored to your specific needs and objectives.",
                  },
                  {
                    step: "03",
                    title: "Implementation",
                    description:
                      "We implement the solutions with minimal disruption to your operations, ensuring a smooth transition.",
                  },
                  {
                    step: "04",
                    title: "Testing & Validation",
                    description:
                      "We thoroughly test the new processes and systems to ensure they meet all requirements and function as expected.",
                  },
                  {
                    step: "05",
                    title: "Training & Adoption",
                    description:
                      "We provide comprehensive training to ensure your team can effectively use and maintain the new processes.",
                  },
                  {
                    step: "06",
                    title: "Continuous Improvement",
                    description:
                      "We continuously monitor and optimize the processes to ensure they deliver maximum value over time.",
                  },
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                      <div className="bg-white rounded-xl p-8 card-shadow border border-gray-100">
                        <div className="absolute top-0 md:top-2 left-0 md:left-auto md:translate-y-0 -translate-y-1/2 bg-[#00D1B2] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold z-10 md:translate-x-0">
                          {index % 2 === 0 ? (
                            <div className="md:absolute md:right-0 md:translate-x-1/2">{step.step}</div>
                          ) : (
                            <div className="md:absolute md:left-0 md:-translate-x-1/2">{step.step}</div>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-[#0F1A3C]">{step.title}</h3>
                        <p className="text-[#0F1A3C]/70">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0F1A3C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to optimize your business processes?</h2>
              <p className="text-gray-300 mb-8">
                Contact us today to schedule a consultation and learn how our business process automation and
                reengineering services can help your organization achieve its goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#00D1B2] hover:bg-[#00b89c] text-white">Contact Us</Button>

                <Button variant="outline" className="border-gray-600 text-white hover:bg-white/10">
                  View Case Studies
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
