import { NextPage } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CollegePageProps {
  params: { college: string }
}

const CollegePage: NextPage<CollegePageProps> = ({ params }) => {
  if (!params?.college) {
    return <div className="text-center py-12">Invalid College Selection</div>
  }

  const college = collegeData[params.college] || {
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
        </div>
      </div>
    </div>
  )
}

export default CollegePage
