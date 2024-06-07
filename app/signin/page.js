"use client";

import { addDoc, collection } from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import Image from "next/image";
import Link from "next/link";
import { useState, useNavigate } from "react";
import icon from "../../public//iconmoneymap.png";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebaseConfig";
import { redirect } from "next/navigation";
export default function SignIn() {
  const [username, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState("");

  const { signup, currentUser } = useAuth();
  

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  async function handleSignUP(e) {
    e.preventDefault();
    //
    try {
      const storage = getStorage();
      const storageRef = ref(storage, `uploads/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = snapshot.bytesTransferred / snapshot.totalBytes;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("upload failed", error);
        },
        async () => {
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
          setDownloadUrl(downloadUrl);
          //
          try {
            await addDoc(collection(db, "account"), {
              username,
              email,
              downloadUrl,
              number,
              userId: currentUser.uid,
              createdAt: new Date(),
            });
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
        }
      );

      setError("");
      setLoading(true);
      await signup(email, password, username);
      alert("Done");
      redirect('/')
    } catch (err) {
      console.log(err);
      setError("Failed to create an account!");
    }
    setLoading(false);
  }

  return (
    <div className="mb-[120px] mt-[80px] md:mt-[100px] w-full md:w-[400px] lg:w-[400px] flex items-center justify-center h-[80vh]">
      <div className="p-3 border-2 rounded shadow-md bg-zinc-50">
        <div>
          <Image
            src={icon}
            alt=""
            className="h-[60px] w-[60px] mb-3"
            quality={50}
          ></Image>
          <h1 className="mt-3 font-bold text-[22px] text-gray-900">
            Sign in to your account
          </h1>
          <p className="my-3 text-gray-700">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-indigo-500 font-semibold underline"
            >
              Log In
            </Link>
          </p>
        </div>
        <div>
          <input
            type="text"
            id="useName"
            placeholder="Enter Your Name"
            onChange={(e) => setUserName(e.target.value)}
            className="border-2 rounded bg-zinc-200 border-zinc-300 w-[280px] text-gray-700 focus:outline-none py-1 focus:border-zinc-100 peer transition-all p-1 mb-5"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Number"
            onChange={(e) => setNumber(e.target.value)}
            className="border-2 rounded bg-zinc-200 border-zinc-300 w-[280px] text-gray-700 focus:outline-none py-1 focus:border-zinc-100 peer transition-all p-1 mb-5"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 rounded bg-zinc-200 border-zinc-300 w-[280px] text-gray-700 focus:outline-none py-1 focus:border-zinc-100 peer transition-all p-1 mb-5"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 rounded bg-zinc-200 border-zinc-300 w-[280px] text-gray-700 focus:outline-none py-1 focus:border-zinc-100 peer transition-all p-1 mb-5"
          />
        </div>
        <div>
          <input
            type="file"
            onChange={handleFileChange}
            className="border-2 rounded bg-zinc-200 border-zinc-300 w-[280px] text-gray-700 focus:outline-none py-1 focus:border-zinc-100 peer transition-all p-1"
          />
        </div>
        <div>
          <button
            onClick={handleSignUP}
            className="border-2 rounded bg-gray-900 border-zinc-300 w-[280px] text-lime-300  py-1  peer transition-all p-1 font-semibold mt-10"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </div>
        <div>
          {error && (
            <h1 className="w-[280px] p-3 bg-red-300 text-gray-800 mt-5 font-semibold">
              {error}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
