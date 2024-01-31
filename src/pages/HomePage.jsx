import React from "react";
import { Link } from "react-router-dom";
import portfolio from "../data/portfolio.json";

const HomePage = () => {
  const { name, email, address, contactNo, country } = portfolio;

  return (
    <div className="bg-primarySecondVariant min-h-screen font-Sen">
      <h3 className="text-2xl text-secondary font-semibold text-center pt-20">
        Welcome to My Portfolio
      </h3>

      <div className=" bg-secondary max-w-[600px] rounded-md flex p-10 gap-8 mx-auto mt-10 justify-center items-start">
        <div className=" w-[200px] h-[200px] rounded-full bg-primary">
          <img
            src="./src/assets/img/mushkir.JPG"
            className="w-[200px] h-[200px] p-1 object-cover rounded-full"
            alt="Mushkir Image"
          />
        </div>

        <div className=" space-y-3">
          <div className="flex items-center gap-3">
            <p className=" text-fontColor font-semibold">Name: </p>
            <p className=" text-fontSecondVariant">{name}</p>
          </div>

          <div className="flex items-center gap-3">
            <p className=" text-fontColor font-semibold">Email: </p>
            <a href={`mailto:${email}`} className=" text-fontSecondVariant">
              {email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <p className=" text-fontColor font-semibold">Contact No: </p>
            <a href="tel:+94777195282" className=" text-fontSecondVariant">
              {contactNo}
            </a>
          </div>

          <div className="flex items-start gap-3">
            <p className="text-fontColor font-semibold">Address: </p>
            <p className="text-fontSecondVariant">{address}.</p>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-fontColor font-semibold">Country: </p>
            <p className="text-fontSecondVariant">{country}</p>
          </div>

          <div className="pt-2">
            <Link
              to="/fullPortfolio"
              className="bg-primary text-secondary px-5 py-2 rounded-md hover:bg-[#1d3246] hover:transition 500 hover:font-semibold"
            >
              View more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
