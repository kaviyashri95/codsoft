let screen = document.querySelector(".screen");
let element = document.querySelectorAll("button");
let splchar = ["%", "/", "*", "+", "-", "=", "(", ")"];
let output = "";
let calculate = (datavalue) => {
  //console.log(datavalue);
  let balancedparenthese = (check) => {
    let count = 0;
    for (let i in check) {
      if (check[i] === "(") {
        count++;
      } else if (check[i] === ")") {
        count--;
        if (count > 0) {
          return false;
        }
      }
    }
    return count === 0;
  };
  if (datavalue === "=") {
    if (!balancedparenthese(output)) {
      output = "Parenthese are not equal";
    }
    try {
      output = eval(output.replace("%", "/100"));
    } catch (error) {
      alert("Invalid input");
    }
  } else if (datavalue === "AC") {
    output = "";
  } else if (datavalue === "del") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === " " && splchar.includes(datavalue) && datavalue !== "(") {
      return;
    }
    output += datavalue;
  }
  screen.value = output;
};
element.forEach((button) => {
  button.addEventListener("click", () => {
    const dataValue = button.getAttribute("data-value");
    //screen.value += dataValue;
    calculate(dataValue);
  });
});
