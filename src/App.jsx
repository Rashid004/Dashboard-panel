/** @format */

import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 1.6rem;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The wild Oasis</Heading>

            <div>
              <Heading as="h2">Check IN and OUT</Heading>

              <Button onClick={() => alert("Check In")}>Check In</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("Check Out")}
              >
                Check out
              </Button>
            </div>
          </Row>
          <Row>
            <form>
              <Heading as="h3">Form</Heading>
              <Input type="number" placeholder="Number of Guest" />
              <Input type="number" placeholder="Number of Guest" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
