import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Learntech</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              We are dedicated to empowering students to make informed decisions regarding their education and future
              careers.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-500">
                  Our mission is to empower students by providing accurate, personalized, and comprehensive admission
                  guidance, ensuring each individual finds the right academic path that aligns with their aspirations
                  and potential.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-500">
                  We strive to remove barriers and complexities in the admission process, offering support from start to
                  finish. Our dedicated team of experienced counsellors partners with students, guiding them through
                  every step.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-8">Why Choose Learntech?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-full">
                  <h3 className="font-bold mb-2">Expert Guidance</h3>
                  <p className="text-gray-500">
                    Our seasoned experts work tirelessly to ensure that students achieve their ambitions efficiently and
                    reliably.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-full">
                  <h3 className="font-bold mb-2">Comprehensive Support</h3>
                  <p className="text-gray-500">
                    From course selection to application processes, we provide complete support at every step.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-full">
                  <h3 className="font-bold mb-2">Global Reach</h3>
                  <p className="text-gray-500">
                    Our services extend beyond geographical boundaries, offering guidance for institutions both in India
                    and abroad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

