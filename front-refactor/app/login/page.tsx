import Image from "next/image";
import AuthComponent from "@/app/Components/AuthComponent";
import { loginInputProperties } from "@/app/Data/LoginInputProperties";

export default function Page() {
  return (
      <div className="w-screen h-full">
          <Image
              src="/images/background.jpg"
              alt="Background Image"
              layout="fill"
              priority
          />
          <div className="flex-grow h-full flex justify-center items-center">
              <AuthComponent type={"login"} inputs={loginInputProperties}/>
          </div>
          </div>
          );
          }
