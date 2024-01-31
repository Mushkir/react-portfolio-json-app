import React from "react";
import portfolio from "../data/portfolio.json";
import { Link } from "react-router-dom";

const FullPorfolio = () => {
  const {
    name,
    firstName,
    lastName,
    age,
    dob,
    contactNo,
    address,
    city,
    country,
    maritalStatus,
    idCardNo,
    gender,
    education,
    email,
    workPlace,
    position,
    hobbies,
    facebook,
    instagram,
    linkedIn,
    github,
  } = portfolio;

  console.log(education);
  return (
    <div className="pt-[200px] bg-primarySecondVariant pb-20 px-10 font-Sen">
      <div className="bg-secondary max-w-xl rounded-md mx-auto p-10">
        <div className="rounded-full w-[200px] h-[200px] mx-auto">
          <img
            src="./src/assets/img/mushkir.JPG"
            className="w-[200px] h-[200px] rounded-full object-cover"
            alt="Mushkir Image"
          />
        </div>

        <div className="mt-3 text-center bg-[#765932] text-[#fbefe0] rounded-md p-3">
          {/* Intern Full Stack Eng */}
          <p>{position}, </p>

          {/* CyberDude Networks */}
          <div className="mt-1 items-center">
            <div className="flex justify-center gap-2">
              <div className="text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17 9h2V7h-2zm0 4h2v-2h-2zm0 4h2v-2h-2zm4 4h-3q-.425 0-.712-.288T17 20q0-.425.288-.712T18 19h3V5h-9v1.4l-2-1.45q0-.8.575-1.375T11.95 3H21q.825 0 1.413.588T23 5v14q0 .825-.587 1.413T21 21M3 21q-.825 0-1.412-.587T1 19v-6.975q0-.5.225-.925t.625-.7l5-3.575Q7.375 6.45 8 6.45t1.15.375l5 3.575q.4.275.625.7t.225.925V19q0 .825-.587 1.413T13 21h-3q-.425 0-.712-.288T9 20v-4H7v4q0 .425-.288.713T6 21zm0-9v7h2v-4q0-.425.288-.712T6 14h4q.425 0 .713.288T11 15v4h2v-7L8 8.45zm8 7v-5H5v5v-5h6z"
                  ></path>
                </svg>
              </div>
              <Link
                to="https://www.cyberdudenetworks.com/"
                className="hover:font-semibold hover:transition500"
                target="_blank"
              >
                {workPlace}
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center mt-2 space-x-3">
            {/* Facebook */}
            <Link
              to={facebook}
              target="_blank"
              className="text-2xl hover:-translate-y-1 hover:transition 500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                ></path>
              </svg>
            </Link>

            {/* Instagram */}
            <Link
              to={instagram}
              target="_blank"
              className="text-2xl hover:-translate-y-1 hover:transition 500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m-48 152a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48m60-96a12 12 0 1 1 12-12a12 12 0 0 1-12 12m-28 48a32 32 0 1 1-32-32a32 32 0 0 1 32 32"
                ></path>
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link
              to={linkedIn}
              target="_blank"
              className="text-2xl hover:-translate-y-1 hover:transition 500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                ></path>
              </svg>
            </Link>

            {/* GitHub */}
            <Link
              to={github}
              target="_blank"
              className="text-2xl hover:-translate-y-1 hover:transition 500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        <div>
          {/* Name */}
          <div className="flex items-center space-x-5 mt-5 mb-3">
            <p className=" font-semibold">Name: </p>
            <p>{name}</p>
          </div>

          {/* First Name */}
          <div className="flex items-center space-x-5 mb-3">
            <p className=" font-semibold">First Name:</p>
            <p>{firstName}</p>
          </div>

          {/* Last Name */}
          <div className="flex items-center  space-x-5 mb-3">
            <p className=" font-semibold">Last Name:</p>
            <p>{lastName}</p>
          </div>

          {/* Age */}
          <div className="flex items-center space-x-5 mb-3">
            <p className=" font-semibold">Age: </p>
            <p>{age}</p>
          </div>

          {/* DOB */}
          <div className="flex items-center space-x-5 mb-3">
            <p className=" font-semibold">Date of Birth: </p>
            <p>{dob}</p>
          </div>

          {/* Contact Number */}
          <div className="flex items-center space-x-5 mb-3">
            <p className=" font-semibold">Contact No: </p>
            <a href={`tel:${contactNo}`}>{contactNo}</a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-5 mb-3">
            <p className=" font-semibold">Email: </p>
            <a href={`mailto:${email}`}>{email}</a>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-5 mb-3">
            <p className=" font-semibold">Address</p>
            <p>{address}.</p>
          </div>

          {/* City */}
          <div className="flex items-center space-x-5 mb-3">
            <p className=" font-semibold">City: </p>
            <p>{city}</p>
          </div>

          {/* Country */}
          <div className="flex items-center space-x-5 mb-3">
            <p className=" font-semibold">Country: </p>
            <p>{country}</p>
          </div>

          {/* Country */}
          <div className="flex items-center space-x-5 mb-3">
            <p className=" font-semibold">Marital Status: </p>
            <p>{maritalStatus == false ? "Unmarried" : "Married"}</p>
          </div>

          {/* Country */}
          <div className="flex items-center space-x-5 mb-3">
            <p className=" font-semibold">ID Card No: </p>
            <p>{idCardNo}</p>
          </div>

          {/* Gender */}
          <div className="flex items-center space-x-5 mb-3">
            <p className=" font-semibold">Gender: </p>
            <p>{gender == "M" ? "Male" : "Female"}</p>
          </div>

          {/* Education */}
          <div className="flex items-start space-x-5 mb-3">
            <p className=" font-semibold">Educational Qualification: </p>
            <p>{`${education[0]} & ${education[1]}`}.</p>
          </div>

          <div className="flex items-start space-x-5 mb-3">
            <p className=" font-semibold">Hobbies: </p>
            <p>{`${hobbies[0]} & ${hobbies[1]}`}.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPorfolio;
