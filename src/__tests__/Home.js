import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Home from "../Home";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<Home />);
});

it("<Home /> has <h1>", () => {
  const wrapper = shallow(<Home />);
  const header = <h1>Users</h1>;
  expect(wrapper.contains(header)).toEqual(true);
});
