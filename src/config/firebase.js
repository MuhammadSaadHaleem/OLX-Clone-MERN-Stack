

import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadByte, uploadBytes } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCACk7l5M7ixoKj49yTxi3LgUJH5_g_Ta0",
    authDomain: "test-f994e.firebaseapp.com",
    projectId: "test-f994e",
    storageBucket: "test-f994e.appspot.com",
    messagingSenderId: "39216256426",
    appId: "1:39216256426:web:a2ebbf430b41d2f81507d3"
};

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

const uploadImage = async (file) => {
    const storageRef = ref(storage, "ads/" + file.name)
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}

export {uploadImage};