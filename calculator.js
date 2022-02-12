var previousDisplay = document.getElementById("previousDisplay");

var buttons = document.getElementsByClassName("button");

for (var button of buttons) {
  button.addEventListener("click", function (e) {
    switch (e.target.innerText) {
      case "AC":
        previousDisplay.innerText = "";
        document.getElementById("currentDisplay").innerText = "";
        break;
      case "DEL":
        previousDisplay.innerText = previousDisplay.innerText.slice(0, -1);
        break;
      case "Ans":
        previousDisplay.innerText =
          document.getElementById("currentDisplay").innerText;
        document.getElementById("currentDisplay").innerText = "";
        break;

      case "=":
        try {
          document.getElementById("currentDisplay").innerText = eval(
            previousDisplay.innerText
          );
        } catch {
          document.getElementById("currentDisplay").innerText = "error!";
        }

        break;

      default:
        previousDisplay.innerText += e.target.innerText;
    }
  });
}
