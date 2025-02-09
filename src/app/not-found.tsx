// app/not-found.tsx
import Link from "@/components/link";
import { Routes } from "@/constants/enums";



export default function NotFound() {
  return (
    <html>
      <body className="container">
        <div className="flex flex-col align-items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
          <h1 className="text-6xl font-extrabold text-gray-800 mb-4 drop-shadow-lg">
            404
          </h1>
          <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
          <Link
            href={Routes.ROOT}
            className="inline-block px-8 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-md"
          >
            Go Home
          </Link>
        </div>
      </body>
    </html>
  );
}
