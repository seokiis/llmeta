import { Button } from "@/components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { Separator } from "@radix-ui/react-separator";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between bg-white px-4 py-3 text-black sm:px-6 lg:px-8">
        <div className="flex items-center">
          <FlagIcon className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-bold">LLMETA</h1>
        </div>
        <Button className="text-black hover:bg-gray-200" variant="outline">
          Sign In
        </Button>
      </header>
      <Separator className="my-4" />
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>LLMETA Service</CardTitle>
              <CardDescription>
                LLMETA is a powerful tool that extracts metadata from images and
                PDFs. Our service uses advanced AI and machine learning
                algorithms to provide detailed information about your files,
                including file type, size, resolution, and more.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center space-y-4">
                <InfoIcon className="h-12 w-12" />
                <p>
                  With LLMETA, you can easily analyze your files and gain
                  valuable insights to improve your workflow and
                  decision-making.
                </p>
                <Button variant="primary">Learn More</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="flex items-center justify-center space-x-4">
            <Button variant="secondary">
              <ImageIcon className="h-5 w-5 mr-2" />
              Image
            </Button>
            <Button variant="secondary">
              <FileIcon className="h-5 w-5 mr-2" />
              PDF
            </Button>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-md">
            <Card>
              <CardHeader>
                <CardTitle>Upload File</CardTitle>
                <CardDescription>
                  Select an image or PDF file to extract metadata.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <Button className="w-full" variant="outline">
                    <UploadIcon className="h-5 w-5 mr-2" />
                    Choose File
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}

function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

function ImageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
