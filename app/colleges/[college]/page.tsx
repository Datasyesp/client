
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { GetServerSideProps } from "next"

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

interface CollegePageProps {
  college: string;
}

export default function CollegePage({ college }: CollegePageProps) {
  if (!college) {
    return <div className="text-center py-12">Invalid College Selection</div>
  }

  const selectedCollege: College = collegeData[college] || {
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
          <h1 className="text-4xl font-bold mb-8">{selectedCollege.name}</h1>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>About the Institution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{selectedCollege.description}</p>
              <p className="mt-4 text-gray-600">Location: {selectedCollege.location}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { college } = context.params as { college: string };
  return { props: { college } };
}
