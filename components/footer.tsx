import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t py-6">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-500">
              Learntech Edu Solutions - Your trusted partner in educational guidance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/colleges">Colleges & Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Admission Guidance</li>
              <li>Career Counseling</li>
              <li>NRI Assistance</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Address: #61/A , Chanokund,  Thadikkadavu (Po) , Taliparamba,  Kannur - 670581
              Kerala</li>
              <li>Email: Hublearn14@gmail.com</li>
              <li>Phone: +91 6282595965</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Learntech Edu Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

