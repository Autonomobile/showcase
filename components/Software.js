import { ImageSlider } from "./ImageSlider";
import { sliderData } from "../data/data";
export const Software = () => {
  return (
    <div>
      <div className="flex w-screen sm:h-screen bg-gray-50">
        <div className="mt-12 mx-auto">
          <h1 className="h text-center w-screen mb-10">The Software</h1>
          <ImageSlider slides={sliderData} />
        </div>
      </div>
    </div>
  );
};
