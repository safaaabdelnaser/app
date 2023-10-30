import { useState } from "react";
import SingleTestimonial from "./singleTestimonial";

const Testimonials = () => {
  const [testData, setTestData] = useState([
    {
      id: 1,
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,eum fuga amet in maxime odit beatae error sequi aliasreprehenderit eveniet accusantium nisi esse autem numquam officiis reiciendis nemo sapiente.",
      photo: "profile-1.jpg",
      position: "software engineer",
      name: "khaled",
    },
    {
      id: 2,
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,eum fuga amet in maxime odit beatae error sequi aliasreprehenderit eveniet accusantium nisi esse autem numquam officiis reiciendis nemo sapiente.",
      photo: "profile-2.jpg",
      position: "front end developer",
      name: "seif",
    },
    {
      id: 3,
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,eum fuga amet in maxime odit beatae error sequi aliasreprehenderit eveniet accusantium nisi esse autem numquam officiis reiciendis nemo sapiente.",
      photo: "profile-3.jpg",
      position: ".Net developer",
      name: "aya",
    },
  ]);
  return (
    <>
      <section className="pb-[250px]">
        <div className="container relative">
          {/* icon of section */}
          <div className="absolute left-8 top-[-35px] ">
            <img src="/public/bg-quotes.png" alt="quots" />
          </div>
          {/* data of quotes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {testData.map((itemQuote) => (
              <SingleTestimonial
                key={itemQuote.id}
                name={itemQuote.name}
                desc={itemQuote.desc}
                position={itemQuote.position}
                photo={itemQuote.photo}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
