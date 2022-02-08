function openNav() {
    document.getElementById("res-nav").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("res-nav").style.display = "none";
  }
function openNav2() {
    document.getElementById("right-sidebar").style.display = "block";
  }
  
  function closeNav2() {
    document.getElementById("right-sidebar").style.display = "none";
  }

// switch function 
function leftswitch(){
  document.getElementById("movebox1").style.display = "block";
  document.getElementById("movebox1").style.left = "10px";
  document.getElementById("movebox2").style.display = "none";
  document.getElementById("stack").style.display = "block";
  document.getElementById("unstack").style.display = "none";
}
function rightswitch(){
  document.getElementById("movebox1").style.display = "none";
  document.getElementById("movebox2").style.display = "block";
  document.getElementById("movebox2").style.left = "130px";
  document.getElementById("stack").style.display = "none";
  document.getElementById("unstack").style.display = "block";
}
function bond(){
  document.getElementById("movebond1").style.display = "block";
  document.getElementById("movebond1").style.left = "10px";
  document.getElementById("movebond2").style.display = "none";
  document.getElementById("bond-title-1").style.display = "block";
  document.getElementById("bond-title-2").style.display = "none";
  document.getElementById("bond-a").style.display = "block";
  document.getElementById("bond-b").style.display = "none";
}
function mybond(){
  document.getElementById("movebond1").style.display = "none";
  document.getElementById("movebond2").style.display = "block";
  document.getElementById("movebond2").style.left = "90px";
  document.getElementById("bond-title-1").style.display = "none";
  document.getElementById("bond-title-2").style.display = "block";
  document.getElementById("bond-a").style.display = "none";
  document.getElementById("bond-b").style.display = "block";
}