import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../App";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<App />);
});

it("<App /> has three <Route>", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("Route")).toHaveLength(3);
});
