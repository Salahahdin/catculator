/*
Original app- https://www.section.io/engineering-education/building-a-calculator-a-javascript-project-for-beginners/

Catculator is a calculator based on this project, but enhanced with some additional features :)

Version: 0.1 by Salahahdin


*/



class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
  
    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
      document.querySelector('.pixel-cat-default').style.backgroundImage = 'url(pixelcat.png)';

    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
  
    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }
  
    chooseOperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
        this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }
  
    compute() {
      let computation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          document.querySelector('.pixel-cat-default').style.backgroundImage = 'url(pixelcat.png)';
          if (computation == 1000)
          {
          document.querySelector('.pixel-cat-default').style.backgroundImage = 'url(cat1k.png)';
          }
          if (computation == 1000000)
          {
          document.querySelector('.pixel-cat-default').style.backgroundImage = 'url(cat1m.png)';
          }
          break
        case '-':
          computation = prev - current
          document.querySelector('.pixel-cat-default').style.backgroundImage = 'url(pixelcat.png)';

          if (computation == 1000)
          {
          document.querySelector('.pixel-cat-default').style.backgroundImage = 'url(cat1k.png)';
          }
          if (computation == 1000000)
          {
          document.querySelector('.pixel-cat-default').style.backgroundImage = 'url(cat1m.png)';
          }
          break
        case '*':
          computation = prev * current
          document.querySelector('.pixel-cat-default').style.backgroundImage = 'url(pixelcat.png)';

          if (computation == 1000)
          {
          document.querySelector('.pixel-cat-default').style.backgroundImage = 'url(cat1k.png)';
          }
          if (computation == 1000000)
          {
          document.querySelector('.pixel-cat-default').style.backgroundImage = 'url(cat1m.png)';
          }
          break
        case '÷':
          computation = prev / current
          document.querySelector('.pixel-cat-default').style.backgroundImage = 'url(pixelcat.png)';

          if (computation == 1000)
          {
          document.querySelector('.pixel-cat-default').style.backgroundImage = 'url(cat1k.png)';
          }
          if (computation == 1000000)
          {
          document.querySelector('.pixel-cat-default').style.backgroundImage = 'url(cat1m.png)';
          }
          break
        default:
          return
      }


      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
  
    updateDisplay() {
      this.currentOperandTextElement.innerText =
        this.getDisplayNumber(this.currentOperand)
       

        if (this.previousOperand == 1000000)
        {
        document.querySelector('.pixel-cat-default').style.backgroundImage = 'url(cat1m.png)';
          console.log("I've reached 1000") 
        }
      if (this.operation != null) {
        this.previousOperandTextElement.innerText =
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.previousOperandTextElement.innerText = ''
      }
    }
    
    playMeow(url)
    {
      new Audio(url).play();
    }
  
  }
  
  
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')
  
  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
      calculator.playMeow('cat-meow.mp3')
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
      calculator.playMeow('cat-meow.mp3')
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
    calculator.playMeow('cat-meow.mp3')
  })
  
  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
    calculator.playMeow('cat-meow.mp3')
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
    calculator.playMeow('cat-meow.mp3')
  })
  
  document.addEventListener('keydown', function (event) {
    let patternForNumbers = /[0-9]/g;
    let patternForOperators = /[+\-*\/]/g
    if (event.key.match(patternForNumbers)) {
      event.preventDefault();
      calculator.appendNumber(event.key)
      calculator.updateDisplay()
      calculator.playMeow('cat-meow.mp3')
    }
    if (event.key === '.') {
      event.preventDefault();
      calculator.appendNumber(event.key)
      calculator.updateDisplay()
      calculator.playMeow('cat-meow.mp3')
    }
    if (event.key.match(patternForOperators)) {
      event.preventDefault();
      calculator.chooseOperation(event.key)
      calculator.updateDisplay()
      calculator.playMeow('cat-meow.mp3')
    }
    if (event.key === 'Enter' || event.key === '=') {
      event.preventDefault();
      calculator.compute()
      calculator.updateDisplay()
      calculator.playMeow('cat-meow.mp3')
    }
    if (event.key === "Backspace") {
      event.preventDefault();
      calculator.delete()
      calculator.updateDisplay()
      calculator.playMeow('cat-meow.mp3')
    }
    if (event.key == 'Delete') {
      event.preventDefault();
      calculator.clear()
      calculator.updateDisplay()
      calculator.playMeow('cat-meow.mp3')
    }
  
  });