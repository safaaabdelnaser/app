import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  const [contact, setContact] = useState([
    { icon: "icon-phone.svg", text: "01150701760" },
    { icon: "icon-email.svg", text: "example@gmail.com" },
  ]);
  const [links, setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Privacy",
    "Blog",
  ]);
  const [socialIcons, setSocialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);
  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white mt-12 text-lg">
      <div className="container text-white">
        <a href="/">
          <img
            src="/public/logo.svg"
            className="w-[175px] h-[66px] object-contain"
          />
        </a>
        <div className="mt-10 flex flex-wrap flex-col justify-between md:flex-row gap-10">
          <div className="flex items-start gap-4  w-[340px] max-w-full">
            <img
              src="/public/icon-location.svg"
              alt="location icon"
              className="w-[18px] h-[18px] object-contain mt-1"
            />
            <p className="font-normal text-lg tracking-[0.8px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
              nihil saepe odit voluptates sit eum blanditiis, omnis, at eaque
              ducimus corporis cum tempore aliquid quaerat tempora! Suscipit
              sequi repellendus laudantium.
            </p>
          </div>
          {/* contact us */}
          <div>
            {contact.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-10 mb-[15px] last-of-type:mb-0"
              >
                <img
                  src={`/public/${item.icon}`}
                  alt={item.text}
                  className="w-[18px] h-[10px] object-contain"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          {/* links of contact us */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-mainColor transition-colors duration-300 text-lg"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          {/* social media Icons */}
          <ul className="flex gap-10 w-full justify-center md:w-auto">
            {socialIcons.map((socialIcon) => (
              <li key={socialIcon}>
                <a href="/" className="group">
                  <div className="w-[40px] h-[40px] element-center border border-white rounded-full">
                    {socialIcon === "facebook" ? (
                      <FaFacebookF className="socialIconStyle" />
                    ) : socialIcon === "twitter" ? (
                      <FaTwitter className="socialIconStyle" />
                    ) : (
                      <FaInstagram className="socialIconStyle" />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
