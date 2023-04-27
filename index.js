let users = ["facufa12", "santi29", "christian", "diseño"];
let passwords = ["facu185", "apollo1", "profe", "web"];
const userInput = document.getElementById("user");
const passwordInput = document.getElementById("password");
const button = document.getElementById("buttonLogin");
button.addEventListener("click", login);
const container = document.getElementById("container");
function login() {
  let user = userInput.value;
  let password = passwordInput.value;
  let userindex = users.findIndex((e) => e === user);
  let passwordindex = passwords.findIndex((e) => e === password);
  if (!user || !password) {
    alert("Alguno de los campos estan vacios");
    throw new Error("Alguno de los campos estan vacios");
  }
  if ((userindex || passwordindex) === -1 || userindex !== passwordindex) {
    if (!document.getElementById("errorText")) {
      const textError = document.createElement("p");
      textError.innerText = "Alguno de los campos esta incorrecto";
      textError.id = "errorText";
      textError.classList = "error";
      container.append(textError);
      throw new Error("Alguno de los campos esta incorrecto");
    }
  }
  if (userindex === passwordindex) {
    alert("Logeado con exito");
  }
}
