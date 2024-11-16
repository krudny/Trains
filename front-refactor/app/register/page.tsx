import Image from "next/image";
import AuthComponent from "@/app/Components/AuthComponent";
import { registerInputProperties } from "@/app/Data/RegisterInputProperties";

export default function Page() {
  return (
    <div className="w-screen h-screen relative">
      <Image
        src="/images/background.jpg"
        alt="Background Image"
        layout="fill"
        priority
      />

      <AuthComponent type={"register"} inputs={registerInputProperties} />
    </div>
  );
}
