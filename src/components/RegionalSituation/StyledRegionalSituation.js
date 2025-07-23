import styled from "styled-components";

const StyledRegionalSituation = styled.div`
  /* Small Screen */
  .container {
    margin: 1rem;
    padding-left: 5rem;
    padding-right: 5rem;
    padding-bottom: 5rem;
    background-color: #f4f4f4;
  }

  .regionalSituation {
    margin: 5rem 0;
    text-align: center;
  }

  p {
    color: #118ab2;
  }

  .regionalSituation__title {
    margin-bottom: 1rem;
    font-size: 2.44rem;
    color: #06d6a0;
  }

  .regionalSituation__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .regionalSituation__container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .regionalSituation {
      flex-basis: 50%;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
      margin: 3rem auto;
    }

    .regionalSituation {
      flex-basis: 25%;
      padding: 1rem;
    }
  }
`;

export default StyledRegionalSituation;
