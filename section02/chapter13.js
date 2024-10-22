function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

// const p = add10(0);
// p.then((result) => {
//   console.log(result);

//   const newP = add10(result);
//   newP.then((result) => {
//     console.log(result);
//   });
// });

// callback 지옥을 막을 수 있는 방법
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
/*

const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수
  // executor

  //   setTimeout(() => {
  //     console.log("안녕");
  //     reject("왜 실패했는지 이유...");
  //     // resolve("안녕");
  //   }, 2000);
  // });

  // console.log(promise);

  // setTimeout(() => {
  //   console.log(promise);
  // }, 3000);

  setTimeout(() => {
    const num = null;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 2000);
});

// then 메서드 : promise로 관리하는 비동기 값의 결과 값을 자유롭게 불러서 사용할 수 있음
// 성공했을 때만 호출함
// -> 그 후에
// promise에서 then과 catch를 같이 쓰는걸 promisechaning이라고 함
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// promise.catch((error) => {
//   console.log(error);
// });

*/
