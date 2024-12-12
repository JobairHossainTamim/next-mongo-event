import React, { useRef } from "react";
import { EventFormStepProps } from "./General";
import { Button } from "@nextui-org/react";

const Media = ({
  newlySelectedImages = [],
  setNewlySelectedImages,
}: EventFormStepProps) => {
  const uploadFilesRef = useRef<HTMLInputElement>(null);

  const onFileImageSelect = (e: any) => {
    try {
      const files = e.target.files;
      // Ensure files exist and setNewlySelectedImages is defined
      if (!files || !setNewlySelectedImages) return;

      const filesArray = Array.from(files);

      // Update the selected images

      const existingNewSelectedImages = newlySelectedImages || [];

      const newImages = filesArray.map((file: any) => ({
        url: URL.createObjectURL(file),
        file,
      }));

      setNewlySelectedImages([...existingNewSelectedImages, ...newImages]);
    } catch (error: any) {
      console.error("Error while selecting files:", error);
    }
  };

  const removedImg = (index: number) => {
    if (!setNewlySelectedImages) return;
    const updatedImages = [...newlySelectedImages];
    updatedImages.splice(index, 1);
    setNewlySelectedImages(updatedImages);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full">
        <Button
          onClick={() => {
            uploadFilesRef.current?.click();
          }}
        >
          <input
            type="file"
            ref={uploadFilesRef}
            hidden
            onChange={onFileImageSelect}
          ></input>
          Upload New Images
        </Button>
      </div>

      {/* show image */}

      <div className="flex gap-5   ">
        {newlySelectedImages?.map((image: any, index: number) => (
          <div className="border flex flex-col gap-5 rounded pb-5" key={index}>
            <img
              src={image.url}
              alt="newly selected"
              className="w-40 h-40 object-cover"
            />
            <h1
              className="text-center cursor-pointer text-sm underline"
              onClick={() => {
                removedImg(index);
              }}
            >
              Remove
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
