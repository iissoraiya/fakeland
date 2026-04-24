function setCookie(name, value, maxAge) {
    document.cookie = name + "=" + value + "; max-age=" + maxAge + "; path=/";
  }

  function getCookie(name) {
    let cookies = document.cookie.split("; ");
    let cookieEq = name + "=";

    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i];

        if (c.charAt(0) == " ") {
            c = c.substring(1);
        }

        if (c.indexOf(cookieEq) == 0) {
            return c.substring(cookieEq.length);
        }}
    return null;
  }

  function handleOrder() {
    document.getElementById("errorMsg").innerHTML = "";

    const name = document.getElementById("name").value;
    const size = document.getElementById("size");
    const quantity = document.getElementById("quantity").value;
    const pickup = document.getElementById("pickup");
    const address = document.getElementById("address").value;
    const terms = document.getElementById("terms").checked;

    if (name === "") {
      document.getElementById("errorMsg").innerHTML = "Please enter your name.";
      return false;
    } else if (name.length < 2) {
      document.getElementById("errorMsg").innerHTML = "Name must be at least 2 characters.";
      return false;
    } else {
      setCookie("name", name, 86400);
    }
    
    for (let i = 0; i < size.length; i++) {
      if (size[i].selected) {
        let sizeSelected = size[i].value;
        if (sizeSelected === "HydraSafe: 500 mL") {
            let price = 300;
            localStorage.setItem("price", price.toString());
        } else if (sizeSelected === "HydraSafe: 750 mL") {
            let price = 450;
            localStorage.setItem("price", price.toString());
        } else if (sizeSelected === "HydraSafe: 1000 mL") {
            let price = 600;
            localStorage.setItem("price", price.toString());
        }
        localStorage.setItem("size", sizeSelected);
        break;
      }
    }

    if (quantity === "" || quantity <= 0) {
      document.getElementById("errorMsg").innerHTML = "Please enter a valid quantity.";
      return false;
    } else {
      localStorage.setItem("quantity", quantity.toString());
    }
    
    for (let i = 0; i < pickup.length; i++) {
      if (pickup[i].selected) {
        let pickupSelected = pickup[i].value;
        localStorage.setItem("pickup", pickupSelected);
        break;
      }
    }

    if (pickup.value === "Delivery" && address === "N/A") {
      document.getElementById("errorMsg").innerHTML = "Please enter your address for delivery.";
      return false;
    } else if (pickup.value === "Delivery") {
      localStorage.setItem("address", address);
    }
    if (terms === false) {
      document.getElementById("errorMsg").innerHTML = "You must accept the terms to proceed.";
      return false;
    }

    window.location.href = "summary.html";
    return false;

  }

  // LOAD PREVIOUS ORDER
  function loadPreviousOrder() {
    let pName = getCookie("name");
    let pSize = localStorage.getItem("size");
    let pQty = localStorage.getItem("quantity");
    let pQuantity = Number(pQty);
    let pPickup = localStorage.getItem("pickup");
    let pAddress = localStorage.getItem("address");

    if (pName === null && pSize === null && pQuantity === null && pPickup === null) {
      document.getElementById("errorMsg").innerHTML = "No previous order data found.";
      return;
    } else {
        document.getElementById("name").value = pName;
      document.getElementById("size").value = pSize;
      document.getElementById("quantity").value = pQuantity;
      document.getElementById("pickup").value = pPickup;
      document.getElementById("address").value = pAddress;
    }


    // TODO: Retrieve stored data

    // TODO: If no data: Display error message "No previous order data"

    // TODO: Otherwise: Populate fields

  }

