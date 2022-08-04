import React from "react";
// import data
import { housesData } from "../data";
// import Link
import { Link, useParams } from "react-router-dom";
// import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const PropertyDetails = () => {
  const { id } = useParams();

  // get tha house based on tha id
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  const {
    name,
    address,
    type,
    country,
    price,
    imageLg,
    bedrooms,
    description,
    bathrooms,
    surface,
    agent,
  } = house;

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{name} </h2>
            <h3 className="text-lg mb-4">{address} </h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full">
              {type}{" "}
            </div>
            <div className="bg-violet-500 text-white px-3 rounded-full">
              {country}
            </div>
          </div>
          <div className="text-3xl font-semibold text-violet-600">${price}</div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={imageLg} alt="" />
            </div>
            <div className="flex gap-x-6 text-violet-700 mb-6">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <div>{bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <div>{surface}</div>
              </div>
            </div>
            <div>{description}</div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-20 h-20 rounded-full ring-offset-2 ring-2">
                <img src={agent.image} alt="" />
              </div>
              <div>
                <div className="font-bold text-lg">{agent.name}</div>
                <Link to="" className="text-violet-700 text-sm">
                  View Listings
                </Link>
              </div>
            </div>
            {/* form */}
            <form className="flex flex-col gap-y-4">
              <input
                className="border border-gray-300 outline-none focus:border-violet-700 rounded w-full px-4 h-14 text-sm"
                type="text"
                name="name"
                id="name"
                placeholder="Name*"
              />
              <input
                className="border border-gray-300 outline-none focus:border-violet-700 rounded w-full px-4 h-14 text-sm"
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
              />
              <input
                className="border border-gray-300 outline-none focus:border-violet-700 rounded w-full px-4 h-14 text-sm"
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone*"
              />
              <textarea
                className="border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400"
                name="message"
                id="message"
                cols=""
                rows=""
                placeholder="message"
                defaultValue="Hello, I am Interested in [MOdern apartment]"
              ></textarea>
              <div className="flex gap-x-2">
                <button className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition">
                  Send message
                </button>
                <button className="border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition">
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
