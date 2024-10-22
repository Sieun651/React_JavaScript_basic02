// function returnFalse() {
//     console.log("False 함수")
//   return false;
// }

// function returnTrue() {
//     console.log("Ture 함수")
//   return True;
// }

// console.log(returnFalse() && returnTrue());
// console.log(returnFalse() || returnTrue());

// 단락 평가 활용 사례
/*
function PrintName(person) {
  if (!person) {
    console.log("person에 값이 없음");
    return;
  }
  console.log(person.name);
}
*/
// 위 코드를 간단하게 변경
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이영희" });
