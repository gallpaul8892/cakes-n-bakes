import { telephoneNumber, emailAddress } from "../../config/appData";

import styled from "styled-components";
const AboutWrapper = styled.div`
  padding: 50px;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const AboutContent = styled.div`
  place-self: center;

  border: 10px solid;
  a {
    color: ${(props) => props.theme.textColor};
    font-weight: bolder;
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <AboutContent>
        <h2>About Lauren</h2>
        <p>
          I started baking as a hobby through lockdown and quickly realised how
          much I enjoyed it. I bake each sweet treat with the same passion as
          the first cupcake I ever baked, but with the experience and knowledge
          of the 100+ orders I've fulfilled in the past 2 years.
        </p>
        <p>
          Birthdays, Christenings, Engagements, Weddings and Retirements are
          just some of the life events that I've baked for. If you need a cake
          get in touch.
        </p>
        <p>
          Additionally, if you just fancy indulging in a sweet treat then have a
          look at our selection below and get in touch by email or phone.
        </p>
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;
