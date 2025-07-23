import RegionalSituationCard from "../RegionalSituationCard/RegionalSituationCard";
import StyledRegionalSituation from "./StyledRegionalSituation";

const RegionalSituation = (props) => {
  // destructuring props
  const { kasus } = props;

  return (
    <StyledRegionalSituation>
      <div className="container">
        <section className="regionalSituation">
          <h2 className="regionalSituation__title">Situation by Regions</h2>
          <p>Bacaan Pilihan Covid</p>
          <div className="regionalSituation__container">
            {kasus.map(function (kasus) {
              return <RegionalSituationCard kasus={kasus} />;
            })}
          </div>
        </section>
      </div>
    </StyledRegionalSituation>
  );
};

export default RegionalSituation;
