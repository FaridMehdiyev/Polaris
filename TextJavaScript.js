
function EvaluationGood() {
    document.getElementById("Thanks").innerHTML = "Thanks for the evaluation. It'll be continued to be useful";
    document.getElementById("timenote").innerHTML = "Evaluation time:";
    document.getElementById("Date").innerHTML = new Date();    
  }

function EvaluationBad() {
    document.getElementById("Thanks").innerHTML = "Thanks for the evaluation. Polaris will try to be useful for you.";
    document.getElementById("timenote").innerHTML = "Evaluation time:";
    document.getElementById("Date").innerHTML = new Date();    
  }