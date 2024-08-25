function recall(){
  var totalvoters= document.getElementById("total_people").value;
  var votes= document.getElementById("votes").value;
  var msg="";
  var phase1,phase2,phase3=0;
  phase1= parseInt(totalvoters *.01);
  phase2= parseInt(totalvoters *.10);
  phase3= parseInt(totalvoters *.25);
  
  msg += "第一階段："+phase1+" 票<br>";
  msg += "第二階段："+phase2+" 票<br>";
  msg += "第三階段："+phase3+" 票<br>";
  
  if(votes<phase1){
  msg +=("距離第一階段還差"+(phase1-votes)+"票");
}else if(votes<phase2){
  msg +=("距離第二階段還差"+(phase2-votes)+"票");
}else{
  msg +=("距離第三階段還差"+(phase3-votes)+"票");
}
  document.getElementsByTagName("div")[0].innerHTML = msg;
}