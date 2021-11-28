import Header from "../Header";
import About from "../About";
import PriceList from "../PriceList";
import Image1 from "../../images/landing-image-1.jpg";
import Image2 from "../../images/landing-image-2.jpg";
import styled, { ThemeProvider } from "styled-components";
import AppTheme from "../../config/AppTheme";

const AppWrapper = styled.div`
  display: grid;
  grid-column: auto;
  text-align: center;
  color: ${(props) => props.theme.textColor};
  justify-content: center;
  margin: auto;
  font-size: 1.2rem;

  img {
    max-width: 100%;
  }

  .max-height {
    height: 450px;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 400px) {
    .max-height {
      height: 250px;
      width: 100%;
      object-fit: cover;
    }
  }
`;

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <AppWrapper>
        <Header />
        <img className="max-height" src={Image1} alt="laptop" />
        <About />
        <img className="max-height" src={Image2} alt="laptop" />
        <PriceList />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
