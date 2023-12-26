import JustValidate from "just-validate";
const inventoryEl = document.getElementById("stockInventory");
const validate = new JustValidate("#stockInventory");
const stockTable = document.getElementById("stockTable")
const stockContainer = document.getElementById("stockContainer");

const storageKey = "stockData";

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
  const formValues = Object.fromEntries(formData.entries())

  const stockDatas = []; 
  const getFromLocal = localStorage.getItem(storageKey) // Object Object (parse)
  const parseFromLocal = JSON.parse(getFromLocal) // 1 Array Get Item Yes

  if(parseFromLocal) {
    parseFromLocal.push(formValues);
    localStorage.setItem(storageKey, JSON.stringify(parseFromLocal));
  } else {
    stockDatas.push(formValues);
    localStorage.setItem(storageKey, JSON.stringify(stockDatas))
  }
});

// We need to add values to the table data. 

function getAllFormData() {
  const allStorageKey = localStorage.getItem(storageKey);
  const storageKeyArray = JSON.parse(allStorageKey)

  if(storageKeyArray) {
    stockContainer.classList.remove("hidden")

  } else {
    console.log("Not Available Stocks on The Database")
  }


}

getAllFormData()

















