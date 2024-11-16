import Image from "next/image";

interface FormInput {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  icon: string;
}

const InputProperties: FormInput[] = [
  {
    type: "text",
    id: "Name",
    name: "Name",
    placeholder: "First and last name",
    icon: "person",
  },
  {
    type: "email",
    id: "email",
    name: "email",
    placeholder: "Email",
    icon: "mail",
  },
  {
    type: "password",
    id: "password",
    name: "password",
    placeholder: "Password",
    icon: "lock",
  },
  {
    type: "tel",
    id: "phone",
    name: "phone",
    placeholder: "Phone",
    icon: "phone",
  },
];

export default function Page() {
  return (
    <div className="w-screen h-screen relative">
      <Image
        src="/images/background.jpg"
        alt="Background Image"
        layout="fill"
        priority
      />

      <div className="bg-black bg-opacity-45 w-full h-full absolute flex justify-center items-center select-none">
        <div className="flex flex-col justify-center items-center bg-zinc-900 bg-opacity-80 px-20">
          <div className="py-8 flex justify-center items-center my-4">
            <h1 className="font-bold text-6xl text-white">Register</h1>
          </div>
          <div className="w-full  flex justify-center items-center">
            <form className="grid grid-cols-2 gap-4">
              {InputProperties.map((item) => (
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
          <div className="w-full h-16 flex justify-center items-center py-12 my-4">
            <button className="py-3.5 px-8 rounded bg-lime-500 text-zinc-950 text-xl hover:bg-lime-600 transition-colors duration-200 ease-linear">
              Create account!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
