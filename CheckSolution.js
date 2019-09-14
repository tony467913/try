var modeButtons = document.querySelectorAll(".mode");

var pw_result = document.getElementById('PW_result');
var sh_result = document.getElementById('SH_result');
var xo_result = document.getElementById('XO_result');
var eqxox_result = document.getElementById('EQXOX_result');
var uneqxox_result = document.getElementById('UNEQXOX_result');
var pw_note = document.getElementById('PW_note')
var xo_note = document.getElementById('XO_note')
var sh_note = document.getElementById('SH_note')
var eqxox_note = document.getElementById('EQXOX_note')
var uneqxox_note = document.getElementById('UNEQXOX_note')


init();

function init(){
  setupModeButtons();
  reset();
}


function setupModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      // this.textContent === "Vista" ? 
      if (this.textContent=="Vista") {
        document.getElementById('PW_btn').onclick = function() {getPW_Result();}
        document.getElementById('SH_btn').onclick = function() {getSH_Result();}
        document.getElementById('XO_btn').onclick = function() {getXO_Result();}
        document.getElementById('EQXOX_btn').onclick = function() {getEQXOX_Result();}
        document.getElementById('UNEQXOX_btn').onclick = function() {getUNEQXOX_Result();}
      } else {
        document.getElementById('PW_btn').onclick = function() {getVP_PW_Result();}
        document.getElementById('SH_btn').onclick = function() {getVP_SH_Result();}
        document.getElementById('XO_btn').onclick = function() {getVP_XO_Result();}
        document.getElementById('EQXOX_btn').onclick = function() {getVP_EQXOX_Result();}
        document.getElementById('UNEQXOX_btn').onclick = function() {getVP_UNEQXOX_Result();}
      }
      reset();
    });
  }
}


function getPW_Result(){
	var result = document.getElementById('PW_result');
	var width = document.getElementById('PW_w').value;
	var height = document.getElementById('PW_h').value;
  var note = document.getElementById('PW_note')
  if (12<=width && width<=72 && 12<=height && height<=72) {
  	 result.innerHTML="PASS";
      if (width*height/144<=15) {
        note.innerHTML="Gold Label + 1/8 glass";
      }
      else{
        note.innerHTML="Gold Label + 3/16 glass";
      }
      
	} 
	else {
  		if (7<=width && width<=100 && 7<=height && 
  			height<=100 && width*height/144<=50) {
        result.innerHTML="PASS";
        if (7<=width && width<=80 && 7<=height && 
        height<=80 && width*height/144<=20) {
          note.innerHTML="No Gold Label + 1/8 glass";        
      }
        else{
          if (width*height/144<=33){
            note.innerHTML="No Gold Label + 3/16 glass";
          }
          else{
            note.innerHTML="No Gold Label + 3/16 Tempered glass";
          }
        }       
    }       
  		else {
  			result.innerHTML="FAIL";
        note.innerHTML="";
  	}}
}

function getVP_PW_Result(){
  var result = document.getElementById('PW_result');
  var width = document.getElementById('PW_w').value;
  var height = document.getElementById('PW_h').value;
  var note = document.getElementById('PW_note')
  if (15.5<=width && width<=72 && 15.5<=height && height<=72) {
     result.innerHTML="PASS";
      if (width*height/144<=15) {
        note.innerHTML="Gold Label + 1/8 glass";
      }
      else{
        note.innerHTML="Gold Label + 3/16 glass";
      }
      
  } 
  else {
    result.innerHTML="FAIL";
    note.innerHTML="";
  }
}

function getXO_Result(){
	var result = document.getElementById('XO_result');
	var width = document.getElementById('XO_w').value;
	var height = document.getElementById('XO_h').value;
  var note = document.getElementById('XO_note')
  if (12<=width && width<=72 && 12<=height && height<=72) {
     result.innerHTML="PASS";
      if (width*height/144/2<=15) {
        note.innerHTML="Gold Label + 1/8 glass";
      }
      else{
        note.innerHTML="Gold Label + 1/8 Tempered glass";
      }
      
  } 
  else {
      if (16<=width && width<=140 && 9.375<=height && 
        height<=80 && width*height/144/2<=18) {
        result.innerHTML="PASS";
        if (width*height/144/2<=15) {
          note.innerHTML="No Gold Label + 1/8 glass";        
      }
        else{
          note.innerHTML="No Gold Label + 1/8 Tempered glass";   
        }       
    }       
      else {
        result.innerHTML="FAIL";
        note.innerHTML="";
    }}
}

function getVP_XO_Result(){
  var result = document.getElementById('PW_result');
  var width = document.getElementById('PW_w').value;
  var height = document.getElementById('PW_h').value;
  var note = document.getElementById('PW_note')
  if (15.5<=width && width<=72 && 15.5<=height && height<=72) {
     result.innerHTML="PASS";
      if (width*height/144<=15) {
        note.innerHTML="Gold Label + 1/8 glass";
      }
      else{
        note.innerHTML="Gold Label + 3/16 glass";
      }
      
  } 
  else {
    result.innerHTML="FAIL";
    note.innerHTML="";
  }
}

function getEQXOX_Result(){
	var result = document.getElementById('EQXOX_result');
	var width = document.getElementById('EQXOX_w').value;
	var height = document.getElementById('EQXOX_h').value;
  var note = document.getElementById('EQXOX_note')
  if (48<=width && width<=120 && 12<=height && height<=60) {
     result.innerHTML="PASS";
      if (width*height/144/3<=15) {
        note.innerHTML="Gold Label + 1/8 glass";
      }
      else{
        note.innerHTML="Gold Label + 1/8 Tempered glass";
      }
      
  } 
  else {
      if (36<=width && width<=140 && 9.375<=height && 
        height<=80 && width*height/144/3<=18) {
        result.innerHTML="PASS";
        if (width*height/144/3<=15) {
          note.innerHTML="No Gold Label + 1/8 glass";        
      }
        else{
          note.innerHTML="No Gold Label + 1/8 Tempered glass";   
        }       
    }       
      else {
        result.innerHTML="FAIL";
        note.innerHTML="";
    }}
}

function getVP_EQXOX_Result(){
  var result = document.getElementById('PW_result');
  var width = document.getElementById('PW_w').value;
  var height = document.getElementById('PW_h').value;
  var note = document.getElementById('PW_note')
  if (15.5<=width && width<=72 && 15.5<=height && height<=72) {
     result.innerHTML="PASS";
      if (width*height/144<=15) {
        note.innerHTML="Gold Label + 1/8 glass";
      }
      else{
        note.innerHTML="Gold Label + 3/16 glass";
      }
      
  } 
  else {
    result.innerHTML="FAIL";
    note.innerHTML="";
  }
}

function getUNEQXOX_Result(){
  var result = document.getElementById('UNEQXOX_result');
  var width = document.getElementById('UNEQXOX_w').value;
  var height = document.getElementById('UNEQXOX_h').value;
  var note = document.getElementById('UNEQXOX_note')
  if (65<=width && width<=120 && 12<=height && height<=60) {
     result.innerHTML="PASS";
      if (width*height/144/2<=15) {
        note.innerHTML="Gold Label + 1/8 glass";
      }
      else{
        note.innerHTML="Gold Label + FIXED:3/16 glass";
      }
      
  } 
  else {
      if (48<=width && width<=140 && 9.375<=height && 
        height<=80 && width*height/144/4<=18 && width*height/144/2<=50) {
        result.innerHTML="PASS";
        if (width*height/144/2<=15) {
          note.innerHTML="No Gold Label + 1/8 glass";        
      }
        if (15<width*height/144/2 && width*height/144/4<=15) {
          note.innerHTML="No Gold Label + FIXED:3/16 glass";   
      }   
        if (15<width*height/144/2 && 33>=width*height/144/2 && width*height/144/4<=18
          && width*height/144/4>=15) {
          note.innerHTML="No Gold Label + FIXED:3/16 glass + VENT:1/8 TEMP";   
      }    
        if (33<width*height/144/2 && 50>=width*height/144/2 && width*height/144/4<=18
          && width*height/144/4>15) {
          note.innerHTML="No Gold Label + FIXED:3/16 TEMP + VENT:1/8 TEMP";   
      }
    }       
      else {
        result.innerHTML="FAIL";
        note.innerHTML="";
    }}
}

function getVP_UNEQXOX_Result(){
  var result = document.getElementById('PW_result');
  var width = document.getElementById('PW_w').value;
  var height = document.getElementById('PW_h').value;
  var note = document.getElementById('PW_note')
  if (15.5<=width && width<=72 && 15.5<=height && height<=72) {
     result.innerHTML="PASS";
      if (width*height/144<=15) {
        note.innerHTML="Gold Label + 1/8 glass";
      }
      else{
        note.innerHTML="Gold Label + 3/16 glass";
      }
      
  } 
  else {
    result.innerHTML="FAIL";
    note.innerHTML="";
  }
}

function getSH_Result(){
	var result = document.getElementById('SH_result');
	var width = document.getElementById('SH_w').value;
	var height = document.getElementById('SH_h').value;
  var note = document.getElementById('SH_note')
  if (12<=width && width<=47 && 24<=height && height<=84) {
     result.innerHTML="PASS";
     note.innerHTML="Gold Label + 1/8 glass";
  } 
  else {
      if (10<=width && width<=56 && 20<=height && 
        height<=124 && width*height/144<=27.41667) {
        result.innerHTML="PASS";
        note.innerHTML="No Gold Label + 1/8 glass";        
      }             
      else {
        result.innerHTML="FAIL";
        note.innerHTML="";
    }}
}

function getVP_SH_Result(){
  var result = document.getElementById('PW_result');
  var width = document.getElementById('PW_w').value;
  var height = document.getElementById('PW_h').value;
  var note = document.getElementById('PW_note')
  if (15.5<=width && width<=72 && 15.5<=height && height<=72) {
     result.innerHTML="PASS";
      if (width*height/144<=15) {
        note.innerHTML="Gold Label + 1/8 glass";
      }
      else{
        note.innerHTML="Gold Label + 3/16 glass";
      }
      
  } 
  else {
    result.innerHTML="FAIL";
    note.innerHTML="";
  }
}

function reset(){
 pw_result.innerHTML="";
 sh_result.innerHTML="";
 xo_result.innerHTML="";
 eqxox_result.innerHTML="";
 uneqxox_result.innerHTML="";
 pw_note.innerHTML="";
 sh_note.innerHTML="";
 xo_note.innerHTML="";
 eqxox_note.innerHTML="";
 uneqxox_note.innerHTML=""; 

}


