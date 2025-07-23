import styled from "styled-components";

const StyledRegionalSituationCard = styled.div`
  .card {
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 2rem;
    width: 20rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: inline-block; /* Add this line to make the cards inline */
  }

  img {
    width: 40px;
    float: right;
  }

  .confirmed {
    color: #06d6a0;
  }
  .recovered {
    color: #118AB2;
  }
  .death {
    color: #EF476F;
  }

  h3 {
    text-align: center;
    margin-bottom: 3rem;
  }

  h4 {
    margin-top: 0px;
    text-align: left;
  }

  h5 {
    text-align: left;
    margin-bottom: 0px;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    /* Add any specific styles for medium-sized screens if needed */
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .card {
      margin: 2rem 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
  }
`;

export default StyledRegionalSituationCard;
