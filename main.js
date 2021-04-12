function para_1_show(){
    var inputs = [];
    for(var i = 1; i<=6; i++){
        inputs.push(document.getElementById("para1_input_box_" +i).value);
    }
    document.getElementById("show_words_of_para_1").innerHTML = inputs.join(". ")
}
function para_2_show(){
    var inputs = [];
    for(var g = 1; g<=6; g++){
        inputs.push(document.getElementById("para2_input_box_" +g).value);
    }
    document.getElementById("show_words_of_para_2").innerHTML = inputs.join(". ")
}