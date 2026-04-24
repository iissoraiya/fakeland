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

  function deleteCookie(name) {
    document.cookie = name + "=; max-age=0; path=/";
  }

  function handleOrder() {
    document.getElementById("errorMsg").innerHTML = "";

    const name = document.getElementById("name").value;
    const size = document.getElementById("size").value;
    const quantity = document.getElementById("quantity").value;
    const pickup = document.getElementById("pickup").value;
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
        size = size[i].value;
        localStorage.setItem("size", size);
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
        pickup = pickup[i].value;
        localStorage.setItem("pickup", pickup);
        break;
      }
    }

    if (pickup === "Delivery" && address === "") {
      document.getElementById("errorMsg").innerHTML = "Please enter your address for delivery.";
      return false;
    } else if (pickup === "Delivery") {
      localStorage.setItem("address", address);
    } else {
      localStorage.removeItem("address");
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

    // TODO: Retrieve stored data

    // TODO: If no data: Display error message "No previous order data"

    // TODO: Otherwise: Populate fields

  }

