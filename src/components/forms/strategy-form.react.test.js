import React from "react";
import StrategyForm from "../forms/strategy-form";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import moment from "moment";

const fetchSimulation = jest.fn();

// Test that handleSubmit() calls parent's function.
// Mock testing function call with arguments
// https://stackoverflow.com/questions/43245040/using-jest-to-spy-on-method-call-in-componentdidmount
test("handleSubmit, sends correct data when state is set", () => {
  const wrapper = mount(<StrategyForm runSimulation={fetchSimulation} />);
  let data = {
    amount: "1000",
    currencyPair: "BTC-USDT",
    startDate: moment("2010-01-01"),
    endDate: moment("2010-12-31"),
    strategy: "MACD"
  };
  wrapper.setState(data);

  wrapper.instance().handleSubmit();

  expect(fetchSimulation).toHaveBeenCalledWith(data);
});

// Test that snapshot sets state attributes on clicking form submit button.
test("User fills in form and submit, setting state fields", () => {
  const wrapper = mount(<StrategyForm runSimulation={fetchSimulation} />);

  const amountInput = wrapper.find("#strategy-form-amount");
  amountInput.hostNodes().simulate("change", { target: { value: 3344 } });

  const dropdownCurrency = wrapper.find("#dropdown-currency");
  dropdownCurrency
    .find("ul .dropdown-menu li")
    .at(0)
    .find("a")
    .simulate("click");

  const dropdownStrategy = wrapper.find("#dropdown-strategy");
  dropdownStrategy
    .find("ul .dropdown-menu li")
    .at(0)
    .find("a")
    .simulate("click");

  const datepickerStartdate = wrapper.find("#datepicker-startdate");
  datepickerStartdate
    .hostNodes()
    .simulate("change", { target: { value: moment("2012-01-01") } });

  const datepickerEnddate = wrapper.find("#datepicker-enddate");
  datepickerEnddate
    .hostNodes()
    .simulate("change", { target: { value: moment("2013-01-01") } });

  let data_two = {
    amount: 3344,
    currencyPair: "BTC-USDT",
    strategy: "MACD",
    startDate: moment("2012-01-01"),
    endDate: moment("2013-01-01")
  };

  expect(wrapper.state()).toEqual(data_two);

  wrapper.instance().handleSubmit();

  expect(fetchSimulation).toHaveBeenCalledWith(data_two);
});

test("Input field value is changed", () => {
  const wrapper = mount(<StrategyForm runSimulation={fetchSimulation} />);
  const amountInput = wrapper.find("#strategy-form-amount");
  amountInput.hostNodes().simulate("change", { target: { value: 3344 } });
  expect(amountInput.hostNodes().html()).toEqual(
    '<input type="number" id="strategy-form-amount" class="strategy-form-amount form-control" value="3344" placeholder="3344">'
  );
});

//MOVE TEST TO DROPDOWN
test("Dropdown value is changed on select", () => {
  const wrapper = mount(<StrategyForm runSimulation={fetchSimulation} />);
  const dropdownStrategy = wrapper.find("#dropdown-strategy");
  dropdownStrategy
    .find("ul .dropdown-menu li")
    .at(0)
    .find("a")
    .simulate("click");

  expect(dropdownStrategy.hostNodes().html()).toEqual(
    '<button id="dropdown-strategy" role="button" aria-haspopup="true" aria-expanded="false" type="button" class="dropdown dropdown-toggle btn btn-default">MACD <span class="caret"></span></button>'
  );
});

test("Datepicker startdate value is changed on change", () => {
  const wrapper = mount(<StrategyForm runSimulation={fetchSimulation} />);
  const datepickerStartdate = wrapper.find("#datepicker-startdate");
  datepickerStartdate
    .hostNodes()
    .simulate("change", { target: { value: moment("2012-01-01") } });

  expect(datepickerStartdate.hostNodes().html()).toEqual(
    '<input type="text" id="datepicker-startdate" class="" value="2012/01/01 00:00">'
  );
});

test("Datepicker enddate value is changed on change", () => {
  const wrapper = mount(<StrategyForm runSimulation={fetchSimulation} />);
  const datepickerEnddate = wrapper.find("#datepicker-enddate");
  datepickerEnddate
    .hostNodes()
    .simulate("change", { target: { value: moment("2013-01-01") } });

  expect(datepickerEnddate.hostNodes().html()).toEqual(
    '<input type="text" id="datepicker-enddate" class="" value="2013/01/01 00:00">'
  );
});

// USE THIS: https://reactjs.org/docs/test-renderer.html
// https://github.com/jamiebuilds/react-test-renderer/blob/master/README.md

// DON'T NEED TO TEST
// that dropdown works as intended. Trust in react-bootstrap.

// test datepicker that it changes startDate and endDate.

// test input that it changes startDate and endDate.

/*
test("Dropdown selected values changes on select", () => {
  let dropdown = form.find("#dropdown-currencypair");
  let menuitem = dropdown.childAt(0);
  expect(menuitem.childAt(0).text()).toEqual("BTC-BNB");
  menuitem.simulate("click");
  //expect(form.props()).toEqual("blaasaa");
  //expect(form.find("#dropdown-currencypair").html()).toEqual("bla");
  let tree = component.toJSON();
  tree.props.handleChangeCurrencyPair("BNB-USDT");
  tree = component.toJSON();
  expect(tree).toEqual("va");
  //expect(menuitem.html()).toEqual(""<li role=\"presentation\" class=\"\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">BTC-BNB</a></li>"");
});

test("Link changes the class when hovered", () => {
  const component = renderer.create(<StrategyForm />);
  let tree = component.toJSON();
  //expect(tree).toMatchSnapshot();

  // manually trigger the callback
  //tree.props.handleChangeCurrencyPair("BNB-USDT");
  // re-rendering
  tree = component.toJSON();
  console.log(tree.children[0].children[0]);
  //expect(tree.children).toMatchSnapshot();
});


test("Dropdown defautl value", () => {
  let dropdown = form.find("#dropdown-currencypair");
  expect(dropdown.html()).toEqual(
    '<div class="dropdown btn-group"><button id="dropdown-currencypair" role="button" aria-haspopup="true" aria-expanded="false" type="button" class="dropdown dropdown-toggle btn btn-default">Currency Pair <span class="caret"></span></button><ul role="menu" class="dropdown-menu" aria-labelledby="dropdown-currencypair"><li role="presentation" class=""><a role="menuitem" tabindex="-1" href="#">BTC-BNB</a></li><li role="presentation" class=""><a role="menuitem" tabindex="-1" href="#">BTC-USDT</a></li></ul></div>'
  );
});
*/
/*
  const component = renderer.create(<StrategyForm />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
*/

// if IMPORT SYNTAX ERROR - solution : yarn add --dev babel-jest babel-core regenerator-runtime
//
// if TypeError: environment.teardown is not a function - solution: npm install jest-cli
//
//
