import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

const colleges = {
  coimbatore: [
    { name: "Amrita University", slug: "amrita-university" },
    { name: "PSG Tech", slug: "psg-tech" },
    { name: "CIT", slug: "cit" },
    { name: "Kumaraguru", slug: "kumaraguru" },
    { name: "Shri Krishna", slug: "shri-krishna" },
  ],
  chennai: [
    { name: "VIT University", slug: "vit-university" },
    { name: "SRM University", slug: "srm-university" },
    { name: "SSN", slug: "ssn" },
    { name: "Loyola", slug: "loyola" },
    { name: "DG Vaishnav", slug: "dg-vaishnav" },
    { name: "MCC", slug: "mcc" },
  ],
  bangalore: [
    { name: "Christ University", slug: "christ-university" },
    { name: "MS Ramaiah", slug: "ms-ramaiah" },
    { name: "RV", slug: "rv" },
    { name: "BMS", slug: "bms" },
    { name: "PES", slug: "pes" },
  ],
}

const careers = [
  {
    title: "Java Developer",
    company: "Cognizant (CTS)",
    location: "Chennai",
    experience: "4+ years",
    slug: "java-developer",
  },
  {
    title: "AWS Specialist",
    company: "Tech Mahindra",
    location: "Bangalore",
    experience: "4+ years",
    slug: "aws-specialist",
  },
]

export default function Colleges() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container">
          <h1 className="text-3xl font-bold tracking-tighter text-center mb-12">Colleges & Career Opportunities</h1>

          <Tabs defaultValue="coimbatore" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="coimbatore">Coimbatore</TabsTrigger>
              <TabsTrigger value="chennai">Chennai</TabsTrigger>
              <TabsTrigger value="bangalore">Bangalore</TabsTrigger>
            </TabsList>
            {Object.entries(colleges).map(([city, collegeList]) => (
              <TabsContent key={city} value={city}>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {collegeList.map((college) => (
                    <Card key={college.slug}>
                      <CardHeader>
                        <CardTitle>{college.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href={`/colleges/${college.slug}`}>Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-8">Career Opportunities</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {careers.map((career) => (
              <Card key={career.slug}>
                <CardHeader>
                  <CardTitle>{career.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">
                    Company: {career.company}
                    <br />
                    Experience: {career.experience}
                    <br />
                    Location: {career.location}
                  </p>
                  <Button className="w-full" asChild>
                    <Link href={`/careers/${career.slug}`}>Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

