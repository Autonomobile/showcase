import Image from "next/image";
import loader from "../utils/loader";
import { useEffect } from "react";

export const Car = () => {
  useEffect(() => {
    const car = document.querySelector("#car-image");
    car.addEventListener("click", () => {
      console.log("click");
      const audio = new Audio("/audio.mp3");
      audio.play();
    });
  }, []);

  return (
    <div className="flex w-screen sm:h-screen bg-white">
      <div className="mt-12 mx-auto">
        <h1 className="h text-center w-screen mb-10">The Car</h1>

        <div className="w-screen mb-12">
          <div className="bg-black ch border-2 border-black rounded-lg overflow-hidden">
            <Image
              id="car-image"
              src="/images/autopylot.jpg"
              alt="autopylot"
              loader={loader}
              width={1200}
              height={800}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
