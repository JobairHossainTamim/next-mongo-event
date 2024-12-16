import firebaseApp from "@/config/firebaseConfig";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const uploadToFirebaseUrl = async (files: any[]) => {
  try {
    const storage = getStorage(firebaseApp);
    const urls = [];

    for (const file of files) {
      const storageRef = ref(storage, `images/${file.name}`);
      const snapShot = await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(snapShot.ref);
      urls.push(downloadUrl);
    }
    return urls;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
