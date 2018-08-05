
var menuObject = {

    "Guide": "guideContent",

    "Getting Started": {

        "Setting up your Account": "accountContent",

        "Configure your Account in 3 Simple Steps": {

            "Add Primary email": "emailContent",

            "Add Users": "userContent",

            "Rebrand Your Account": "brandContent",

        }

    }

};
var descriptionObject = {

    "guideContent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    "accountContent": "Non odio euismod lacinia at. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Sed adipiscing diam donec adipiscing tristique risus.",

    "emailContent": "Viverra mauris in aliquam sem fringilla ut morbi. Duis ultricies lacus sed turpis. Magna eget est lorem ipsum dolor sit amet consectetur. ",

    "userContent": "Arcu vitae elementum curabitur vitae. Volutpat blandit aliquam etiam erat. Dolor morbi non arcu risus quis varius quam.",

    "brandContent": "Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla."

};
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function getData(id){
    var data = document.getElementById(id).value;
    for (var obj in descriptionObject){
        if(obj == data)
        document.getElementById("mainData").innerHTML = descriptionObject[obj];
    }

}

 window.onload= function main() {
    var menuObjKeys = Object.keys(menuObject);
    var nestedMenuKeys = Object.keys(menuObject[menuObjKeys[1]]);
    var lowerKeys = Object.keys(menuObject[menuObjKeys[1]][nestedMenuKeys[1]]);
    var lowerValues = Object.values(menuObject[menuObjKeys[1]][nestedMenuKeys[1]]);
     document.getElementById("mainmenu1").innerHTML = menuObjKeys[0];
     document.getElementById("mainmenu1").value = menuObject[menuObjKeys[0]];
     document.getElementById("mainmenu2").innerHTML = menuObjKeys[1];
     document.getElementById("nestmenu").innerHTML = nestedMenuKeys[0];
     document.getElementById("nestmenu").value = menuObject[menuObjKeys[1]][nestedMenuKeys[0]];
     document.getElementById("nestmenu2").innerHTML = nestedMenuKeys[1];
     for (var i=1 ;i<=lowerKeys.length;i++){
        document.getElementById("lowmenu"+i).innerHTML = lowerKeys[i-1];
        document.getElementById("lowmenu"+i).value = lowerValues[i-1];
     }
 };





