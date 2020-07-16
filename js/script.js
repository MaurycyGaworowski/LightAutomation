function startPage(){
   document.querySelector('.user').classList.add('d-none');
   document.querySelector('.admin').classList.add('d-none');
   document.querySelector('.logout').classList.add('d-none');
};

function credCheck(){
    document.querySelector('.login').classList.add('d-none');
    document.querySelector('.user').classList.remove('d-none');
    document.querySelector('.logout').classList.remove('d-none');
   
};

function adminZone() {
    document.querySelector('.admin').classList.remove('d-none');

}

function logout() {
    document.querySelector('.user').classList.add('d-none');
    document.querySelector('.admin').classList.add('d-none');
    document.querySelector('.logout').classList.add('d-none');
    document.querySelector('.login').classList.remove('d-none');
}

function saveHarm() {
    alert('Zapisano ustawienia qrła');
}

function saveWork() {
    alert('Zastosowano wybrane opcje qrła');
}

function newSSID() {
    document.querySelector('.newSSID').classList.remove('d-none');
}

function dropSSID() {
    document.querySelector('.newSSID').classList.add('d-none');
    document.getElementById('SSID').value = '';
    document.getElementById('PASS').value = '';
}

function optionTypeCheck(){
    var checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        console.log("ON");
        document.querySelector('.setup').innerHTML = 'Sterowanie zgodnie z harmonogramem';
        document.querySelector('.settings').classList.remove('d-none');
        // document.querySelector('.harmonogram').classList.remove('d-none');
        } else {
        // Checkbox is not checked..
        console.log("OFF")
        document.querySelector('.setup').innerHTML = 'Sterowanie za pomocą czujnika ruchu';
        document.querySelector('.settings').classList.add('d-none');
        // document.querySelector('.harmonogram').classList.add('d-none');
    }
});
}

function boxCheck() {
    var checkbox = document.querySelector("input[name=checkbox]");
    if (checkbox.checked == true){
    console.log('tak');
    document.querySelector('.setup').innerHTML = 'Sterowanie zgodnie z harmonogramem';
    document.querySelector('.settings').classList.remove('d-none');
    document.querySelector('.harmonogram').classList.remove('d-none');
  } else {
    console.log('nie');
    document.querySelector('.setup').innerHTML = 'Sterowanie za pomocą czujnika ruchu';
    document.querySelector('.settings').classList.add('d-none');
    document.querySelector('.harmonogram').classList.add('d-none');
  }
}

function optionTypeCheckSun(){
    var checkboxsun = document.querySelector("input[name=checkboxSun]");

checkboxsun.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        console.log("ON sun");
        // document.querySelector('.setup').innerHTML = 'Sterowanie zgodnie z harmonogramem';
        document.querySelector('.harmonogram').classList.add('d-none');
        } else {
        // Checkbox is not checked..
        console.log("OFF sun")
        // document.querySelector('.setup').innerHTML = 'Sterowanie za pomocą czujnika ruchu';
        document.querySelector('.harmonogram').classList.remove('d-none');
    }
});
}

function boxCheckSun() {
    var checkboxsun = document.querySelector("input[name=checkboxSun]");
    if (checkboxsun.checked == true){
    console.log('tak');
    // document.querySelector('.setup').innerHTML = 'Sterowanie zgodnie z harmonogramem';
    document.querySelector('.harmonogram').classList.add('d-none');
    } else {
    console.log('nie');
    // document.querySelector('.setup').innerHTML = 'Sterowanie za pomocą czujnika ruchu';
    document.querySelector('.harmonogram').classList.remove('d-none');
  }
}


// Poniedziałek

function optionTypeCheckHarmMon(){
    var checkboxHarmMon = document.querySelector("input[name=harmMon]");

checkboxHarmMon.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        console.log("ON");
        document.querySelector('.stateMon').innerHTML = 'Zakres godzin';
        document.querySelector('.timeMon').classList.remove('d-none');
        } else {
        // Checkbox is not checked..
        console.log("OFF")
        document.querySelector('.stateMon').innerHTML = 'Automatycznie';
        document.querySelector('.timeMon').classList.add('d-none');
    }
});
}

function boxCheckHarmMon() {
    var checkboxHarmMon = document.querySelector("input[name=harmMon]");
    if (checkboxHarmMon.checked == true){
    console.log('tak');
    document.querySelector('.stateMon').innerHTML = 'Zakres godzin';
    document.querySelector('.timeMon').classList.remove('d-none');
  } else {
    console.log('nie');
    document.querySelector('.stateMon').innerHTML = 'Automatycznie';
    document.querySelector('.timeMon').classList.add('d-none');
  }
}

// Poniedziałek
// Wtorek

function optionTypeCheckHarmTue(){
    var checkboxHarmTue = document.querySelector("input[name=harmTue]");

checkboxHarmTue.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        console.log("ON");
        document.querySelector('.stateTue').innerHTML = 'Zakres godzin';
        document.querySelector('.timeTue').classList.remove('d-none');
        } else {
        // Checkbox is not checked..
        console.log("OFF")
        document.querySelector('.stateTue').innerHTML = 'Automatycznie';
        document.querySelector('.timeTue').classList.add('d-none');
    }
});
}

function boxCheckHarmTue() {
    var checkboxHarmTue = document.querySelector("input[name=harmTue]");
    if (checkboxHarmTue.checked == true){
    console.log('tak');
    document.querySelector('.stateTue').innerHTML = 'Zakres godzin';
    document.querySelector('.timeTue').classList.remove('d-none');
  } else {
    console.log('nie');
    document.querySelector('.stateTue').innerHTML = 'Automatycznie';
    document.querySelector('.timeTue').classList.add('d-none');
  }
}

// Wtorek
// środa

function optionTypeCheckHarmWed(){
    var checkboxHarmWed = document.querySelector("input[name=harmWed]");

checkboxHarmWed.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        console.log("ON");
        document.querySelector('.stateWed').innerHTML = 'Zakres godzin';
        document.querySelector('.timeWed').classList.remove('d-none');
        } else {
        // Checkbox is not checked..
        console.log("OFF")
        document.querySelector('.stateWed').innerHTML = 'Automatycznie';
        document.querySelector('.timeWed').classList.add('d-none');
    }
});
}

function boxCheckHarmWed() {
    var checkboxHarmWed = document.querySelector("input[name=harmWed]");
    if (checkboxHarmWed.checked == true){
    console.log('tak');
    document.querySelector('.stateWed').innerHTML = 'Zakres godzin';
    document.querySelector('.timeWed').classList.remove('d-none');
  } else {
    console.log('nie');
    document.querySelector('.stateWed').innerHTML = 'Automatycznie';
    document.querySelector('.timeWed').classList.add('d-none');
  }
}

// środa
// Czwartek

function optionTypeCheckHarmThu(){
    var checkboxHarmThu = document.querySelector("input[name=harmThu]");

checkboxHarmThu.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        console.log("ON");
        document.querySelector('.stateThu').innerHTML = 'Zakres godzin';
        document.querySelector('.timeThu').classList.remove('d-none');
        } else {
        // Checkbox is not checked..
        console.log("OFF")
        document.querySelector('.stateThu').innerHTML = 'Automatycznie';
        document.querySelector('.timeThu').classList.add('d-none');
    }
});
}

function boxCheckHarmThu() {
    var checkboxHarmThu = document.querySelector("input[name=harmThu]");
    if (checkboxHarmThu.checked == true){
    console.log('tak');
    document.querySelector('.stateThu').innerHTML = 'Zakres godzin';
    document.querySelector('.timeThu').classList.remove('d-none');
  } else {
    console.log('nie');
    document.querySelector('.stateThu').innerHTML = 'Automatycznie';
    document.querySelector('.timeThu').classList.add('d-none');
  }
}

// Czwartek
// Piątek
function optionTypeCheckHarmFri(){
    var checkboxHarmFri = document.querySelector("input[name=harmFri]");

checkboxHarmFri.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        console.log("ON");
        document.querySelector('.stateFri').innerHTML = 'Zakres godzin';
        document.querySelector('.timeFri').classList.remove('d-none');
        } else {
        // Checkbox is not checked..
        console.log("OFF")
        document.querySelector('.stateFri').innerHTML = 'Automatycznie';
        document.querySelector('.timeFri').classList.add('d-none');
    }
});
}

function boxCheckHarmFri() {
    var checkboxHarmFri = document.querySelector("input[name=harmFri]");
    if (checkboxHarmFri.checked == true){
    console.log('tak');
    document.querySelector('.stateFri').innerHTML = 'Zakres godzin';
    document.querySelector('.timeFri').classList.remove('d-none');
  } else {
    console.log('nie');
    document.querySelector('.stateFri').innerHTML = 'Automatycznie';
    document.querySelector('.timeFri').classList.add('d-none');
  }
}
// Piątek
// Sobota
function optionTypeCheckHarmSat(){
    var checkboxHarmSat = document.querySelector("input[name=harmSat]");

checkboxHarmSat.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        console.log("ON");
        document.querySelector('.stateSat').innerHTML = 'Zakres godzin';
        document.querySelector('.timeSat').classList.remove('d-none');
        } else {
        // Checkbox is not checked..
        console.log("OFF")
        document.querySelector('.stateSat').innerHTML = 'Automatycznie';
        document.querySelector('.timeSat').classList.add('d-none');
    }
});
}

function boxCheckHarmSat() {
    var checkboxHarmSat = document.querySelector("input[name=harmSat]");
    if (checkboxHarmSat.checked == true){
    console.log('tak');
    document.querySelector('.stateSat').innerHTML = 'Zakres godzin';
    document.querySelector('.timeSat').classList.remove('d-none');
  } else {
    console.log('nie');
    document.querySelector('.stateSat').innerHTML = 'Automatycznie';
    document.querySelector('.timeSat').classList.add('d-none');
  }
}
// Sobota
// Niedziela
function optionTypeCheckHarmSun(){
    var checkboxHarmSun = document.querySelector("input[name=harmSun]");

checkboxHarmSun.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        console.log("ON");
        document.querySelector('.stateSun').innerHTML = 'Zakres godzin';
        document.querySelector('.timeSun').classList.remove('d-none');
        } else {
        // Checkbox is not checked..
        console.log("OFF")
        document.querySelector('.stateSun').innerHTML = 'Automatycznie';
        document.querySelector('.timeSun').classList.add('d-none');
    }
});
}

function boxCheckHarmSun() {
    var checkboxHarmSun = document.querySelector("input[name=harmSun]");
    if (checkboxHarmSun.checked == true){
    console.log('tak');
    document.querySelector('.stateSun').innerHTML = 'Zakres godzin';
    document.querySelector('.timeSun').classList.remove('d-none');
  } else {
    console.log('nie');
    document.querySelector('.stateSun').innerHTML = 'Automatycznie';
    document.querySelector('.timeSun').classList.add('d-none');
  }
}
// Niedziela

$(document).ready(function(){
    var maxField = 10; //Input fields increment limitation
    var addButton = $('.add_button'); //Add button selector
    var wrapper = $('.field_wrapper'); //Input field wrapper
    var fieldHTML = '<div><div class="row margin-top-10"><div class="col-3 h-auto-text-center"><input class="form-control" type="text" name="field_name[]" value=""/></div><div class="col-1 h-auto-text-center"><a href="javascript:void(0);" class="remove_button margLeft" title="Usuń"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/><path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/></svg></a></div></div></div>'; //New input field html 
    var x = 1; //Initial field counter is 1
    
    //Once add button is clicked
    $(addButton).click(function(){
        //Check maximum number of input fields
        if(x < maxField){ 
            x++; //Increment field counter
            $(wrapper).append(fieldHTML); //Add field html
        }
    });
    
    //Once remove button is clicked
    $(wrapper).on('click', '.remove_button', function(e){
        e.preventDefault();
        $(this).parent('div').remove(); //Remove field html
        x--; //Decrement field counter
    });
});

function smTypeCheck(){
    var checkbox = document.querySelector("input[name=smType]");

checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        console.log("ON ms");
        document.querySelector('.smType').innerHTML = 'Tryb slave';
        document.querySelector('.addSlave').classList.remove('d-none');
        // document.querySelector('.harmonogram').classList.remove('d-none');
        } else {
        // Checkbox is not checked..
        console.log("OFF ms")
        document.querySelector('.smType').innerHTML = 'Tryb master';
        document.querySelector('.addSlave').classList.add('d-none');
        // document.querySelector('.harmonogram').classList.add('d-none');
    }
});
}

function boxChecksmType() {
    var checkbox = document.querySelector("input[name=smType]");
    if (checkbox.checked == true){
    console.log('tak ms');
    document.querySelector('.smType').innerHTML = 'Tryb slave';
    document.querySelector('.addSlave').classList.remove('d-none');
    // document.querySelector('.harmonogram').classList.remove('d-none');
  } else {
    console.log('nie ms');
    document.querySelector('.smType').innerHTML = 'Tryb master';
    document.querySelector('.addSlave').classList.add('d-none');
    // document.querySelector('.harmonogram').classList.add('d-none');
  }
}