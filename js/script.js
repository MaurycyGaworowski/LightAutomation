function startPage() {
//   document.querySelector(".user").classList.add("d-none");
//   document.querySelector(".admin").classList.add("d-none");
//   document.querySelector(".logout").classList.add("d-none");
  $('.user').hide();
  $('.admin').hide();
  $('.logout').hide();
}

function logout() {
setCookie('session', '', '1');
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var HH = today.getHours();
  var MM = today.getMinutes();

  today = dd + "." + mm + "." + yyyy + " o godzinie " + HH + ":" + MM;

//   document.querySelector(".user").classList.add("d-none");
  $('.user').hide(300);
//   document.querySelector(".admin").classList.add("d-none");
  $('.admin').hide(300);
//   document.querySelector(".logout").classList.add("d-none");
  $('.logout').hide(300);
//   document.querySelector(".login").classList.remove("d-none");
  $('.login').show(300);
  document.querySelector(".info").classList.remove("d-none", "alert-danger");
  document.querySelector(".info").classList.add("alert-success");
  document.querySelector(".info").innerHTML = "Wylogowano z aplikacji</br>" + today;
};

function saveHarm() {
  alert("Zapisano ustawienia harmonogramu");
};

// let newCfgParam = "{\"deviceName\" : "
const formData = new FormData();
formData.append("daviceName", "nameVal");
// 
function saveWork() {
  alert("Zapis ustawień");
//   newCfgParam += "\"isLightAutomationEnabled\": "
  if ($('#typeOf').prop('checked')){
    console.log('1 chcecked');
    formData.append("isLightAutomationEnabled", true);
    // newCfgParam += "true";
  } else{
    console.log('1 UNchcecked');
    formData.append("isLightAutomationEnabled", false);
    // newCfgParam += "false";

};
// newCfgParam += ",\"isDusk2DawnEnabled\": "

  if ($('#harmOn').prop('checked')){
    console.log('2 chcecked');
    formData.append("isDusk2DawnEnabled", true);
    // newCfgParam += "true";
  } else{
    console.log('2 UNchcecked');
    formData.append("isDusk2DawnEnabled", false);
    // newCfgParam += "false";

  };
};

function dropSSID() {
  document.getElementById("SSID").value = "";
  document.getElementById("PASS").value = "";
  document.querySelector("#tableWifi").remove();
};

function saveSSID() {
  alert("Zapisano SSID, nastąpi restart urządzenia");
  document.querySelector("#tableWifi").remove();

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
let isShowed
function typeCheck(classP, inputId, showDiv) {
  if ($(classP)[0]) {
    // document.querySelector(showDiv).classList.remove("d-none");
    isShowed=true;
    $(showDiv).show(300);
  } else {
      isShowed=false;
    // document.querySelector(showDiv).classList.add("d-none");
    $(showDiv).hide(300);
  }

  $(function() {
    $(inputId).change(function () {
      if ($(this).prop("checked")) {
        // document.querySelector(showDiv).classList.remove("d-none");
        $(showDiv).show(300);
      } else {
          $(showDiv).hide(300);
        // document.querySelector(showDiv).classList.add("d-none");
      }
    });
  });
};

function checkCred() {
  var loginVal = document.querySelector("#inputLogin").value;
  var passwordVal = document.querySelector("#inputPassword").value;
  var passwordHash = CryptoJS.MD5(passwordVal);
//   console.log(passwordHash.toString(CryptoJS.enc.Hex));
  let userpass = passwordHash.toString(CryptoJS.enc.Hex);
  if (loginVal == "mauro" && userpass == "e10adc3949ba59abbe56e057f20f883e") {
    setCookie('session', userpass, '1');
    askJson();
    // document.querySelector(".login").classList.add("d-none");
    $('.login').hide(300);
    // document.querySelector(".user").classList.remove("d-none");
    $('.user').show(300);
    // document.querySelector(".logout").classList.remove("d-none");
    $('.logout').show(300);
    // document.querySelector(".info").classList.add("d-none");
    $('.info').hide(300);
  } else {
    if (loginVal == "serwis" && userpass == "25d55ad283aa400af464c76d713c07ad") {
        setCookie('session', userpass, '1');
        askJson();
        askJsonSsid();
        askJsonIp();
        // document.querySelector(".login").classList.add("d-none");
        $(".login").hide(300);
        // document.querySelector(".user").classList.remove("d-none");
        $('.user').show(300);
        // document.querySelector(".admin").classList.remove("d-none");
        $('.admin').show(300);
        // document.querySelector(".logout").classList.remove("d-none");
        $('.logout').show(300);
        // document.querySelector(".info").classList.add("d-none");
        $('.info').hide(300);
    } 
    else {
    //   document.querySelector(".info").classList.remove("d-none");
      $('.info').show(300);
      document.querySelector(".info").classList.add("alert-danger");
      document.querySelector('.info').innerHTML = ('Niepoprawne dane logowania');
    }
    // document.querySelector(".info").classList.remove("d-none");
    $('.info').show(300);
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


// let cfg
// // JSON Parse
// function readJson(file){
//         $.getJSON(file, function(data) {         
//         cfg=JSON.stringify(data);
//             console.log(data);
//         // document.querySelector('#ssid').innerHTML = data.config.SSID;
//     });
// }

let config
function askJson() {
    fetch("/json/cfg.json")
      .then(results => results.json())
      .then(data => {config = data;
        // console.log(config.config.SSID);
        // console.log(config.config.isSlave.toString());
    updateAll(config);
    })
        // .then(data => upadeAll(config))
  };

  function updateAll(config){
    showId("deviceName", '#deviceName', config)  
    switchP("isLightAutomationEnabled", '#typeOf', config)
    switchP("isDusk2DawnEnabled", '#harmOn', config)
  };

  function update(param, id, newData) {
    document.querySelector(id).innerHTML = newData.config[param];
    console.log(newData.config.SSID)
  };

  function showId(param, id, newData) {
  document.querySelector(id).innerHTML = newData[param];
  };

  function switchP(param, id, newData) {
      console.log(newData[param]);
    if (newData[param]){
        if(!isShowed){
            $(id).prop('checked', true).change()
        }
    
    }
    else{
        if(isShowed){
            $(id).prop('checked', false).change()
        }
    }
  };

  function sednJson(uri){
    fetch(uri, {
        method: "post",
        body: formData
    })
    .then(res => res.json())
    .then(res => {
        // console.log("Dodałem użytkownika:");
        console.log(res);
    })
  }

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function checkCookie() {
    var user=getCookie("session");
    console.log(user);
    if (user == "e10adc3949ba59abbe56e057f20f883e") {
        askJson();
        $('.login').hide(300);
        $('.user').show(300);
        $('.logout').show(300);
        $('.info').hide(300);
      } else {
        if (user == "25d55ad283aa400af464c76d713c07ad") {
            askJson();
            askJsonSsid();
            askJsonIp();
            $(".login").hide(300);
            $('.user').show(300);
            $('.admin').show(300);
            $('.logout').show(300);
            $('.info').hide(300);
        } 
        else {
          $('.info').show(300);
          document.querySelector(".info").classList.add("alert-danger");
          document.querySelector('.info').innerHTML = ('Niepoprawne dane logowania');
        }
        $('.info').show(300);
        document.querySelector(".info").classList.add("alert-danger");
        document.querySelector('.info').innerHTML = ('Niepoprawne dane logowania');
      }
  }

  let configSsid
  function askJsonSsid() {
      fetch("/json/wifiConfig.json")
        .then(results => results.json())
        .then(data => {configSsid = data;
        //   console.log(configSsid.SSID);
          // console.log(config.config.isSlave.toString());
      updateSsid(configSsid);
      })
          // .then(data => upadeAll(config))
    };
  
    function updateSsid(config){
      showSsid("SSID", '#ssid', config)
    };
  
    function showSsid(param, id, newData) {
    document.querySelector(id).innerHTML = newData[param];
    };

    let configIp
  function askJsonIp() {
      fetch("/json/serverConfig.json")
        .then(results => results.json())
        .then(data => {configIp = data;
        //   console.log(configIp.SSID);
          // console.log(config.config.isSlave.toString());
      updateIp(configIp);
      })
          // .then(data => upadeAll(config))
    };
  
    function updateIp(config){
      showIp("actualWanIP", '#wanip', config)
      showIp("actualLanIP", '#lanip', config)
    };
  
    function showIp(param, id, newData) {
    document.querySelector(id).innerHTML = newData[param];
    };
    
let lista = {"1": "gdggd",
"2": "hdghdghs"}
     
    let configWifi
    function askJsonWifi() {
        var table= document.createElement('table'),
            thead = document.createElement('thead'),
            tbody = document.createElement('tbody'),
            th,
            tr,
            td;
            th = document.createElement('th'),          
            th.innerHTML="SSID";
            table.appendChild(th);
            th = document.createElement('th'); 
            th.innerHTML= "Password"
            table.appendChild(th);
            th = document.createElement('th'); 
            th.innerHTML= "Opcje"
            table.appendChild(th);
            table.appendChild(thead);            
            table.appendChild(tbody);
        table.id="tableWifi";

            
            document.getElementById('wifiProfiles').appendChild(table);
        fetch("/json/wifiProfilesList.json")
          .then(results => results.json())
          .then(data => {configWifi = data;
            console.log(data);
            let profile = configWifi["wifiKnownProfiles"]
            for (let index = 0; index < profile.length; index++) {
                const element = profile[index];
                console.log(element.SSID);
                console.log(index);
                tr = document.createElement('tr'),
            //for county
            td= document.createElement('td');
            td.innerHTML=element.SSID;
            tr.appendChild(td);

            //for capital
            td = document.createElement('td');
            td.innerHTML=element.password;
            tr.appendChild(td);

            td = document.createElement('td');
            // td.innerHTML=element.isSelected;
            tr.appendChild(td);
            let name = "chceckbox" + index;
            checkbox = document.createElement("input");
            checkbox.className ='form-check-input checkboxstyle';
            checkbox.type = "checkbox";
            checkbox.name = "wifiBox" + index;
            checkbox.id = name;
            checkbox.checked= true;
            td.appendChild(checkbox);
            tbody.appendChild(tr);
            element.isSelected?checkbox.checked= true:checkbox.checked= false;

            }
            // console.log(config.config.isSlave.toString());
        // updateIp(configIp);
        })
                    
      };
