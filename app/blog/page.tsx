import Link from "next/link"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "5 Ways Business Process Automation Can Transform Your Operations",
    excerpt:
      "Discover how implementing business process automation can dramatically improve efficiency and reduce costs.",
    date: "April 15, 2023",
    category: "Automation",
    imageUrl: "/bpa-overview-dashboard.png",
  },
  {
    id: 2,
    title: "The Complete Guide to Business Process Reengineering",
    excerpt: "Learn the key principles and methodologies for successful business process reengineering projects.",
    date: "March 22, 2023",
    category: "Reengineering",
    imageUrl: "/bpr-overview.png",
  },
  {
    id: 3,
    title: "How AI is Revolutionizing Business Process Management",
    excerpt: "Explore how artificial intelligence is transforming the way organizations manage and optimize processes.",
    date: "February 10, 2023",
    category: "AI & Automation",
    imageUrl: "/intelligent-workflow.png",
  },
  {
    id: 4,
    title: "Measuring ROI: The Business Case for Process Automation",
    excerpt:
      "A comprehensive guide to calculating and demonstrating the return on investment for process automation initiatives.",
    date: "January 5, 2023",
    category: "ROI & Metrics",
    imageUrl: "/business-roi-dashboard.png",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F1A3C] flex flex-col">
      <header className="container mx-auto py-6 px-4 border-b border-gray-100">
        <MainNav />
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">Blog</h1>
              <p className="text-[#0F1A3C]/80">Insights and updates on business process optimization</p>
            </div>

            <div className="mt-4 md:mt-0 relative w-full md:w-64">
              <Input placeholder="Search articles..." className="pr-10 border-gray-300" />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg overflow-hidden card-shadow transition-transform hover:scale-[1.02]"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative h-48 w-full">
                    <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-xs text-[#00D1B2] font-medium">{post.category}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-xs text-[#0F1A3C]/60">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 text-[#0F1A3C]">{post.title}</h2>
                    <p className="text-[#0F1A3C]/70 text-sm mb-4">{post.excerpt}</p>
                    <Button variant="link" className="text-[#00D1B2] p-0 h-auto">
                      Read more
                    </Button>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-[#00D1B2]/20 text-[#00D1B2] hover:bg-[#00D1B2]/5">
              Load More Articles
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
