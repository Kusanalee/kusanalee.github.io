function generateEnteredName() {
    const nameInput = document.getElementById("nameInput");
    const generatedName = document.getElementById("generatedName");
  
    const enteredName = nameInput.value.trim();
  
    if (enteredName) {
      generatedName.textContent = `Ara${enteredName}`;
    } else {
      generatedName.textContent = "aranimba needs nara's name to make aranara name!!";
    }
  }
  
  function generateRandomName() {
    const syllables = ["ra", "ri", "ru", "re", "ro", "la", "li", "lu", "le", "lo", "na", "ni", "nu", "ne", "no", "ya", "yi", "yu", "ye", "yo"];
    const minSyllables = 2; // Adjust for desired name length
    const maxSyllables = 4; // Adjust for desired name length
  
    // Generate a random number of syllables for the name
    const numSyllables = Math.floor(Math.random() * (maxSyllables - minSyllables + 1)) + minSyllables;
  
    // Build the random name by concatenating random syllables
    let randomName = "Ara";
    for (let i = 0; i < numSyllables; i++) {
      const randomSyllableIndex = Math.floor(Math.random() * syllables.length);
      randomName += syllables[randomSyllableIndex];
    }
  
    generatedName.textContent = randomName;
  }
  
