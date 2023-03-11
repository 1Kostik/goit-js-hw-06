const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formData = {
    mail: event.currentTarget.email.value,
    password: event.currentTarget.password.value,
  };

  if ((formData.mail && formData.password) === "") {
    const message = "Fill in all fields correctly!";
    alert(message);
  } else {
    console.log(formData);
    formLogin.reset();
  }
}
