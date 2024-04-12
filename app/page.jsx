import Image from "next/image";
import home from "@/public/img/home2.jpg";

export default function Home() {
  return (
    <div className="container flex flex-col md:flex-row gap-5 h-[calc(100vh-4rem)]">
      <div className="basis-full flex flex-col justify-center md:basis-2/3">
        <p className="special-word text-xs">Welcome to Our Blog!</p>
        <h1 className="pb-5">
        Explore Worlds <span className="special-word">Through </span>
          <br /> Words
        </h1>

        <p>
          Welcome to our blog! Dive into a world where words come alive, stories abound, and ideas flourish. Join us on this journey of exploration and discovery. Let's embark on an adventure together through the captivating realm of literature and beyond. Welcome aboard!
        </p>
      </div>

      <div className="hidden md:block basis-1/3 mt-[100px] mr-[-150px] ">
        <Image
          src={home}
          alt="coffee"
          sizes="100vw"
          className="w-full h-auto rounded-xl mt-[10px] mr-[-100px] "
        />
      </div>
    </div>
  );
}
