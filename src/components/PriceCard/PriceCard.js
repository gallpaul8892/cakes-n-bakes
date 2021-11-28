import styled from "styled-components";

const PriceCardWrapper = styled.div`
  border: 4px solid white;
  margin-bottom: 30px;
  width: 300px;
  border: 2px solid ${(props) => props.theme.secondaryColor};

  .header {
    background-color: ${(props) => props.theme.textColor};
    padding: 1px;
    padding-bottom: 0;
  }
  h3 {
    color: ${(props) => props.theme.textColortextContrastColor};
    font-weight: lighter;
  }

  .content {
    padding: 5px;
    padding-bottom: 20px;
    height: 130px;
    overflow-y: auto;
  }

  img {
    width: 100%;
    background: black;
    height: 250px;
    object-fit: cover;
  }
`;

const Price = styled.div`
  color: ${(props) => props.theme.priceColor};
  vertical-align: bottom;
  margin-bottom: 10px;
`;

const PriceCard = (props) => {
  const { service } = props;
  return (
    <PriceCardWrapper>
      {" "}
      <div className="header">
        <h3>{service.title}</h3>
        <img
          src={`${process.env.PUBLIC_URL}/${service.image}`}
          alt={service.title}
        ></img>
      </div>
      <div className="content">
        <p dangerouslySetInnerHTML={{ __html: service.description }} />
      </div>
      <div>
        {" "}
        {service.price && (
          <Price>
            £{service.price}
            {service.hourly && <span>/hour</span>}
          </Price>
        )}
      </div>
    </PriceCardWrapper>
  );
};

export default PriceCard;
