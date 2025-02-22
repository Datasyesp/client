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
                    counsellors partners with students throughout their journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  <div className="p-2 bg-primary/10 w-fit rounded-lg">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Impact</h3>
                  <p className="text-gray-500">
                    Providing admissions guidance is about more than just helping students enroll into their preferred
                    college. It is about helping candidates lay the foundational stones for the life they desire to lead
                    in the future. The appropriate education in a student's career can enable them to improve their
                    standards of living and make life-altering contributions to society.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="relative overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-2 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Our Expertise</h3>
                    <p className="text-gray-500">
                      We specialize in guiding students through their academic journeys in various fields, including
                      Medicine, Dentistry, Engineering, Computer Science, Nursing, Pharmacy, Law, Management and more.
                      Our team's extensive knowledge of the Education sector, combined with a robust network of industry
                      contacts, has enabled us to assist countless students in achieving their academic ambitions.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-bold text-lg text-primary">10+</h4>
                      <p className="text-sm text-gray-500">Years Experience</p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-bold text-lg text-primary">1000+</h4>
                      <p className="text-sm text-gray-500">Students Guided</p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-bold text-lg text-primary">50+</h4>
                      <p className="text-sm text-gray-500">Partner Institutions</p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-bold text-lg text-primary">95%</h4>
                      <p className="text-sm text-gray-500">Success Rate</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Our Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <GraduationCap className="w-12 h-12 mb-4 text-primary" />
                <h3 className="font-bold mb-2">Admission Guidance</h3>
                <p className="text-sm text-gray-500">Expert guidance for admissions in India and abroad</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <BookOpen className="w-12 h-12 mb-4 text-primary" />
                <h3 className="font-bold mb-2">Career Counseling</h3>
                <p className="text-sm text-gray-500">Personalized career path and course selection support</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="w-12 h-12 mb-4 text-primary" />
                <h3 className="font-bold mb-2">NRI Assistance</h3>
                <p className="text-sm text-gray-500">Specialized support for NRI and international students</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Globe className="w-12 h-12 mb-4 text-primary" />
                <h3 className="font-bold mb-2">Global Education</h3>
                <p className="text-sm text-gray-500">Access to prestigious institutions worldwide</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Contact Us</h2>
            <p className="text-gray-500 mb-8">Get in touch with our expert counselors today</p>
            <form className="space-y-4">
              <input className="w-full p-3 border rounded-md" placeholder="Your Name" type="text" required />
              <input className="w-full p-3 border rounded-md" placeholder="Email Address" type="email" required />
              <textarea className="w-full p-3 border rounded-md" placeholder="Your Message" rows={4} required />
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

