"use client";

import React, { useState, useRef, useCallback } from "react";
import { FaUpload, FaTrash } from "react-icons/fa";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type UploadPhotosProps = {
  value: File[];
  onChange: (val: File[]) => void;
  existingPhotos?: string[];
  onRemoveExisting?: (index: number) => void;
};

const UploadPhotos = ({ value, onChange, existingPhotos = [], onRemoveExisting }: UploadPhotosProps) => {
  // Generate previews for all files in value
  const [previews, setPreviews] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Update previews whenever value changes
  React.useEffect(() => {
    const urls = value.map(file => URL.createObjectURL(file));
    setPreviews(urls);
    return () => {
      urls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [value]);


  // Handle file validation
  const validateFile = (file: File): { valid: boolean; error?: string } => {
    // Check file type
    const validTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      return {
        valid: false,
        error: "Invalid file type. Only JPG or PNG allowed.",
      };
    }

    // Check file size (5MB max)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      return { valid: false, error: "File too large. Maximum size is 5MB." };
    }

    return { valid: true };
  };

  // Check image dimensions
  const checkImageDimensions = (
    file: File,
    callback: (result: { valid: boolean; error?: string }) => void
  ) => {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(img.src);
      if (img.width < 700 || img.height < 420) {
        callback({
          valid: false,
          error: "Image too small. Minimum resolution is 700 x 420 px.",
        });
      } else if (img.width < img.height) {
        callback({
          valid: false,
          error: "Image must be in landscape orientation.",
        });
      } else {
        callback({ valid: true });
      }
    };
    img.onerror = () => {
      callback({
        valid: false,
        error: "Failed to load image. Please try again.",
      });
    };
  };

  // Handle file upload
  const handleFileUpload = useCallback(
    (files: FileList | null) => {
      if (!files) return;

      // Check if adding these files would exceed the 20 photo limit
      const totalPhotos = existingPhotos.length + value.length + files.length;
      if (totalPhotos > 20) {
        toast.error("You can upload a maximum of 20 photos.");
        return;
      }

      const filesArr = Array.from(files);
      const validFiles: File[] = [];
      let pending = filesArr.length;

      filesArr.forEach((file) => {
        const validation = validateFile(file);
        if (!validation.valid) {
          toast.error(validation.error);
          pending--;
          if (pending === 0 && validFiles.length > 0) {
            onChange([...value, ...validFiles]);
          }
          return;
        }
        checkImageDimensions(file, (result) => {
          if (!result.valid) {
            toast.error(result.error);
          } else {
            validFiles.push(file);
          }
          pending--;
          if (pending === 0 && validFiles.length > 0) {
            onChange([...value, ...validFiles]);
          }
        });
      });
    },
    [value, onChange, existingPhotos.length]
  );

  // Handle drag events
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) setIsDragging(true);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    handleFileUpload(files);
  };

  // Handle browse files click
  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  // Handle file input change
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileUpload(e.target.files);
    // Reset the input value so the same file can be uploaded again if removed
    e.target.value = "";
  };

  // Remove an image
  const removeImage = (index: number) => {
    const updated = value.filter((_, i) => i !== index);
    onChange(updated);
  };

  // Remove an existing image
  const handleRemoveExisting = (index: number) => {
    if (onRemoveExisting) {
      onRemoveExisting(index);
    }
  };

  const totalPhotos = existingPhotos.length + value.length;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <ToastContainer position="top-right" autoClose={5000} />
      <h2 className="text-xl font-semibold mb-4">Upload your photos</h2>

      <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-600 mb-5">
        <strong>Recommendation:</strong> Using your own photos helps customers
        imagine their experience and gives you a chance to show off your
        business.
      </div>

      <hr className="my-5" />

      <div>
        <label className="block text-lg font-medium text-gray-800 mb-2">
          Upload photos
        </label>

        <div
          className={cn(
            "flex flex-col items-center justify-center border-2 border-dashed rounded-lg px-8 py-14 bg-white transition-colors",
            isDragging ? "border-green-500 bg-green-50" : "border-gray-300",
            (value.length > 0 || existingPhotos.length > 0) && "mb-6"
          )}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <FaUpload className="text-green-600 h-12 w-12 mb-4" />

          <p className="text-sm text-gray-600">
            <span className="font-medium text-green-600">Drag and Drop</span>
            <span> or </span>
            <button
              type="button"
              onClick={handleBrowseClick}
              className="text-blue-600 hover:underline"
            >
              browse files
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".jpg,.jpeg,.png"
              className="hidden"
              onChange={handleFileInputChange}
            />
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {totalPhotos}/20 photos uploaded
          </p>
        </div>

        {existingPhotos.length > 0 && (
          <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-3">Existing Photos</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {existingPhotos.map((photo, index) => (
                <div key={`existing-${index}`} className="relative group">
                  <div className="relative aspect-video overflow-hidden rounded-md border border-gray-200">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${photo}`}
                      alt={`Existing image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {onRemoveExisting && (
                    <button
                      onClick={() => handleRemoveExisting(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Remove image"
                    >
                      <FaTrash className="h-3 w-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {value.length > 0 && (
          <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-3">New Photos</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {value.map((file, index) => (
                <div key={index} className="relative group">
                  <div className="relative aspect-video overflow-hidden rounded-md border border-gray-200">
                    <Image
                      src={previews[index] || "/placeholder.svg"}
                      alt={`Uploaded image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Remove image"
                  >
                    <FaTrash className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="my-5">
          <h3 className="font-medium text-gray-800 mb-2">Requirements</h3>
          <ul className="list-disc list-inside text-gray-800 mb-4">
            <li>Maximum 20 photos</li>
            <li>All photos must be in landscape (horizontal) orientation.</li>
            <li>Accepted file types: jpg or png</li>
            <li>Maximum file size: 5 MB</li>
            <li>Minimum resolution: 700 x 420 px</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UploadPhotos;
