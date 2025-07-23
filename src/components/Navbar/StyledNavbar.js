import styled from "styled-components";

const StyledNavbar = styled.div`
  /* Small Screen */
  .container {
    background-color: #06d6a0;
    padding: 1rem;
    color: #fff;
  }

  .navbar {
    display: flex;
    flex-direction: column;
  }

  .covidTitle {
    font-size: 2.4rem;
    margin-left: 3rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  .navbar__list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-right: 3rem;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .navbar {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .navbar__brand {
      margin-bottom: 0;
    }

    .navbar__list {
      flex-direction: row;
    }

    .navbar__item {
      margin: 0 1rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
  }
`;

export default StyledNavbar;