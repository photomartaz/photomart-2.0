import UploadImage from "@/components/UploadImage";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold mb-6">Cloudinary Test</h1>
      <UploadImage />
    </main>
  );
}
