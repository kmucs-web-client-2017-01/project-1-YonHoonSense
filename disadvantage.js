var answer = prompt("확인하려면 \"예\"를 입력해주세요.");
while(answer!="예") {
  answer = prompt("확인하려면 \"예\"를 입력해주세요.");
}
console.log("확인 되었습니다.")

setInterval(function(){
  $("#di1").css("color", "blue");
},499);

setInterval(function(){
  $("#di1").css("color", "red");
},1000);
