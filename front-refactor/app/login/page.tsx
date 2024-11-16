import Image from "next/image";
import AuthComponent from "@/app/Components/AuthComponent";
import { loginInputProperties } from "@/app/Data/LoginInputProperties";

export default function Page() {
  return (
    <div className="w-screen h-screen relative">
      <Image
        src="/images/background.jpg"
        alt="Background Image"
        layout="fill"
        priority
      />

      <AuthComponent type={"login"} inputs={loginInputProperties} />
    </div>
  );
}
