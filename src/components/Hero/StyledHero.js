import styled from "styled-components";

const StyledHero = styled.div`
  /* Small Screen */
  .container {
    margin: 1rem;
  }

  .hero {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .hero__left {
    margin-bottom: 1rem;
  }

  .hero__right {
    margin: auto;
  }

  .hero__title {
    color: #06d6a0;
    margin-bottom: 1rem;
  }

  .hero__genre {
    color: #118ab2;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  .hero__description {
    color: #64748b;
    margin-bottom: 1rem;
  }

  .hero__button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #06d6a0;
    color: #fff;
  }

  .hero__button:hover {
    background-color: #073b4c;
  }

  .hero__image {
    max-width: 50%;
    height: auto;
    border-radius: 25px;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    /*
     * Nothing TODO Here.
     * We dont change style Hero. 
     */
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
      margin: 3rem auto;
    }

    .hero__image {
      max-width: 100%;
      height: auto;
      border-radius: 25px;
    }

    .hero {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .hero__left {
      flex-basis: 60%;
      text-align: left;
    }

    .hero__right {
      flex-basis: 40%;
      text-align: right;
    }
  }
`;

export default StyledHero;