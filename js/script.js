function startPage() {
  document.querySelector(".user").classList.add("d-none");
  document.querySelector(".admin").classList.add("d-none");
  document.querySelector(".logout").classList.add("d-none");
}

function logout() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var HH = today.getHours();
  var MM = today.getMinutes();

  today = dd + "." + mm + "." + yyyy + " o godzinie " + HH + ":" + MM;

  document.querySelector(".user").classList.add("d-none");
  document.querySelector(".admin").classList.add("d-none");
  document.querySelector(".logout").classList.add("d-none");
  document.querySelector(".login").classList.remove("d-none");
  document.querySelector(".info").classList.remove("d-none", "alert-danger");
  document.querySelector(".info").classList.add("alert-success");
  document.querySelector(".info").innerHTML = "Wylogowano z aplikacji</br>" + today;
};

function saveHarm() {
  alert("Zapisano ustawienia harmonogramu");
};

function saveWork() {
  alert("Zapis ustawień");
};

function dropSSID() {
  document.getElementById("SSID").value = "";
  document.getElementById("PASS").value = "";
};

function saveSSID() {
  alert("Zapisano SSID, nastąpi restart urządzenia");
};

$(document).ready(function () {
  var maxField = 10; //Input fields increment limitation
  var addButton = $(".add_button"); //Add button selector
  var wrapper = $(".field_wrapper"); //Input field wrapper
  var fieldHTML =
    '<div class="row margin-top-10 w3-animate-left">\
        <input class="form-control col col-md-4 col-lg-3 h-auto-text-center" type="text" name="field_name[]" value=""/>\
        <a href="javascript:void(0);" class="remove_button col col-md-4 col-lg-3 h-auto-text-center" title="Usuń">\
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/><path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/></svg>\
        </a>\
    </div>'; //New input field html

  var x = 1; //Initial field counter is 1

  //Once add button is clicked
  $(addButton).click(function () {
    //Check maximum number of input fields
    if (x < maxField) {
      x++; //Increment field counter
      $(wrapper).append(fieldHTML); //Add field html
    }
  });

  //Once remove button is clicked
  $(wrapper).on("click", ".remove_button", function (e) {
    e.preventDefault();
    $(this).parent("div").remove(); //Remove field html
    x--; //Decrement field counter
  });
});

function smTypeCheck() {
  var checkbox = document.querySelector("input[name=smType]");

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      document.querySelector(".smType").innerHTML = "Tryb master";
      document.querySelector(".addSlave").classList.remove("d-none");
    } else {
      document.querySelector(".smType").innerHTML = "Tryb slave";
      document.querySelector(".addSlave").classList.add("d-none");
    }
  });
};

function boxChecksmType() {
  var checkbox = document.querySelector("input[name=smType]");
  if (checkbox.checked == true) {
    document.querySelector(".smType").innerHTML = "Tryb master";
    document.querySelector(".addSlave").classList.remove("d-none");
  } else {
    document.querySelector(".smType").innerHTML = "Tryb slave";
    document.querySelector(".addSlave").classList.add("d-none");
  }
};

function optionTypeCheckHarmDay(stateDay, timeDay, harmDay) {
  var checkboxHarmDay = document.querySelector("input[name=" + harmDay + "]");

  checkboxHarmDay.addEventListener("change", function () {
    if (this.checked) {
      document.querySelector(stateDay).innerHTML = "Zakres godzin";
      document.querySelector(timeDay).classList.remove("d-none");
    } else {
      document.querySelector(stateDay).innerHTML = "Automatycznie";
      document.querySelector(timeDay).classList.add("d-none");
    }
  });
};

function boxCheckHarmDay(stateDay, timeDay, harmDay) {
  var checkboxHarmDay = document.querySelector("input[name=" + harmDay + "]");
  if (checkboxHarmDay.checked == true) {
    document.querySelector(stateDay).innerHTML = "Zakres godzin";
    document.querySelector(timeDay).classList.remove("d-none");
  } else {
    document.querySelector(stateDay).innerHTML = "Automatycznie";
    document.querySelector(timeDay).classList.add("d-none");
  }
};

// Var table for time and time zones
var hours = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
];
var minuts = ["00", "15", "30", "45"];
var timeZone = [
  "UTC-04:00",
  "UTC-03:00",
  "UTC-02:00",
  "UTC-01:00",
  "UTC+00:00",
  "UTC+01:00",
  "UTC+02:00",
  "UTC+03:00",
  "UTC+04:00",
];

// Main function time select
function readOptionTime(idH, idM) {
  $.each(hours, function (i, p) {
    $(idH).append($("<option></option>").val(p).html(p));
  });
  $.each(minuts, function (i, p) {
    $(idM).append($("<option></option>").val(p).html(p));
  });
};

// Main function time zone select
function readOptionTimeZone(id) {
  $.each(timeZone, function (i, p) {
    var val = p.slice(3, 6);
    r = val * 3600;
    $(id).append($("<option></option>").val(r).html(p));
  });
};

function typeCheck(classP, inputId, showDiv) {
  if ($(classP)[0]) {
    document.querySelector(showDiv).classList.remove("d-none");
  } else {
    document.querySelector(showDiv).classList.add("d-none");
  }

  $(function () {
    $(inputId).change(function () {
      if ($(this).prop("checked")) {
        document.querySelector(showDiv).classList.remove("d-none");
      } else {
        //   document.querySelector(showDiv).classList.fa
        document.querySelector(showDiv).classList.add("d-none");
      }
    });
  });
};

function checkCred() {
  var loginVal = document.querySelector("#inputLogin").value;
  var passwordVal = document.querySelector("#inputPassword").value;
  var passwordHash = CryptoJS.MD5(passwordVal);
//   console.log(passwordHash);
  if (loginVal == "mauro" && passwordVal == 123456) {
    document.querySelector(".login").classList.add("d-none");
    document.querySelector(".user").classList.remove("d-none");
    document.querySelector(".logout").classList.remove("d-none");
    document.querySelector(".info").classList.add("d-none");
  } else {
    if (loginVal == "serwis" && passwordVal == 12345678) {
        document.querySelector(".login").classList.add("d-none");
        document.querySelector(".user").classList.remove("d-none");
        document.querySelector(".admin").classList.remove("d-none");
        document.querySelector(".logout").classList.remove("d-none");
        document.querySelector(".info").classList.add("d-none");
    } 
    else {
      document.querySelector(".info").classList.remove("d-none");
      document.querySelector(".info").classList.add("alert-danger");
      document.querySelector('.info').innerHTML = ('Niepoprawne dane logowania');
    }
    document.querySelector(".info").classList.remove("d-none");
    document.querySelector(".info").classList.add("alert-danger");
    document.querySelector('.info').innerHTML = ('Niepoprawne dane logowania');
  }
};

function wanIP() {
  fetch("https://api.ipify.org?format=json")
    .then(results => results.json());
    // .then(dane => console.log(dane.ip));
};

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.querySelector("#demo").innerHTML =
      "Geolocation is not supported by this browser.";
  }
};

function showPosition(position) {
  document.getElementById("inlineFormInputGroupLo").value = position.coords.longitude;
  document.getElementById("inlineFormInputGroupLa").value = position.coords.latitude;
};

function fMode(selector, object){
    $(selector).click(function(){
        $(object).fadeIn();
    });
};