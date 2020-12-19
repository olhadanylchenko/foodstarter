import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Albums from "../Albums";
configure({ adapter: new Adapter() });

const match = {
  params: {
    id: "1",
  },
};

it("renders without crashing", () => {
  shallow(<Albums match={match} />);
});

it("<Albums /> has <ul>", () => {
  const wrapper = shallow(<Albums match={match} />);
  expect(wrapper.find("ul")).toHaveLength(1);
});
