function startPage() {
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
  $('.user').hide(300);
  $('.admin').hide(300);
  $('.logout').hide(300);
  $('.login').show(300);
  document.querySelector(".info").classList.remove("d-none", "alert-danger");
  document.querySelector(".info").classList.add("alert-success");
  document.querySelector(".info").innerHTML = "Wylogowano z aplikacji</br>" + today;
  location.reload();
}

function dropSSID() {
  document.getElementById("SSID").value = "";
  document.getElementById("PASS").value = "";
  document.querySelector("#tableWifi").remove();
}

$(document).ready(function () {
  var maxField = 10; //Input fields increment limitation
  var addButton = $(".add_button"); //Add button selector
  var wrapper = $(".field_wrapper"); //Input field wrapper
  var x = 0; //Initial field counter is 1
  $(addButton).click(function () {
    if (x < maxField) {
      let nameId="f";
      nameId+=x.toString();
      var fieldHTML =
    "<div id=\"remSla\" class=\"row margin-top-10 w3-animate-left\">\
        <input onblur=\"ValidateIPaddress(this.value, " + nameId + ")\" id= \""+nameId+"\" class=\"form-control col col-md-4 col-lg-3 h-auto-text-center\" type=\"text\" name=\"field_name[" + x + "]\" value/>"+
        "<a id=\"remS\" href=\"javascript:void(0);\" class=\"remove_button col col-md-4 col-lg-3 h-auto-text-center\" title=\"Usuń\">\
            <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-x\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z\"/><path fill-rule=\"evenodd\" d=\"M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z\"/></svg>\
        </a>\
    </div>";
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
})

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
}

function boxChecksmType() {
  var checkbox = document.querySelector("input[name=smType]");
  if (checkbox.checked == true) {
    document.querySelector(".smType").innerHTML = "Tryb master";
    document.querySelector(".addSlave").classList.remove("d-none");
  } else {
    document.querySelector(".smType").innerHTML = "Tryb slave";
    document.querySelector(".addSlave").classList.add("d-none");
  }
}

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
}

function boxCheckHarmDay(stateDay, timeDay, harmDay) {
  var checkboxHarmDay = document.querySelector("input[name=" + harmDay + "]");
  if (checkboxHarmDay.checked == true) {
    document.querySelector(stateDay).innerHTML = "Zakres godzin";
    document.querySelector(timeDay).classList.remove("d-none");
  } else {
    document.querySelector(stateDay).innerHTML = "Automatycznie";
    document.querySelector(timeDay).classList.add("d-none");
  }
}

var hours = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
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

let minutes =[];
for (let index = 0; index < 60; index++){
    !(index%15)?minutes.push(index):null;
}
let hours2 =[];
for (let index = 0; index < 24; index++){
    hours2.push(index);
}

var minuts = ["0", "15", "30", "45"];
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

function readOptionTime(idH, idM) {
  $.each(hours, function (i, p) {
      let b= ""
      p<10?b="0":b="";
    $(idH).append($("<option></option>").val(p).html(b + p));
  });
  $.each(minuts, function (i, p) {
    let b= ""
    p<10?b="0":b="";
    $(idM).append($("<option></option>").val(p).html(b + p));
  });
}

function readOptionTimeZone(id) {
  $.each(timeZone, function (i, p) {
    var val = p.slice(3, 6);
    r = val * 3600;
    $(id).append($("<option></option>").val(r).html(p));
  });
}

let isShowed
function typeCheck(classP, inputId, showDiv) {
  if ($(classP)[0]) {
    isShowed=true;
    $(showDiv).show(300);
  } else {
    isShowed=false;
    $(showDiv).hide(300);
  }
  $(function() {
    $(inputId).change(function () {
      if ($(this).prop("checked")) {
        $(showDiv).show(300);
      } else {
          $(showDiv).hide(300);
      }
    });
  });
}

function checkCred() {
  var loginVal = document.querySelector("#inputLogin").value;
  var passwordVal = document.querySelector("#inputPassword").value;
  var passwordHash = CryptoJS.MD5(passwordVal);
  let userpass = passwordHash.toString(CryptoJS.enc.Hex);
  if (loginVal == "mauro" && userpass == "e10adc3949ba59abbe56e057f20f883e") {
    setCookie('session', userpass, '1');
    askJson();
    askJsonWeekHarm();
    $('.login').hide(300);
    $('.user').show(300);
    $('.logout').show(300);
    $('.info').hide(300);
  } else {
    if (loginVal == "serwis" && userpass == "25d55ad283aa400af464c76d713c07ad") {
        setCookie('session', userpass, '1');
        askJson();
        askJsonSsid();
        askJsonIp();
        askJsonTime();
        askJsonGeo();
        askJsonSlave();
        askJsonWeekHarm();
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

function wanIP() {
  fetch("https://api.ipify.org?format=json")
    .then(results => results.json());
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else {
        document.querySelector("#demo").innerHTML =
        "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
  document.getElementById("inlineFormInputGroupLo").value = position.coords.longitude;
  document.getElementById("inlineFormInputGroupLa").value = position.coords.latitude;
}

function fMode(selector, object){
    $(selector).click(function(){
        $(object).fadeIn();
    });
}

let config
function askJson() {
    fetch("/json/cfg.json")
      .then(results => results.json())
      .then(data => {config = data;
    updateAll(config);
    })
}

function updateAll(config){
    showId("deviceName", '#deviceName', config)  
    switchP("isLightAutomationEnabled", '#typeOf', config)
    switchP("isDusk2DawnEnabled", '#harmOn', config)
}

function update(param, id, newData) {
    document.querySelector(id).innerHTML = newData.config[param];
}

function showId(param, id, newData) {
document.querySelector(id).innerHTML = newData[param];
}

function switchP(param, id, newData) {
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
        askJsonWeekHarm();
        $('.login').hide(300);
        $('.user').show(300);
        $('.logout').show(300);
        $('.info').hide(300);
    } 
    else {
        if (user == "25d55ad283aa400af464c76d713c07ad") {
            askJson();
            askJsonSsid();
            askJsonIp();
            askJsonTime();
            askJsonGeo();
            askJsonSlave();
            askJsonWeekHarm();
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
    updateSsid(configSsid);
    })
}
  
function updateSsid(config) {
  showSsid("SSID", '#ssid', config)
}
  
function showSsid(param, id, newData) {
  document.querySelector(id).innerHTML = newData[param];
}

let configIp
function askJsonIp() {
  fetch("/json/serverConfig.json")
    .then(results => results.json())
    .then(data => {configIp = data;
    updateIp(configIp);
  })
}
  
function updateIp(config) {
    showIp("actualWanIP", '#wanip', config)
    showIp("actualLanIP", '#lanip', config)
}
  
function showIp(param, id, newData) {
    document.querySelector(id).innerHTML = newData[param];
}
    
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
  th.innerHTML= "Aktywna"
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
      let profile = configWifi["wifiKnownProfiles"]
      countRows= profile.length;
      for (let index = 0; index < profile.length; index++) {
      const element = profile[index];
      tr = document.createElement('tr'),
      tr.id = "tr"+ index;
      td= document.createElement('td');
      td.id = "ssid"+ index;
      td.innerHTML=element.SSID;
      tr.appendChild(td);
      td = document.createElement('td');
      td.id = "pass"+ index;
      td.innerHTML=element.password;
      tr.appendChild(td);
      td = document.createElement('td');
      td.id = "active"+ index;
      tr.appendChild(td);
      let name = "chceckbox" + index;
      checkbox = document.createElement("input");
      checkbox.className ='form-check-input checkboxstyle';
      checkbox.type = "radio";
      checkbox.name = "inlineRadioOptions";
      checkbox.id = "wifiBox" + index;
      td.appendChild(checkbox);
      td = document.createElement('td');
      tr.appendChild(td); 
      let nameB = "button" + index;
      button = document.createElement("button");
      button.className ='btn-danger btn-sm wifiRemove';
      button.type = "button";
      button.innerHTML = "Usuń";
      button.nameB = "buttonGroup";
      button.id = "wifiRemove" + index;
      if(element.isSelected){
        button.disabled = true;
        button.className ='btn-secondary btn-sm wifiRemove disabled';
        checkbox.checked = true;
      }
      else {
      button.disabled = false;
      checkbox.checked = false;
      button.setAttribute("onclick","deleteProfile(" + index + ");");
      }
      td.appendChild(button);
      tbody.appendChild(tr);
      }
    })
}
      
let countRows
function deleteProfile(index) {
    document.getElementById("tr"+index).remove();
}

function addWifiProfile() {
    if ((document.querySelector('#SSID').value === "") || (document.querySelector('#PASS').value === "")){
        alert("puste pola, nic nie dodam!");
    } 
    else {
      if (document.getElementById("tableWifi").rows.length<10){
        var table = document.getElementById("tableWifi");
        var row = table.insertRow();
        row.id = "tr"+ countRows;
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        cell1.innerHTML = document.querySelector('#SSID').value;
        cell1.id = "ssid" + countRows;
        cell2.innerHTML = document.querySelector('#PASS').value;
        cell2.id = "pass" + countRows;
        cell3.innerHTML = "<input class='form-check-input checkboxstyle' type='radio' name='inlineRadioOptions' id='wifiBox" + countRows + "'/>";
        cell3.id = "active" + countRows;
        cell4.innerHTML = "<button class='btn-danger btn-sm wifiRemove' type='button' name='buttonGroup' id='wifiRemove" + countRows + "' onclick='deleteProfile(" + countRows + ");'>Usuń</button>";
        countRows++;
        document.querySelector('#SSID').value = ""; 
        document.querySelector('#PASS').value = ""; 
      }else{
        alert("Maksymalnie mozna zapisać 10 profili");
      }
    }
}

let timeS
function askJsonTime() {
    fetch("/json/ntpConfig.json")
      .then(results => results.json())
      .then(data => {timeS = data;
    updateTime(timeS);
    })
}

function updateTime(timeS){
  showParam("serverNTP", '#ntp', timeS)  
  showParam("requestFrequency", '#refNtp', timeS)  
  switchDst("daySavingTime", '#DST', timeS)
  switchTZ("timeZone", '#timeZoneSelect', timeS)
}

function showParam(param, id, newData) {
document.querySelector(id).value = newData[param];
}

function switchDst(param, id, newData) {
  if (newData[param] == 1){
  document.querySelector(id).checked = true;    
  }
  else{
  document.querySelector(id).checked = false;            
  }
}

function switchTZ(param, id, newData) {
  var utc = newData[param] * 3600;
  document.querySelector('#timeZoneSelect').value = utc;
}

let geoS
function askJsonGeo() {
    fetch("/json/dusk2DawnConfig.json")
      .then(results => results.json())
      .then(data => {geoS = data;
    updateGeo(geoS);
    })
}

function updateGeo(geoS) {
  showParamGeo("currentLocationLatitude", '#inlineFormInputGroupLa', geoS)  
  showParamGeo("currentLocationLongitude", '#inlineFormInputGroupLo', geoS)  
  showParamGeo("dusk2DawnHoursStartDelay", '#d2dfH', geoS)  
  showParamGeo("dusk2DawnHoursStopDelay", '#d2dtH', geoS)  
  showParamGeo("dusk2DawnMinutesStartDelay", '#d2dfM', geoS)  
  showParamGeo("dusk2DawnMinutesStopDelay", '#d2dtM', geoS)  
}

function showParamGeo(param, id, newData) {
  document.querySelector(id).value = newData[param];
}

function saveTimeSettings() {
    alert('zapis ustawień czasu');
}

function saveD2dSettings() {
    alert('zapis ustawień D2D');
}

let slave
function askJsonSlave() {
  fetch("/json/slaveList.json")
    .then(results => results.json())
    .then(data => {
      slave = data;
      isSlave(slave);
      if (slave.isSlave == false){
        var l = 0;
        slave.slaveList.forEach(element => {
          $('#addS').trigger('click');
          document.querySelector("#f" + l).value = element.addressIP;
          l++;
        })
      }
      else{
        var l = 0;
        slave.slaveList.forEach(element => {
          $('#addS').trigger('click');
          document.querySelector("#f" + l).value = element.addressIP;
          l++;
        })
      }    
    })  
}

function isSlave(slave){
  switchSlave("isSlave", '#smType', slave)
}

function switchSlave(param, id, newData) {
    if (newData[param] == false){
    document.querySelector(id).checked = true;
    boxChecksmType();
    }
    else{
    document.querySelector(id).checked = false; 
    boxChecksmType();   
    }
}

let aWifi
function askJsonAvailableWifi() {
    document.getElementById('searchWifi').classList.remove("btn-success");
    document.getElementById('searchWifi').classList.add("btn-danger");
    document.getElementById('searchWifi').innerHTML = "Zamknij";
    var table= document.createElement('table'),
    thead = document.createElement('thead'),
    tbody = document.createElement('tbody'),
    th,
    tr,
    td;
    th = document.createElement('th'),          
    th.innerHTML="Dostępne sieci";
    table.appendChild(th);
    th = document.createElement('th'); 
    th.innerHTML= ""
    table.appendChild(th);
    table.appendChild(thead);            
    table.appendChild(tbody);
    table.id="availableWifiTable";
    document.getElementById('listWifi').appendChild(table);
    document.getElementById('searchWifi').setAttribute("onclick", "removeTable();");
    fetch("/json/availableWifi.json")
      .then(results => results.json())
      .then(data => {aWifi = data;
        var i = 0
        aWifi.forEach(element =>{
            i++
            tr = document.createElement('tr'),
            tr.id = "avWifi"+ i;
            td= document.createElement('td');
            td.innerHTML=element.ssid;
            tr.appendChild(td);
            td = document.createElement('td');
            let nameB = "button" + i;
            button = document.createElement("button");
            button.className ='btn-info btn-sm addProfile';
            button.type = "button";
            button.innerHTML = "Dodaj";
            button.nameB = "buttonGroup";
            button.id = "addProfile" + i;
            button.setAttribute("onclick","addProfile(\"" + element.ssid + "\");");
            td.appendChild(button);
            tr.appendChild(td);
            tbody.appendChild(tr);
        })
      })
}

function removeTable(){
    document.querySelector("#availableWifiTable").remove();
    document.getElementById('searchWifi').classList.remove("btn-danger");
    document.getElementById('searchWifi').classList.add("btn-success");
    document.getElementById('searchWifi').innerHTML = "Szukaj";
    document.getElementById('searchWifi').setAttribute("onclick", "askJsonAvailableWifi();");
}

function addProfile(profile){
    document.querySelector("#SSID").value = (profile);
}

let harm
function askJsonWeekHarm() {
    fetch("/json/weekDayAutomation.json")
      .then(results => results.json())
      .then(data => {harm = data.weekDayAutomation;

        var weekDay = {0: "Sun", 1: "Mon", 2: "Tue", 3: "Wed", 4: "Thu", 5: "Fri", 6: "Sat"}    
        let toggle = "#optionTypeHarm";
        let state =".state";
        let time =".time";
        let harmon ="harm";
        harm.forEach(element =>{
            let day = weekDay[element.id];
            let fH = element.startTimeHours;
            let currentDay = document.querySelector(toggle+day.toString());
            element.isActive?currentDay.checked = true:currentDay.checked = false;
            boxCheckHarmDay(state+day, time+day, harmon+day);

            let fromM ="#fromM-";
            let fromH ="#fromH-";
            let toH ="#toH-";
            let toM ="#toM-";
            document.querySelector(fromH+day.toString()).value = element.startTimeHours;
            document.querySelector(fromM+day.toString()).value= element.startTimeMinutes;
            document.querySelector(toH+day.toString()).value= element.stopTimeHours;
            document.querySelector(toM+day.toString()).value= element.stopTimeMinutes;
            console.log();
        })
    })
}

function ValidateIPaddress(ipaddress, id) {  
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
    let ident = "#" + id.id;
    document.querySelector(ident).style = "border-color: green;";
    return true;
  }  
    let ident = "#" + id.id;
    document.querySelector(ident).style = "border-color: red;";
    id.value ="";
    return false;
} 

function sendJsonSm(){
  if (document.querySelector("#smType").checked == true){
    let isSlave = false;
    let count = $("div[id^=remSla]").length
          var slaveListJson = {"isSlave": isSlave,
          "slaveList": []}
    for(var i = 0; i < count; i++) {
      addressIp ={addressIP: document.querySelector("#f" + i).value};
      slaveListJson.slaveList.push(addressIp);  
    }  
    console.log("Tryb master ", JSON.stringify(slaveListJson));
    console.log("Tryb master ", slaveListJson);
  }
  else{
    let isSlave = true;
    let count = $("div[id^=remSla]").length
          var slaveListJson = {"isSlave": isSlave,
          "slaveList": []}
    for(var i = 0; i < count; i++) {
      addressIp ={addressIP: document.querySelector("#f" + i).value};
      slaveListJson.slaveList.push(addressIp);  
    }  
    console.log("Tryb slave ", JSON.stringify(slaveListJson));
    console.log("Tryb slave ", slaveListJson);
  }
}

function sendJsonTime(){
  let tz = document.querySelector("#timeZoneSelect").value;
  let ntpServer = document.querySelector("#ntp").value;
  let ntpRefresh = document.querySelector("#refNtp").value;
  if (document.querySelector("#DST").checked == true){
  let dst = 1;
    var ntpCfg = {
      "daySavingTime": dst,
      "timeZone": tz / 3600,
      "serverNTP": ntpServer,
      "requestFrequency": parseInt(ntpRefresh, 10)
    }
    console.log(JSON.stringify(ntpCfg));
  }
  else{
  let dst = 0;
  var ntpCfg = {
    "daySavingTime": dst,
    "timeZone": tz / 3600,
    "serverNTP": ntpServer,
    "requestFrequency": parseInt(ntpRefresh, 10)
  }
  console.log(JSON.stringify(ntpCfg));
  }
}

function sendJsonD2d(){
  let lo = document.querySelector("#inlineFormInputGroupLo").value;
  let la = document.querySelector("#inlineFormInputGroupLa").value;

  let fH = document.querySelector("#d2dfH").value;
  let fM = document.querySelector("#d2dfM").value;
  let tH = document.querySelector("#d2dtH").value;
  let tM = document.querySelector("#d2dtM").value;

    var d2dCfg = {
      "currentLocationLongitude": parseInt(lo, 10),
      "currentLocationLatitude": parseInt(la, 10),
      "dusk2DawnHoursStartDelay": parseInt(fH, 10),
      "dusk2DawnHoursStopDelay": parseInt(fM, 10),
      "dusk2DawnMinutesStartDelay": parseInt(tH, 10),
      "dusk2DawnMinutesStopDelay": parseInt(tM, 10)
    }
    console.log(JSON.stringify(d2dCfg));
}

function sendJsonWifiProfiles(){
    let count = $("tr[id^=tr]").length
    console.log(count);
    var wifiProfilesList = {"wifiKnownProfiles": []}
    for(var i = 0; i < count; i++) {
      let knownProfile={};
      knownProfile.SSID = document.querySelector("#ssid" + i).innerHTML;
      knownProfile.password = document.querySelector("#pass" + i).innerHTML;
      if (document.querySelector("#wifiBox" + i).checked == true){
        knownProfile.isSelected = true
      }
      else {
        knownProfile.isSelected = false
      }
      wifiProfilesList.wifiKnownProfiles.push(knownProfile);  
    }  
    console.log(JSON.stringify(wifiProfilesList));
    document.querySelector("#tableWifi").remove();
}

let dayOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat" ]
function saveHarm() {
  var weekAutomation = {"weekDayAutomation": []}
  for (let i = 0; i < dayOfWeek.length; i++){
  let day = {};
  let fromH="#fromH-"+dayOfWeek[i];
  let fromM="#fromM-"+dayOfWeek[i];
  let toH="#toH-"+dayOfWeek[i];
  let toM="#toM-"+dayOfWeek[i];
  let optionTypeHarm = "#optionTypeHarm"+dayOfWeek[i];
  day.id = i;
  if (document.querySelector(optionTypeHarm).checked == true) {
    day.isActive = true
  }
  else {
    day.isActive = false
  }
  day.startTimeHours = document.querySelector(fromH).value;
  day.startTimeMinutes = document.querySelector(fromM).value;
  day.stopTimeHours = document.querySelector(toH).value;
  day.stopTimeMinutes = document.querySelector(toM).value;
  weekAutomation.weekDayAutomation.push(day);
  }
  console.log(JSON.stringify(weekAutomation));
}

const formData = new FormData();
formData.append("daviceName", "nameVal");
function saveWork() {
  var cfg = {};
  cfg.deviceName = "Light Automation - Master"
  if ($('#typeOf').prop('checked')){
    formData.append("isLightAutomationEnabled", true);
    cfg.isLightAutomationEnabled = true;
  } 
  else{
    formData.append("isLightAutomationEnabled", false);
    cfg.isLightAutomationEnabled = false;
  };
  if ($('#harmOn').prop('checked')){
    formData.append("isDusk2DawnEnabled", true);
    cfg.isDusk2DawnEnabled = true;
  } else{
    formData.append("isDusk2DawnEnabled", false);
    cfg.isDusk2DawnEnabled = false;
  };
  console.log(JSON.stringify(cfg));
  askJson();
}

// 

function jsonpostRead(index) {
  fetch("/", jsonReadPost(configList[index]))
      .then(res => res.json())
      .then(data => {
          console.log(data);
      }).catch((error) => {
          console.error('Error:', error);
      });
}
let testujemyFunkcje = jsonPost();
console.log(testujemyFunkcje);

function jsonPost() {
  fetch("/", jsonReadPost("/json/cfg"))
      .then(res => res.json())
      .then(data => {
          console.log(data);
          return data;

      }).catch((error) => {
          console.error('Error:', error);
      });
    }

let configList = [
  "availableWifi",
  "cfg",
  "deviceConfig", 
  "dusk2DawnConfig", 
  "ipApi", 
  "ntpConfig", 
  "pinConfig", 
  "serverConfig", 
  "slaveList", 
  "usersList", 
  "weatherApiConfig", 
  "weatherApiRead", 
  "weekDayAutomation",
  "wifiConfig", 
  "wifiProfilesList"
];

function jsonReadPost(config) {
  let param = {        headers: {
          "content-type": "application/json",
          "jsonRead": config
      },
      method: "POST"
  }
  return param;
};