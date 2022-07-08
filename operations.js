function operation() {
    in1 = document.getElementById("Number 1:").value;
    in2 = document.getElementById("Number 2:").value;
    op = document.getElementById("Operations:").value;
    if (in1 == "" && in2=="" && op=="")
        alert("Number 1, an operand and number 2 are mandatory!!");
    else 
    if (in2 == "" && op=="")
        alert("Number 2 and an operand are mandatory!!");
        else
    if(op == "" && in1=="")
        alert("An operand and number 1 are mandatory!!");
    else
    if(in1 == "" && in2=="")
        alert("Number 1 and number 2 are mandatory!!");
    else 
    if(in1=="")
        alert("Number 1 is mandatory!!");
    else
    if(in2=="")
        alert("Number 2 is mandatory!!");
    else
    if(op=="")
        alert("An operand is mandatory!!");
        else {
    if (op == "Addition")
        document.write("Result: " + in1 + "+" + in2 + "=" + (parseInt(in1) + parseInt(in2)) + ".");
    if (op == "Substraction")
        document.write("Result: " + in1 + "-" + in2 + "=" + (in1 - in2) + ".");
    if (op == "Multiplication")
        document.write("Result: " + in1 + "*" + in2 + "=" + (in1 * in2) + ".");
    if (op == "Division")
        document.write("Result: " + in1 + "/" + in2 + "=" + (in1 / in2) + ".");}
}

function reset() {
    document.getElementById("Number 1:").reset();
    document.getElementById("Number 2:").reset();
    document.getElementById("Operations:").reset();
}