const userName = document.getElementById("user-name");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

if (btn) {
  btn.addEventListener("click", check);
}

let logInMode = false;

function check() {
  let loginSuccessful = false;
  for (let i = 0; i < usersInformation.length; i++) {
    if (
      usersInformation[i].createName === userName.value &&
      usersInformation[i].createPassword === password.value
    ) {
      loginSuccessful = true;
      window.open("https://usuauehd.github.io/product/", "_self");
      clearInput();
      break;
    }
  }

  if (!loginSuccessful) {
    alert("login failed");
  }

  clearInput();
}

function clearInput() {
  userName.value = "";
  password.value = "";
}

const createUserName = document.getElementById("create-name");
const createPassword = document.getElementById("create-password");
const phoneNumber = document.getElementById("phone-number");
const signBtn = document.getElementById("sign-up");

if (signBtn) {
  signBtn.addEventListener("click", createAccount);
}

if (localStorage.dataSignUp != null) {
  usersInformation = JSON.parse(localStorage.dataSignUp);
} else {
  usersInformation = [];
}

function createAccount() {
  let dataUsers = {
    createName: createUserName.value,
    createPassword: createPassword.value,
    createPhoneNumber: phoneNumber.value,
  };
  usersInformation.push(dataUsers);
  localStorage.setItem("dataSignUp", JSON.stringify(usersInformation));
  window.open("https://usuauehd.github.io/product/", "_self");
}

const phoneForget = document.getElementById("forget-phone");
const forgetBtn = document.getElementById("btn-forget");
const resultPassword = document.getElementById("result-pass");

let forgetMode = false;
if (forgetBtn) {
  forgetBtn.addEventListener("click", () => {
    for (let i = 0; i < usersInformation.length; i++) {
      if (+usersInformation[i].createPhoneNumber === +phoneForget.value) {
        resultPassword.innerHTML = `Your password is ${usersInformation[i].createPassword}`;
        break;
      } else {
        resultPassword.innerHTML = "Password is incorrect";
      }
    }
  });
}

const switchBtn = document.getElementById("change-btn");
let darkMode = localStorage.getItem("darkmode");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkmode", null);
};

if (darkMode === "active") {
  enableDarkMode();
} else {
  disableDarkMode();
}

switchBtn.addEventListener("click", () => {
  switchBtn.classList.toggle("active");
  darkMode = localStorage.getItem("darkmode");
  darkMode !== "active" ? enableDarkMode() : disableDarkMode();
});
