import styled from "styled-components";

const StyledSituationCard = styled.div`
  .card {
    margin-bottom: 1rem;
    width: max-content;
    margin: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .kasus {
    margin: 2rem 0rem 3rem;
    padding: 1rem;
    background-color: #f4f4f4;
  }

  a {
    text-decoration: none;
  }

  .card__status {
    margin-bottom: 0.5rem;
    color: #073b4c;
  }

  .card__total {
    margin-top: 0.1rem;
    color: #06d6a0;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .card {
      flex-basis: 50%;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .card {
      flex-basis: 25%;
      padding: 1rem;
    }
  }
`;

export default StyledSituationCard;