import JustValidate from "just-validate";

const inventoryEl = document.getElementById("stockInventory");

const validate = new JustValidate("#stockInventory");
console.log(validate);

validate.addField(
  "#productId",
  [
    {
      rule: "required",
    },
  ],
  { errorLabelCssClass: ["form-error"] }
);

validate.addField(
  "#productName",
  [
    {
      rule: "required",
    },
  ],
  { errorLabelCssClass: ["form-error"] }
);

validate.addField(
  "#quantities",
  [
    {
      rule: "required",
    },
  ],
  { errorLabelCssClass: ["form-error"] }
);

validate.addField(
  "#supervisor",
  [
    {
      rule: "required",
    },
  ],
  { errorLabelCssClass: ["form-error"] }
);

validate.addField("#dateEntry", [
  {
    rule: "required",
  },
], { errorLabelCssClass: ["form-error"] });
