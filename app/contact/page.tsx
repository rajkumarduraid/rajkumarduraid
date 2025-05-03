import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F1A3C] flex flex-col">
      <header className="container mx-auto py-6 px-4 border-b border-gray-100">
        <MainNav />
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-8">Get in touch</h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#0F1A3C]/80 mb-8">
                Have a question about our business process automation or reengineering services? Fill out the form and
                we'll get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0F1A3C] mb-1">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="border-gray-300" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0F1A3C] mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="border-gray-300" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#0F1A3C] mb-1">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help?" className="border-gray-300" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0F1A3C] mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or inquiry..."
                      className="border-gray-300 min-h-[150px]"
                    />
                  </div>
                </div>

                <Button className="bg-[#00D1B2] hover:bg-[#00b89c] text-white w-full">Send Message</Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-[#0F1A3C] p-8 rounded-lg text-white">
                <h2 className="text-xl font-semibold mb-6 text-[#00D1B2]">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-[#00D1B2] mt-1 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-white">Email</p>
                      <p className="text-gray-300">hello@xutoai.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-[#00D1B2] mt-1 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-white">Phone</p>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#00D1B2] mt-1 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-white">Office</p>
                      <p className="text-gray-300">123 Innovation Street</p>
                      <p className="text-gray-300">Tech City, TC 10101</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0F1A3C] p-8 rounded-lg text-white">
                <h2 className="text-xl font-semibold mb-6 text-[#00D1B2]">Schedule a Consultation</h2>
                <p className="text-gray-300 mb-4">
                  Ready to discuss your business process automation or reengineering needs? Schedule a free 30-minute
                  consultation with one of our experts.
                </p>

                <Button className="bg-[#00D1B2] hover:bg-[#00b89c] text-white w-full">Book a Consultation</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
