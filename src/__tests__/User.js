import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import User from "../User";
configure({ adapter: new Adapter() });

const user = {
  id: "1",
  address: {
    zipcode: "456789",
    city: "Harz",
    street: "Harzer Str",
    suite: "33",
  },
};

it("renders without crashing", () => {
  shallow(<User user={user} />);
});

it("<User /> has <li>", () => {
  const wrapper = shallow(<User user={user} />);
  expect(wrapper.find("li")).toHaveLength(1);
});
