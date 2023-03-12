const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if ((email.value && password.value) === "") {
    const message = "Fill in all fields correctly!";
    alert(message);
  } else {
    console.log({ elements: { email: email.value, password: password.value } });
    formLogin.reset();
  }
}
