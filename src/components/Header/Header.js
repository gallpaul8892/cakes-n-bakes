import { telephoneNumber, emailAddress } from "../../config/appData";
import Logo from "../../images/logo_transparent.png";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  font-weight: lighter;
  width: 100%;
  height: 210px;
  background: ${(props) => props.theme.backgroundColor};

  img {
    margin: 10px 0;
    height: 120px;
    object-fit: cover;
    width: 400px;
    position: relative;
    top: 10px;
  }
`;

const ContactSection = styled.div`
  background-color: ${(props) => props.theme.textColor};
  padding: 20px;
  padding-bottom: 20px;

  a {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.textColortextContrastColor};
    display: inline;
    margin-top: 5px;
    font-weight: lighter;
    font-size: 1.7rem;
  }

  @media (min-width: 480px) {
    .email {
      float: inline-start;
      margin-right: 20px;
    }

    .tel {
      float: inline-end;
      margin-left: 20px;
    }
  }

  @media (max-width: 480px) {
    a {
      display: block;
    }

    .email {
      margin-bottom: 20px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={Logo} alt="cakes'n'bakes"></img>
      <ContactSection>
        <a href={`mailto:${emailAddress}`} className="email">
          {emailAddress}
        </a>
        <a href={`tel:${telephoneNumber}`} className="tel">
          Tel: {telephoneNumber}
        </a>
      </ContactSection>
    </HeaderWrapper>
  );
};

export default Header;
