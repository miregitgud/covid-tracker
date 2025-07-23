import styled from "styled-components";

const StyledSituation = styled.div`
  /* Small Screen */
  .container {
    margin: 1rem;
    padding-left: 10rem;
    padding-right: 10rem;
    padding-bottom: 5rem;
    background-color: #f4f4f4;
  }

  .situation {
    margin: 5rem 0;
    text-align: center;
  }

  p {
    color: #118ab2;
  }

  .situation__title {
    margin-bottom: 1rem;
    font-size: 2.44rem;
    color: #06d6a0;
  }

  .situation__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .situation__container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .situation {
      flex-basis: 50%;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
      margin: 3rem auto;
    }

    .situation {
      flex-basis: 25%;
      padding: 1rem;
    }
  }
`;

export default StyledSituation;
