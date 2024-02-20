import { app} from "./firebase";
import { getDownloadURL, getStorage, ref , uploadBytesResumable } from "firebase/storage";

export const API_URI = "http://localhost:8800";
export const uploadFile = (setFileURl, file) => {
    const storage = getStorage(app);

    const name = new Date().getTime() + file.name
    const storageRef = ref(storage, name)


    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress =
                (snapshot.bytesTransferredyteTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");

            switch (snapshot.state) {
                case "paused":
                    console.log("Upload is paused");
                    break;
                case "running":
                    console.log("Upload is running");
                    break;
            }
        },
        (error) => {
            console.log(error);
         },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURl) => {
                console.log("Successfully uploaded");
                setFileURl(downloadURl);
            });
        }
     );
};
