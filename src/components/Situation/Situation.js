import SituationCard from "../SituationCard/SituationCard";
import StyledSituation from "./StyledSituation";

const Situation = (props) => {
  // destructuring props
  const { kasus } = props;

  return (
    <StyledSituation>
      <div className="container">
        <section className="situation">
          <h2 className="situation__title">Indonesia</h2>
          <p>Data Covid Berdasarkan Indonesia</p>
          <div className="situation__container">
            {kasus.map(function (kasus) {
              return <SituationCard kasus={kasus} />;
            })}
          </div>
        </section>
      </div>
    </StyledSituation>
  );
};

export default Situation;
