import React from "react";
import { shallow } from "enzyme";
import ExpenseItem from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

test("should render single expense item", () => {
  const wrapper = shallow(<ExpenseItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
