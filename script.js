function generateName() {
  const nameInput = document.getElementById("nameInput");
  const generatedName = document.getElementById("generatedName");

  const enteredName = nameInput.value.trim();

  if (enteredName) {
    generatedName.textContent = `Ara${enteredName}`;
  } else {
    generatedName.textContent = "Please enter a name!";
  }
}
