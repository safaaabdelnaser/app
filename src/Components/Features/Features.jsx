import { useState } from "react";
import FeatureBox from "../FeatureBox/FeatureBox";
const Features = () => {
  const [items, setItem] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Access your files,anywhere",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corporis debitis inventore hic consequatur consectetur qui error optio, eius architecto in, ducimus alias veritatis repellendus unde sint cum at sapiente",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real-time collaboration",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corporis debitis inventore hic consequatur consectetur qui error optio, eius architecto in, ducimus alias veritatis repellendus unde sint cum at sapiente",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corporis debitis inventore hic consequatur consectetur qui error optio, eius architecto in, ducimus alias veritatis repellendus unde sint cum at sapiente",
    },
    {
      icon: "icon-security.svg",
      title: "Security files system",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corporis debitis inventore hic consequatur consectetur qui error optio, eius architecto in, ducimus alias veritatis repellendus unde sint cum at sapiente",
    },
  ]);
  return (
    <section className="pb-[170px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full ">
          {items.map((item) => (
            <FeatureBox
              key={item.title}
              title={item.title}
              icon={item.icon}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
