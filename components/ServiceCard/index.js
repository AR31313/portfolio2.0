import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
        } hover:scale-105 cursor-pointer`}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-40 text-xl">
        {description
          ? description
          : "Front-end Web Developer with background in Business Management, Environmental Science with extensive GIS Experience. Earned Certificate in Full Stack Web Development, GIS and Bachelor of Science Degree from University of Washington. Skills in HTML, CSS & JavaScript; proficient with Microsoft Office, Esri & ArcGIS programs as well as Quickbooks. Known as a highly motivated problem solver with a strong commitment to continually learning new things and developing myself professionally."}
      </p>
    </div>
  );
};

export default ServiceCard;
