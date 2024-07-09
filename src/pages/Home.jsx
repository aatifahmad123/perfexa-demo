import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Layout from "../components/Layout.jsx";
import TeamMembers from "./Members.jsx";

const images = [
  "https://www.chase-india.com/media/t2njmejj/new-banner-results-and-reliability.jpg?width=1920",
  "https://www.chase-india.com/media/4kra2wir/fostering-relationships-banner.jpg?width=1920",
  "https://www.chase-india.com/media/yndh54kv/inclusivity-growth-new-banner.jpg?width=1920",
];

const messages = [
  "Fostering Innovation",
  "Building creativity",
  "Rejuvenating Minds",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 8000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const previousImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <Layout>
      {/* image div */}
      <div className="w-full relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide-${index}`}
            className={`object-cover object-center ${
              index === currentImage ? "block" : "hidden"
            }`}
          />
        ))}
        <h2 className="text-2xl top-5 left-5 text-white md:text-8xl absolute md:top-20 md:left-20 animate-pulse">
          {messages[currentImage]}
        </h2>
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button onClick={previousImage}>
            <ChevronLeftIcon className="w-8 h-8 text-white" />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button onClick={nextImage}>
            <ChevronRightIcon className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>
      {/* some text */}
      <p className="p-4 m-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem
        fuga tenetur, quis saepe neque. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Aliquid nemo omnis ut suscipit obcaecati rerum
        repudiandae vel eius libero doloribus! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Delectus quasi quo quam reprehenderit
        temporibus veritatis alias consectetur quis non ipsum.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-8">
        {/* Text Column */}
        <div className="md:order-1">
          <div>
            <h2 className="text-3xl text-slate-700 text-center font-bold">
              Our Services
            </h2>
            <p className="p-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
              quos?
            </p>
            <ul className="pl-4">
              <li className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, rem.
              </li>
              <li className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, corporis.
              </li>
              <li className="p-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
                soluta.
              </li>
              <li className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                sapiente.
              </li>
              <li className="p-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
                dolores!
              </li>
            </ul>

            <p className="text-2xl text-orange-500 p-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
              quis.
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="md:order-2">
          <img
            src="https://www.chase-india.com/media/dppj2hga/home-page-picture-1.jpg?anchor=center&mode=crop&rnd=133627594502730000"
            alt={`perfexa-4`}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <div className="mx-8 my-4">
        <h2 className="text-3xl text-slate-700 p-4 text-center font-bold">Our Team</h2>
      </div>
      <TeamMembers></TeamMembers>

      <div className="mx-8 my-4 relative">
        <h2 className="text-center text-3xl text-slate-700 p-4 font-bold">
          Point of View
        </h2>
        <div className="w-full md:w-1/2 bg-slate-100 p-2 rounded-sm mx-auto md:mx-8">
          <ul>
            <li className="p-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
              voluptates.
            </li>
            <li className="p-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellat, illo!
            </li>
            <li className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              odio.
            </li>
            <li className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              atque!
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
