import image from "../../assets/covid.svg";
import StyledHero from "./StyledHero";

const Hero = () => {
  return (
    <StyledHero>
      <div className="container">
        <section className="hero">
          <div className="hero__left">
            <h2 className="hero__title">Covid ID</h2>
            <h3 className="hero__genre">
              Monitoring perkembangan Covid
            </h3>
            <p className="hero__description">
              Vosmet vetat res coelica iam premet letum vastum te vae gnari sunt
              suimet quis in oculis goya no suwe nazo nagasare sapientes feroces
              vetitum per currunt nefas
            </p>
            <button className="hero__button">Vaccine</button>
          </div>
          <div className="hero__right">
            <img className="hero__image" src={image} alt="placeholder" />
          </div>
        </section>
      </div>
    </StyledHero>
  );
};

export default Hero;
