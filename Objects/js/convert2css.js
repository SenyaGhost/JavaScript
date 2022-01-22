function getStyle(hexcolor) {
    return `background-color: #${hexcolor};`;
}


let color = {
    r: 160,
    g: 176,
    b: 193
}

let hexcolor = color.r.toString(16) + color.g.toString(16) + color.b.toString(16);
console.log(hexcolor);


B = document.body;
B = document.getElementById('bg');
B.setAttribute("style", getStyle(hexcolor));

D = document.body;
D = document.getElementById("application");



let input_a = document.createElement("input")
input_a.setAttribute("id", "input_a");
D.append(input_a);

let input_b = document.createElement("input")
input_b.setAttribute("id", "input_b");
D.append(input_b);

D = document.getElementById("application");


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
D.append(result_button);


let result_ti = document.createElement("h3")
result_ti.setAttribute("id", "result");
result_ti.innerText = "None";
D.append(result_ti);


