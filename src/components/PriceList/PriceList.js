import services from "../..//config/services.json";
import PriceCard from "../PriceCard/PriceCard";
import styled from "styled-components";

const PriceListWrapper = styled.div`
  padding: 50px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const PriceListContent = styled.div`
  border: 10px solid;
  padding: 0 30px;
`;

const Cards = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 200px;
  place-content: center;
  justify-items: center;
  h2 {
    text-decoration: underline;
  }

  @media (min-width: 400px) {
    grid-template-columns: 300px;
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 300px);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 300px);
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(4, 300px);
  }
`;

const PriceList = () => {
  return (
    <PriceListWrapper>
      <PriceListContent>
        <h2>Our Services</h2>
        <Cards>
          {services.map((service) => {
            return <>{service.title && <PriceCard service={service} />}</>;
          })}
        </Cards>
      </PriceListContent>
    </PriceListWrapper>
  );
};

export default PriceList;
