"use client";

import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

export default function UploadImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center gap-4">
      <CldUploadWidget
        uploadPreset="photomart_preset" // Cloudinary-də yaratdığın unsigned preset
        options={{ folder: "products" }}
        onSuccess={(result: any, { widget }) => {
          console.log("✅ Upload result:", result);
          if (result?.info?.secure_url) {
            setImageUrl(result.info.secure_url); // şəkil URL-ni state-ə yazırıq
          }
          widget.close();
        }}
      >
        {({ open }) => (
          <div
            onClick={() => open()}
            className="cursor-pointer px-6 py-2 rounded bg-green-600 text-white hover:bg-green-700"
          >
            Şəkil yüklə
          </div>
        )}
      </CldUploadWidget>

      {imageUrl && (
        <div className="mt-4">
          <p className="mb-2 font-medium">Yüklənmiş şəkil:</p>
          <img
            src={imageUrl}
            alt="Uploaded"
            className="max-w-xs rounded shadow"
          />
        </div>
      )}
    </div>
  );
}
