var x = document.getElementsByClassName('freebirdFormviewerViewItemsEmbeddedobjectImage');
var y = document.getElementsByClassName('freebirdFormviewerComponentsQuestionBaseTitle');
var jsonObj = [];
var i;

for (i = 0; i < x.length; i++) {
    var question_count = i + 1;
    data = {};
    data["Question_No"] = question_count;
    data["img_url"] = x[i].currentSrc;
    jsonObj.push(data);
}

for (i = 0; i < y.length; i++) {
    text = {};
    text["Question_text"] = y[i].innerText;
    if(text["Question_text"] != "")
    {
    jsonObj.push(text);
    }
}

jsonStr = JSON.stringify(jsonObj, null, 2);
copyToClipboard(jsonStr);
alert("Đã copy dữ liệu vào bộ nhớ!");
function copyToClipboard(text) {
    var dummy = document.createElement("textarea");

    document.body.appendChild(dummy);

    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
