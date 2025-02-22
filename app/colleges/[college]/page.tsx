import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface College {
  name: string;
  location: string;
  description: string;
  courses: string[];
  facilities: string[];
  admissionProcess: string[];
}

const collegeData: Record<string, College> = {
  "amrita-university": {
    name: "Amrita University",
    location: "Coimbatore",
    description:
      "Amrita University is a multi-campus, multi-disciplinary research university that is ranked among the best in India.",
    courses: ["B.Tech", "M.Tech", "MBA", "Medical Sciences"],
    facilities: ["World-class Labs", "Research Centers", "Sports Complex", "Digital Library"],
    admissionProcess: ["Online Application", "Entrance Exam", "Interview", "Merit-based Selection"],
  },
}

export default function CollegePage({ params }: { params: { college: string } }) {
  const college: College = collegeData[params.college] || {
    name: "College Details",
    location: "Location",
    description: "Details coming soon.",
    courses: [],
    facilities: [],
    admissionProcess: [],
  }

  return (
    <div className="py-12 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{college.name}</h1>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>About the Institution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{college.description}</p>
              <p className="mt-4 text-gray-600">Location: {college.location}</p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Available Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {college.courses.map((course) => (
                    <li key={course} className="text-gray-600">
                      {course}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {college.facilities.map((facility) => (
                    <li key={facility} className="text-gray-600">
                      {facility}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Admission Process</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                {college.admissionProcess.map((step) => (
                  <li key={step} className="text-gray-600">
                    {step}
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex gap-4">
                <Button asChild>
                  <Link href="/contact">Apply Now</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/colleges">Back to Colleges</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
