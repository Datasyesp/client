import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Welcome to Learntech Edu Solutions
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Your trusted partner in educational guidance. We provide precise and impactful admission guidance for
              students worldwide.
            </p>
            <div className="space-x-4">
              <Button asChild>
                <Link href="#contact">Get Started</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">About Us</h2>
              <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                Our primary focus at Learntech Edu Solutions is to offer precise and impactful admission guidance,
                facilitated by seasoned experts with deep-rooted experience in the Education industry.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              <Card className="relative overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  <div className="p-2 bg-primary/10 w-fit rounded-lg">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="text-gray-500">
                    Our mission is to empower students by providing accurate, personalized, and comprehensive admission
                    guidance, ensuring each individual finds the right academic path that aligns with their aspirations
                    and potential. We strive to remove the barriers and complexities in the admission process, offering
                    support from start to finish.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  <div className="p-2 bg-primary/10 w-fit rounded-lg">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Global Reach</h3>
                  <p className="text-gray-500">
                    Our services are not confined by geographic boundaries; we provide comprehensive support for
                    admission to esteemed institutions both in India and abroad. Furthermore, our services extend beyond
                    Indian nationals, offering tailored guidance to NRIs and international students who aspire to pursue
                    higher education in India.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  <div className="p-2 bg-primary/10 w-fit rounded-lg">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Approach</h3>
                  <p className="text-gray-500">
                    As an educational service provider, we offer numerous services for students and the institutes we
                    work with. We strive to find the best feasible fit for our students while also taking into
                    consideration their personal objectives and career goals. Our dedicated team of experienced
                    counselors partners with students throughout their journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
