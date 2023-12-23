import JustValidate from "just-validate";

const inventoryEl = document.getElementById("stockInventory");

const validate = new JustValidate("#stockInventory");
console.log(validate);

// ! Validate Validate Product ID Field
validate.addField(
  "#productId",
  [
    {
      rule: "required",
    },
    {
      rule: "number",
    },
    {
      rule: "minLength",
      value: 1,
    },
    {
      rule: "maxLength",
      value: 15,
    },
  ],
  { errorLabelCssClass: ["form-error"] }
);

// ! Validate Validate Product Name Field
validate.addField(
  "#productName",
  [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 2,
    },
    {
      rule: "maxLength",
      value: 20,
    },
  ],
  { errorLabelCssClass: ["form-error"] }
);

// ! Validate Quantities Field
validate.addField(
  "#quantities",
  [
    {
      rule: "required",
    },
    {
      rule: "number",
    },
    {
      rule: "minLength",
      value: 1,
    },
    {
      rule: "maxLength",
      value: 20,
    },
  ],
  { errorLabelCssClass: ["form-error"] }
);

// ! Validate Supervisor Field
validate.addField(
  "#supervisor",
  [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 2,
    },
    {
      rule: "maxLength",
      value: 20,
    },
  ],
  { errorLabelCssClass: ["form-error"] }
);

// ! Validate Email Field
// validate.addField(
//   "#dateEntry",
//   [
//     {
//       rule: "required",
//     },
//   ],
//   { errorLabelCssClass: ["form-error"] }
// );
