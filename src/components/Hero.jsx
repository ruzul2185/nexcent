import { ButtonDark } from "./ui/Button";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        {/* Text Section starts here */}
        <div className="hero-text">
          <h2 className="hero-title">
            Lessons and insights <span className="highlight">from 8 years</span>
          </h2>
          <p className="hero-subtext">
            Where to grow your business as a photographer: site or social media?
          </p>
          <ButtonDark style="custom-padding">Register</ButtonDark>
        </div>
        {/* Text Section ends here */}

        {/* Image section starts here */}
        <div>
          <img src="/hero-main.png" id="hero-image" />
        </div>
        {/* Image section ends here */}
      </div>
    </section>
  );
};

export default Hero;
