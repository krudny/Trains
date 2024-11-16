import Image from "next/image";
import SearchForm from "@/app/Components/SearchForm";

export default async function Home() {
    return (
    <div className="w-screen h-screen relative">
      <Image
        src="/images/background.jpg"
        alt="Background Image"
        layout="fill"
        priority
      />
      <div className="flex items-center justify-center flex-col h-full absolute inset-0 bg-black bg-opacity-45">
        <div className="">
          <h1 className="text-white text-7xl">Here your journey starts!</h1>
        </div>
        <div>
          <h2 className="text-white text-2xl m-10">Search your destination</h2>
        </div>
        <SearchForm />
      </div>
    </div>
  );
}
