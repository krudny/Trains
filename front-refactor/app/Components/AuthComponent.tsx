import Link from "next/link";
import { FormInput } from "@/app/Types/FormInput";

interface AuthComponentProps {
  type: "register" | "login";
  inputs: FormInput[];
}

export default function AuthComponent({ type, inputs }: AuthComponentProps) {
  return (
    <div className="w-screen flex justify-center items-center select-none relative">
      <div className="w-3/12 flex flex-col justify-center items-center bg-zinc-950 bg-opacity-90 px-20 py-10">
        <div className="flex justify-center items-center my-10">
          <h1 className="font-bold text-6xl text-white">
            {type === "register" ? "Register" : "Log In"}
          </h1>
        </div>

        <div className="w-full flex justify-center items-center">
          <form
            className={`w-full ${type === "login" ? "flex flex-col" : "grid grid-cols-1 gap-4"}`}
          >
            {inputs.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-none m-2.5 border-b border-gray-50 group focus-within:bg-zinc-800 transition-colors duration-200 ease-linear"
              >
                <span className="material-icons text-6xl text-white p-1">
                  {item.icon}
                </span>
                <input
                  type={item.type}
                  id={item.id}
                  name={item.name}
                  placeholder={item.placeholder}
                  className="w-48 p-2 bg-transparent text-white focus:outline-none"
                  autoComplete="off"
                />
              </div>
            ))}
          </form>
        </div>

        <div className="mt-4">
          <Link href={type === "register" ? "/login" : "/register"}>
            <p className="font-roboto text-gray-200 text-lg">
              {type === "register"
                ? "Already have an account? Log in!"
                : "Don't have an account? Register!"}
            </p>
          </Link>
        </div>

        <div className="w-full h-16 flex justify-center items-center py-12 mb-4">
          <button className="py-3.5 px-8 rounded bg-lime-500 text-zinc-950 text-xl hover:bg-lime-600 transition-colors duration-200 ease-linear">
            {type === "register" ? "Create account!" : "Log in!"}
          </button>
        </div>
      </div>
    </div>
  );
}
