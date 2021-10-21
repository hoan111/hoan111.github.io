var x = document.getElementsByClassName('freebirdFormviewerViewItemsEmbeddedobjectImage');
var jsonObj = [];
var i;

for (i = 0; i < x.length; i++) {
    var question_count = i + 1;
    image = {};
    image["Question_No"] = question_count;
    image["img_url"] = x[i].currentSrc;
    jsonObj.push(image);
}
jsonStr = JSON.stringify(jsonObj, null, 2);
copyToClipboard(jsonStr);
console.log("Đã copy dữ liệu vào bộ nhớ!");

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");

    document.body.appendChild(dummy);

    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}