import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const collegeData: { [key: string]: any } = {
    "amrita-university": {
      name: "Amrita University",
      location: "Coimbatore",
      description:
        "Amrita University is a multi-campus, multi-disciplinary research university that is ranked among the best in India.",
      courses: ["B.Tech", "M.Tech", "MBA", "Medical Sciences"],
      facilities: ["World-class Labs", "Research Centers", "Sports Complex", "Digital Library"],
      admissionProcess: ["Online Application", "Entrance Exam", "Interview", "Merit-based Selection"],
    },
    "psg-tech": {
      name: "PSG Tech",
      location: "Coimbatore",
      description:
        "PSG College of Technology is a premier engineering college in Coimbatore, offering a wide range of undergraduate and postgraduate courses.",
      courses: ["B.Tech", "M.Tech", "MBA"],
      facilities: ["Well-equipped Labs", "Library", "Sports Facilities", "Hostels"],
      admissionProcess: ["TNEA Counselling", "Merit-based Selection"],
    },
    "cit": {
      name: "CIT",
      location: "Coimbatore",
      description:
        "Coimbatore Institute of Technology is a renowned institute offering quality engineering education and industry collaboration.",
      courses: ["B.Tech", "M.Tech", "MBA"],
      facilities: ["Modern Labs", "Sports Complex", "Hostel Facilities", "Industry Tie-ups"],
      admissionProcess: ["TNEA Counselling", "Merit-based Selection"],
    },
    "kumaraguru": {
      name: "Kumaraguru College of Technology",
      location: "Coimbatore",
      description:
        "Kumaraguru College of Technology is an autonomous institution known for its quality engineering and management programs.",
      courses: ["B.Tech", "M.Tech", "MBA"],
      facilities: ["Innovative Labs", "Digital Classrooms", "Library", "Sports"],
      admissionProcess: ["TNEA Counselling", "Entrance Exam", "Interview"],
    },
    "shri-krishna": {
      name: "Shri Krishna College of Engineering and Technology",
      location: "Coimbatore",
      description:
        "Shri Krishna College of Engineering and Technology is focused on providing quality education in the field of engineering and technology.",
      courses: ["B.Tech", "M.Tech"],
      facilities: ["State-of-the-art Labs", "Sports Facilities", "Hostel", "Wi-Fi Enabled Campus"],
      admissionProcess: ["TNEA Counselling", "Merit-based Selection"],
    },
    "vit-university": {
      name: "VIT University",
      location: "Chennai",
      description:
        "VIT University is known for its academic excellence and research-driven approach to education.",
      courses: ["Engineering", "Sciences", "Management", "Design"],
      facilities: ["Smart Classrooms", "Innovation Center", "Modern Labs", "International Exchange Programs"],
      admissionProcess: ["VITEEE", "Counselling", "Document Verification", "Admission Confirmation"],
    },
    "srm-university": {
      name: "SRM University",
      location: "Chennai",
      description:
        "SRM University is one of India's top universities, offering a wide range of undergraduate, postgraduate, and doctoral programs.",
      courses: ["B.Tech", "M.Tech", "MBA", "Law", "Arts & Humanities"],
      facilities: ["State-of-the-art Laboratories", "Library", "Sports Complex", "Hostels"],
      admissionProcess: ["SRMJEEE", "Counselling", "Document Verification", "Admission Confirmation"],
    },
    "ssn": {
      name: "SSN College of Engineering",
      location: "Chennai",
      description:
        "SSN College of Engineering is one of the top engineering institutions in Tamil Nadu, known for its infrastructure and academic quality.",
      courses: ["B.Tech", "M.Tech", "MBA"],
      facilities: ["Modern Labs", "Sports Complex", "Library", "Hostels"],
      admissionProcess: ["TNEA Counselling", "Merit-based Selection"],
    },
    "loyola": {
      name: "Loyola College",
      location: "Chennai",
      description:
        "Loyola College is a premier institution offering a variety of undergraduate and postgraduate courses with a focus on holistic development.",
      courses: ["B.A", "B.Sc", "M.A", "M.Sc", "MBA"],
      facilities: ["Library", "Sports Complex", "Cultural Activities", "Hostels"],
      admissionProcess: ["Online Application", "Merit-based Selection"],
    },
    "dg-vaishnav": {
      name: "DG Vaishnav College",
      location: "Chennai",
      description:
        "DG Vaishnav College is one of the leading arts and science colleges in Chennai, offering a range of undergraduate and postgraduate programs.",
      courses: ["B.Sc", "B.Com", "M.Sc", "M.Com"],
      facilities: ["Library", "Computer Lab", "Sports Facilities", "Hostels"],
      admissionProcess: ["Online Application", "Merit-based Selection"],
    },
    "mcc": {
      name: "MCC (Madras Christian College)",
      location: "Chennai",
      description:
        "MCC is one of the oldest and most prestigious educational institutions in India, offering courses across various disciplines.",
      courses: ["B.A", "B.Sc", "M.A", "M.Sc", "MBA"],
      facilities: ["Library", "Wi-Fi Enabled Campus", "Sports", "Hostels"],
      admissionProcess: ["Online Application", "Merit-based Selection"],
    },
    "christ-university": {
      name: "Christ University",
      location: "Bangalore",
      description:
        "Christ University is a prestigious private university offering a variety of courses in a research-driven and student-friendly environment.",
      courses: ["B.Tech", "M.Tech", "BBA", "MBA", "Arts & Sciences"],
      facilities: ["Smart Classrooms", "Research Centers", "Sports Complex", "Hostels"],
      admissionProcess: ["Online Application", "Entrance Exam", "Counselling"],
    },
    "ms-ramaiah": {
      name: "MS Ramaiah University of Applied Sciences",
      location: "Bangalore",
      description:
        "MS Ramaiah University offers a wide range of programs with a focus on quality education and industry collaboration.",
      courses: ["B.Tech", "M.Tech", "MBA"],
      facilities: ["Research Labs", "Sports Complex", "Library", "Hostels"],
      admissionProcess: ["Online Application", "Entrance Exam", "Counselling"],
    },
    "rv": {
      name: "RV College of Engineering",
      location: "Bangalore",
      description:
        "RV College of Engineering is one of the leading engineering colleges in Bangalore, known for its academic excellence and industry connections.",
      courses: ["B.Tech", "M.Tech", "MBA"],
      facilities: ["Advanced Labs", "Sports Facilities", "Library", "Cafeteria"],
      admissionProcess: ["COMEDK", "K-CET", "Counselling"],
    },
    "bms": {
      name: "BMS College of Engineering",
      location: "Bangalore",
      description:
        "BMS College of Engineering is one of the oldest engineering colleges in Bangalore, known for its excellent faculty and infrastructure.",
      courses: ["B.Tech", "M.Tech", "MBA"],
      facilities: ["State-of-the-art Labs", "Library", "Sports Complex", "Hostels"],
      admissionProcess: ["COMEDK", "K-CET", "Counselling"],
    },
    "pes": {
      name: "PES University",
      location: "Bangalore",
      description:
        "PES University offers various undergraduate and postgraduate programs in engineering, management, and life sciences.",
      courses: ["B.Tech", "M.Tech", "MBA"],
      facilities: ["Smart Classrooms", "Research Centers", "Sports Facilities", "Hostels"],
      admissionProcess: ["Online Application", "Entrance Exam", "Counselling"],
    },
  }
  

export default function CollegePage({ params }: { params: { college: string } }) {
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

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Available Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {college.courses.map((course: string) => (
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
                  {college.facilities.map((facility: string) => (
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
                {college.admissionProcess.map((step: string) => (
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

