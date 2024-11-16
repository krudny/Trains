import Image from "next/image";
import AuthComponent from "@/app/Components/AuthComponent";
import { registerInputProperties } from "@/app/Data/RegisterInputProperties";

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
                <AuthComponent type={"register"} inputs={registerInputProperties} />
            </div>

        </div>
    );
}