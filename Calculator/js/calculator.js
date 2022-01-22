let ReplaceBackground = function() {
    document.body.style.backgroundColor = "#0A0BC1";
}


B = document.body;
B = document.getElementById("application");
document.addEventListener("DOMContentLoaded", ReplaceBackground);


let input_a = document.createElement("input")
input_a.setAttribute("id", "input_a");
B.append(input_a);

let input_b = document.createElement("input")
input_b.setAttribute("id", "input_b");
B.append(input_b);

B = document.getElementById("application");


let add = (a,b) => {
    return parseFloat(a) / parseFloat(b);
}

let foo = () => {
    let in_a = document.getElementById("input_a").value;
    let in_b = document.getElementById("input_b").value ;
    let res = document.getElementById("result");
    res.innerText = add(in_a, in_b);
}

let result_button = document.createElement("button")
result_button.innerText = "=";
result_button.onclick = foo;
B.append(result_button);


let result_ti = document.createElement("h3")
result_ti.setAttribute("id", "result");
result_ti.innerText = "None";
B.append(result_ti);



