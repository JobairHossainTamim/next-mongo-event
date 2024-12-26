export const uploadToCloudinaryAPI = async (
  files: File[]
): Promise<string[]> => {
  try {
    const urls: string[] = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);

      // Call the API route
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${await response.text()}`);
      }

      const { url } = await response.json();
      urls.push(url);
    }

    return urls;
  } catch (error: any) {
    throw new Error(`Error uploading to Cloudinary: ${error.message}`);
  }
};
