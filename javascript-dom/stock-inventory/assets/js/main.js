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
  const formFinalData = Object.fromEntries(formData.entries());
  // console.log(formFinalData);

  // I need to check whether any localStorage has values.
  /* 
    Overwritten the previous value with the new Input values but when we get from
    getDataFromLocal then it's show the previous value not the current value;
  */

  const newStockDetails = [];

  const getDataFromLocal = localStorage.getItem("stocksData");
  const finalGetData = JSON.parse(getDataFromLocal);

  if (finalGetData) {
    finalGetData.push(formFinalData);
    localStorage.setItem("stocksData", JSON.stringify(finalGetData));
  } else {
    newStockDetails.push(formFinalData);
    localStorage.setItem("stocksData", JSON.stringify(newStockDetails));
  }
});
