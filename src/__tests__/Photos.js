import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Photos from "../Photos";
configure({ adapter: new Adapter() });

const match = {
  params: {
    id: "1",
  },
};

it("renders without crashing", () => {
  shallow(<Photos match={match} />);
});

it("<Photos /> has <ul>", () => {
  const wrapper = shallow(<Photos match={match} />);
  expect(wrapper.find("ul")).toHaveLength(1);
});
