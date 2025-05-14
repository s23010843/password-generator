class PasswordGenerator {
  constructor(options) {
    this.length = options.length;
    this.includeUppercase = options.includeUppercase;
    this.includeNumbers = options.includeNumbers;
    this.includeSymbols = options.includeSymbols;
  }

  static getLowercaseChars() {
    return 'abcdefghijklmnopqrstuvwxyz';
  }

  static getUppercaseChars() {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  static getNumberChars() {
    return '0123456789';
  }

  static getSymbolChars() {
    return '!@#$%^&*()_+[]{}|;:,.<>?';
  }

  generate() {
    let characters = PasswordGenerator.getLowercaseChars();

    if (this.includeUppercase) {
      characters += PasswordGenerator.getUppercaseChars();
    }

    if (this.includeNumbers) {
      characters += PasswordGenerator.getNumberChars();
    }

    if (this.includeSymbols) {
      characters += PasswordGenerator.getSymbolChars();
    }

    if (!characters.length) return '';

    let password = '';
    for (let i = 0; i < this.length; i++) {
      const randIndex = Math.floor(Math.random() * characters.length);
      password += characters[randIndex];
    }

    return password;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('passwordForm');
  const generateBtn = document.getElementById('generateBtn');
  const copyBtn = document.getElementById('copyBtn');
  const output = document.getElementById('passwordOutput');

  generateBtn.addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const generator = new PasswordGenerator({
      length,
      includeUppercase,
      includeNumbers,
      includeSymbols
    });

    const password = generator.generate();
    output.textContent = password;
  });

  copyBtn.addEventListener('click', () => {
    const password = output.textContent;
    if (!password) return;

    navigator.clipboard.writeText(password)
      .then(() => alert('Password copied to clipboard!'))
      .catch(() => alert('Failed to copy password.'));
  });
});
