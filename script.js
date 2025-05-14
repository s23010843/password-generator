class PasswordGenerator {
  constructor() {
    this.lengthInput = document.getElementById('length');
    this.uppercaseInput = document.getElementById('uppercase');
    this.numbersInput = document.getElementById('numbers');
    this.symbolsInput = document.getElementById('symbols');
    this.passwordOutput = document.getElementById('passwordOutput');
    this.generateBtn = document.getElementById('generateBtn');
    this.copyBtn = document.getElementById('copyBtn');

    this.lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    this.upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.numberChars = '0123456789';
    this.symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    this.addEventListeners();
  }

  // Method to add event listeners
  addEventListeners() {
    this.generateBtn.addEventListener('click', () => this.generatePassword());
    this.copyBtn.addEventListener('click', () => this.copyPasswordToClipboard());
  }

  // Method to generate the password
  generatePassword() {
    const length = this.lengthInput.value;
    const includeUppercase = this.uppercaseInput.checked;
    const includeNumbers = this.numbersInput.checked;
    const includeSymbols = this.symbolsInput.checked;

    let allChars = this.lowerCaseChars;

    if (includeUppercase) allChars += this.upperCaseChars;
    if (includeNumbers) allChars += this.numberChars;
    if (includeSymbols) allChars += this.symbolChars;

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }

    this.passwordOutput.textContent = password;
  }

  // Method to copy the password to clipboard
  copyPasswordToClipboard() {
    const password = this.passwordOutput.textContent;
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard!');
      });
    }
  }

  // Method to update the year dynamically in the footer
  static updateYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
  }
}

// Initialize the PasswordGenerator class when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const passwordGenerator = new PasswordGenerator();
  PasswordGenerator.updateYear(); // Update the year in the footer
});
