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
  { errorLabelCssClass: "form-error", tooltip: {
    position: 'top',
  } }
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
  const formData = new FormData(inventoryEl)
  // we need these details as an object. 
  const formValueObj = Object.fromEntries(formData.entries());
  console.log(formValueObj);

  // Save it on the Local Storage. 
  const saveItems = localStorage.setItem("Stock Details", JSON.stringify(formValueObj))
  console.log(saveItems);
  
})
