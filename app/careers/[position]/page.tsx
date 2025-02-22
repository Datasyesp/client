import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen, Users, Globe } from "lucide-react"
import Link from "next/link"
import { PageProps } from "next"

interface Job {
  title: string;
  company: string;
  location: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

const jobData: Record<string, Job> = {
  "java-developer": {
    title: "Java Developer",
    company: "Cognizant (CTS)",
    location: "Chennai",
    experience: "4+ years",
    description:
      "We are looking for an experienced Java Developer to join our team. The ideal candidate will have strong expertise in Java development and related technologies.",
    requirements: [
      "4+ years of experience in Java development",
      "Strong knowledge of Spring Framework",
      "Experience with microservices architecture",
      "Proficiency in SQL and NoSQL databases",
    ],
    responsibilities: [
      "Design and implement Java-based applications",
      "Write clean, maintainable code",
      "Participate in code reviews",
      "Collaborate with cross-functional teams",
    ],
  },
}

export default function CareerPage({ params }: PageProps<{ position: string }>) {
  const job: Job = jobData[params.position] || {
    title: "Position Details",
    company: "Company",
    location: "Location",
    experience: "Required Experience",
    description: "Details coming soon.",
    requirements: [],
    responsibilities: [],
  }

  return (
    <div className="py-12 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{job.title}</h1>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Job Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>Company:</strong> {job.company}
                </p>
                <p className="text-gray-600">
                  <strong>Location:</strong> {job.location}
                </p>
                <p className="text-gray-600">
                  <strong>Experience:</strong> {job.experience}
                </p>
                <p className="text-gray-600">{job.description}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
