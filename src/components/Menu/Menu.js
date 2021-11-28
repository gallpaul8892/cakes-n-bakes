import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const MenuWrapper = styled.div`
  font-size: x-large;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 5px 0px;
  background-color: ${(props) => props.theme.priceColor};

  a {
    font-weight: lighter;
    color: ${(props) => props.theme.textColor};
    text-decoration: none;
  }
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <Grid
        container
        direction="row"
        spacing={2}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Link to="/">Home</Link>
        </Grid>
        <Grid item>
          <Link to="/about">About</Link>
        </Grid>
        <Grid item>
          <Link to="/services">Services</Link>
        </Grid>
      </Grid>
    </MenuWrapper>
  );
};

export default Menu;
