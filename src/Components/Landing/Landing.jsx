import landingImage from "../../assets/Images/illustration-intro.png";
const Landing = () => {
  return (
    <section className="bg-[#1c2230]">
      <div className="container ">
        <div className="element-center flex-col pt-40">
          <div className="w-[750px] max-w-full">
            <img src={landingImage} alt="landing" className="w-full h-fit " />
          </div>
          <div className="text-white text-center">
            <h1 className="text-[30px] md:text-[40px] font-semibold md-[15px]">
              All your Files in one secure location
              <br />
              accessible anywhere
            </h1>
            <p className="text-lg font-normal px-[15px] md:w-[600px] max-w-full md:mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ullam
              velit unde labore magnam maxime rem delectus sint, sit deleniti
              atque impedit. Consectetur voluptates non enim asperiores repellat
              harum similique!
            </p>
          </div>
          <a className="btn w-[250px] h-[60px] rounded-[30px] element-center mt-[30px] text-white font-medium">
            Get Started
          </a>
        </div>
      </div>
      <div className="w-full h-[280px]">
        <img
          src="/public/bg-curvy-desktop.svg"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Landing;
