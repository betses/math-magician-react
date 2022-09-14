import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../component/NavBar";

it("Render the page correctluy", () => {
  const tree = renderer
    .create(
      <Router>
        <NavBar />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
