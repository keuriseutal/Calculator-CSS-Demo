import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  output: string = '0';
  num1: number[] = [0];
  num2: number[] = [0];

  num1Disp: number = parseInt(this.num1.toString().replace(/,/g, ""));
  num2Disp: number = parseInt(this.num2.toString().replace(/,/g, ""));

  isOperatorPressed: boolean = false;
  isEqualsPressed: boolean = false;

  selectedOperator: string;

  clear() {
    this.num1 = [0];
    this.num2 = [0];
    this.output = '0';

    this.isEqualsPressed = false;
    this.isOperatorPressed = false;

    this.num1Disp = parseInt(this.num1.toString().replace(/,/g, ""));
    this.num2Disp = parseInt(this.num2.toString().replace(/,/g, ""));
  }

  divide() {
    this.isOperatorPressed = true;
    this.selectedOperator = "/";
  }

  multiply() {
    this.isOperatorPressed = true;
    this.selectedOperator = "*";
  }

  subtract() {
    this.isOperatorPressed = true;
    this.selectedOperator = "-";
  }

  add() {
    this.isOperatorPressed = true;
    this.selectedOperator = "+";
  }

  equals() {
    console.log(this.num1 + "\n" + this.num2);
    this.isEqualsPressed = true;
    this.isOperatorPressed = false;

    switch (this.selectedOperator) {
      case "+":
        this.output = 
          (
            parseInt(this.num1.toString().replace(/,/g, "")) +
            parseInt(this.num2.toString().replace(/,/g, ""))
          )
            .toString()
            .substring(0, 12)
        ;
        break;
      case "-":
        this.output = 
          (
            parseInt(this.num1.toString().replace(/,/g, "")) -
            parseInt(this.num2.toString().replace(/,/g, ""))
          )
            .toString()
            .substring(0, 12)
        ;
        break;
      case "*":
        this.output = 
          (
            parseInt(this.num1.toString().replace(/,/g, "")) *
            parseInt(this.num2.toString().replace(/,/g, ""))
          )
            .toString()
            .substring(0, 12)
        ;
        break;
      case "/":
        this.output = 
          (
            parseInt(this.num1.toString().replace(/,/g, "")) /
            parseInt(this.num2.toString().replace(/,/g, ""))
          )
            .toString()
            .substring(0, 12)
        ;
        break;
    }

    this.num1 = [0];
    this.num2 = [0];
    this.num1Disp = parseInt(this.num1.toString().replace(/,/g, ""));
    this.num2Disp = parseInt(this.num2.toString().replace(/,/g, ""));
  }

  one() {
    if (!this.isOperatorPressed && this.num1.length != 12) {
      this.isEqualsPressed = false;
      this.num1.push(1);
      this.num1Disp = parseInt(this.num1.toString().replace(/,/g, ""));
    } else if (this.isOperatorPressed && this.num2.length != 12) {
      this.num2.push(1);
      this.num2Disp = parseInt(this.num2.toString().replace(/,/g, ""));
    }
  }

  two() {
    if (!this.isOperatorPressed && this.num1.length != 12) {
      this.isEqualsPressed = false;
      this.num1.push(2);
      this.num1Disp = parseInt(this.num1.toString().replace(/,/g, ""));
    } else if (this.isOperatorPressed && this.num2.length != 12) {
      this.num2.push(2);
      this.num2Disp = parseInt(this.num2.toString().replace(/,/g, ""));
    }
  }

  three() {
    if (!this.isOperatorPressed && this.num1.length != 12) {
      this.isEqualsPressed = false;
      this.num1.push(3);
      this.num1Disp = parseInt(this.num1.toString().replace(/,/g, ""));
    } else if (this.isOperatorPressed && this.num2.length != 12) {
      this.num2.push(3);
      this.num2Disp = parseInt(this.num2.toString().replace(/,/g, ""));
    }
  }

  four() {
    if (!this.isOperatorPressed && this.num1.length != 12) {
      this.isEqualsPressed = false;
      this.num1.push(4);
      this.num1Disp = parseInt(this.num1.toString().replace(/,/g, ""));
    } else if (this.isOperatorPressed && this.num2.length != 12) {
      this.num2.push(4);
      this.num2Disp = parseInt(this.num2.toString().replace(/,/g, ""));
    }
  }

  five() {
    if (!this.isOperatorPressed && this.num1.length != 12) {
      this.isEqualsPressed = false;
      this.num1.push(5);
      this.num1Disp = parseInt(this.num1.toString().replace(/,/g, ""));
    } else if (this.isOperatorPressed && this.num2.length != 12) {
      this.num2.push(5);
      this.num2Disp = parseInt(this.num2.toString().replace(/,/g, ""));
    }
  }

  six() {
    if (!this.isOperatorPressed && this.num1.length != 12) {
      this.isEqualsPressed = false;
      this.num1.push(6);
      this.num1Disp = parseInt(this.num1.toString().replace(/,/g, ""));
    } else if (this.isOperatorPressed && this.num2.length != 12) {
      this.num2.push(6);
      this.num2Disp = parseInt(this.num2.toString().replace(/,/g, ""));
    }
  }

  seven() {
    if (!this.isOperatorPressed && this.num1.length != 12) {
      this.isEqualsPressed = false;
      this.num1.push(7);
      this.num1Disp = parseInt(this.num1.toString().replace(/,/g, ""));
    } else if (this.isOperatorPressed && this.num2.length != 12) {
      this.num2.push(7);
      this.num2Disp = parseInt(this.num2.toString().replace(/,/g, ""));
    }
  }

  eight() {
    if (!this.isOperatorPressed && this.num1.length != 12) {
      this.isEqualsPressed = false;
      this.num1.push(8);
      this.num1Disp = parseInt(this.num1.toString().replace(/,/g, ""));
    } else if (this.isOperatorPressed && this.num2.length != 12) {
      this.num2.push(8);
      this.num2Disp = parseInt(this.num2.toString().replace(/,/g, ""));
    }
  }

  nine() {
    if (!this.isOperatorPressed && this.num1.length != 12) {
      this.isEqualsPressed = false;
      this.num1.push(9);
      this.num1Disp = parseInt(this.num1.toString().replace(/,/g, ""));
    } else if (this.isOperatorPressed && this.num2.length != 12) {
      this.num2.push(9);
      this.num2Disp = parseInt(this.num2.toString().replace(/,/g, ""));
    }
  }

  zero() {
    if (!this.isOperatorPressed && this.num1.length != 12) {
      this.isEqualsPressed = false;
      this.num1.push(0);
      this.num1Disp = parseInt(this.num1.toString().replace(/,/g, ""));
    } else if (this.isOperatorPressed && this.num2.length != 12) {
      this.num2.push(0);
      this.num2Disp = parseInt(this.num2.toString().replace(/,/g, ""));
    }
  }
}
