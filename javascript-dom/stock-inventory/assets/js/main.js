import JustValidate from "just-validate";

const inventoryEl = document.getElementById("stockInventory");

const validate = new JustValidate("#stockInventory");

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
  {
    errorLabelCssClass: "form-error",
    tooltip: {
      position: "top",
    },
  }
);

// validate.showSuccessLabels({ "#productId": "product ID looks good" });

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

// Todo
// * [ ] =>

validate.onSuccess((e) => {
  const formData = new FormData(inventoryEl);
  // we need these details as an object.
  const formValueObj = Object.fromEntries(formData.entries());
  // console.log(formValueObj); // We are getting Objects

  const newStockData = [];

  // if any item exists in the local Storage we need to get them.
  // if it's there then It should be in String Format, but we need to change that into an array.
  const checkSavedData = localStorage.getItem("Stock Data");
  const parsedSavedData = JSON.parse(checkSavedData);

  if (parsedSavedData) {
    parsedSavedData.push(formValueObj);
    localStorage.setItem("Stock Data", JSON.stringify(parsedSavedData));
  } else {
    newStockData.push(formValueObj);
    localStorage.setItem("Stock Data", JSON.stringify(newStockData));
  }
});
