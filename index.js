function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const repairNumber = document.getElementById("repair-number").value;
    const date = document.getElementById("date").value;
    const customer = document.getElementById("customer").value;
    const phone = document.getElementById("phone").value;
    const documentType = document.getElementById("document").value;
    const productName = document.getElementById("product-name").value;
    const productCode = document.getElementById("product-code").value;
    const serialNumber = document.getElementById("serial-number").value;
    const receiptNumber = document.getElementById("receipt-number").value;
    const receiptDate = document.getElementById("receipt-date").value;
    const receiptAmount = document.getElementById("receipt-amount").value;
    const claim = document.getElementById("claim").value;
    const productReview = document.getElementById("product-review").value;
  
    const url = "https://docs.google.com/spreadsheets/d/1bwEq1anHd3oCNzuge_TdW2HQhvVHCbua4xirsk0Z9Eg/edit#gid=0";
    const formId = "1bwEq1anHd3oCNzuge_TdW2HQhvVHCbua4xirsk0Z9Eg"; // Replace with your form ID
    const formData = new FormData();
    formData.append("entry.1234567890", name);
    formData.append("entry.0987654321", repairNumber);
    formData.append("entry.24682468", date);
    formData.append("entry.1357924680", customer);
    formData.append("entry.86420357", phone);
    formData.append("entry.31706423", documentType);
    formData.append("entry.47362179", productName);
    formData.append("entry.94687235", productCode);
    formData.append("entry.03682549", serialNumber);
    formData.append("entry.23578946", receiptNumber);
    formData.append("entry.84736298", receiptDate);
    formData.append("entry.13579024", receiptAmount);
    formData.append("entry.64287913", claim);
    formData.append("entry.18273645", productReview);
    fetch(`${url}?entry.${formId}`, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => alert("Заявка відправлена"))
      .catch((error) => alert(error));
  }
  