import JustValidate from "just-validate";

const inventoryEl = document.getElementById("stockInventory");

const validate = new JustValidate("#stockInventory");
console.log(validate);

validate.addField("#productId", [
  {
    rule: "required",
  },
]);

validate.addField("#productName", [
  {
    rule: "required",
  },
]);

validate.addField("#quantities", [
  {
    rule: "required",
  },
]);

validate.addField("#supervisor", [
  {
    rule: "required",
  },
]);

validate.addField("#dateEntry", [
  {
    rule: "required",
  },
]);
