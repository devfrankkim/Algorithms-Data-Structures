/*
 중요개념!

  sort 메서드는 원본을 바꾼다.
  겹치는 부분 제거. //  (i === j)  같은 횟수 index skip 
  if (i === j) break; =>  해당 조건문 블록과 그 밖의 반복문 자체를 탈출함.
  if (i === j) continue; =>  아래에 있는 실행해야 하는 문장들을 건너 뛰고, 다음 반복을 시작함.
  answer = Math.max(answer, cnt); => 턴 마다 돌면서 비교를 해줌.

  부족한 개념!
   스코프 생각하며, 다중 for문 자유롭게 사용할것 
   스코프 생각하며, 변수 처리해줄것.

   ex) 반복문을 돌면서, 이전 반복문과 다음 반복문 값을 비교해서 저장할 변수를 생각해야함. (비교 후 저장)
   ----> answer = Math.max(answer, cnt);

   반복문 겹치는 index부분 제거. if (i === j) continue; 
   겹치는 index 제거 하는 이유: 똑같은 작업을 하지 않기 위함.

*/

// 최대 몇 명의 학생에게 선물을 사줄 수 있는지
// 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰
// 상품의 가격(product[i][0])과 상품의 배송료(product[i][1])는 [0]과 [1]에 들어있다

// 전체 로직: max budget에서 가격을 먼저 할인해주고, 나머지 가격을 계속 뺀다. -> 적자면 return answer

// if (i === j) continue; =>  같은 횟수 skip -> 할인 받은것을 고려함  ( 이 생각을 해내는게 관건 )
// 이미 할인 받은 상품은 건너 뛰고 다음 조건을 확인한다. ( 이 생각을 해내는게 관건 )
// 모든 상품이 한번씩은 다 할인받았다는 가정으로 계산해봐야 한다 ( 이 생각을 해내는게 관건 )
// (
// 남은 금액 차감 후 0 보다 크면 => 살 수 있는 상품 ++ (가장 중요한 포인트)
// 남은 금액으로 살 수 없다면 (적자) -> 전에 answer 비교후 => return new answer + break; (가장 중요한 포인트)

/* 
    pesduo code {
    다 돌려서 < 28인지 확인한다. 그러면 5명 전부 가능하기 때문.

    상품정보를 하나씩 돌면서 할인받는다고 가정해봄.
    [a, b]
    [a, b]
    ...

      for(i)
        budget = budget - (arr[i][0] / 2) + arr[i][1]
         for(j)
          // 겹치는 부분 제거 -> 다음 턴으로 넘감. 이미 받은 할인과 겹치지 않기 위해서.
            if(i===j) continue;

            const tmpSum = product[j][0] + product[j][1];
  }
*/

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

function solution(maxBudget, product) {
  let answer = 0;
  let numberOfProduct = product.length;

  // sort  -> 배열 [a + b]
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  /*
    0:(2) [2, 2]
    1:(2) [4, 3]
    2:(2) [4, 5]
    3:(2) [6, 6]
    4:(2) [10, 3]
  */

  // for of 로 돌면 안됨. 상품정보를 하나씩 돌면서 할인받는다고 가정해봄.
  for (let i = 0; i < numberOfProduct; i++) {
    // 남은금액 = (전체 가격 - [가격 / 2][배송비])
    let moneyAfterDiscount = maxBudget - (product[i][0] / 2 + product[i][1]);

    // 구매한 상품 수
    let cnt = 1;

    for (let j = 0; j < numberOfProduct; j++) {
      // 이미 위에서 한번 할인을 받았으면, 제외하고 다음 턴 돌리기.
      if (i === j) {
        continue;
      }

      const tmpSum = product[j][0] + product[j][1];

      // console.log("count", cnt);

      //  ============ 가격을 계속 뺀 후, 마지막 가격보다 작은걸로 비교함. ============
      // if (tmpSum <= moneyAfterDiscount) {
      // moneyAfterDiscount =
      //   moneyAfterDiscount - (product[j][0] + product[j][1]);
      // cnt++;
      // }

      //  ============ 가격을 계속 뺀 후, 적자일때까지 비교함. ============
      // 남은 금액 차감 후 0 보다 크면 => 살 수 있는 상품 ++
      // 남은 금액으로 살 수 없다면 -> answer와 비교 후 -> return answer + break;
      moneyAfterDiscount = moneyAfterDiscount - (product[j][0] + product[j][1]);

      if (-1 < moneyAfterDiscount) {
        cnt++;
        console.log("moneyAfterDiscount", moneyAfterDiscount, "cnt", cnt);
      } else {
        // ======== 적자일때 return new answer + break; => 다음 반복문으로 넘아가서, 새로운 할인 확인. ========
        console.log(
          "end",
          "count",
          cnt,
          "tmpSum",
          tmpSum,
          "j",
          j,
          "i",
          i,
          "moneyAfterDiscount",
          moneyAfterDiscount
        );
        answer = Math.max(answer, cnt);

        break;
      }
    }
  }
  return answer;
}

console.log(solution(28, arr));

// let maxBudget = [5, 28];

// function getSolution(arr) {
//   let count = arr.length;
//   let tmpSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for ([a, b] of arr) {
//       tmpSum += a + b;
//     }
//   }

//   return count;
// }

// getSolution(arr);

/*
    선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
    학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라 고 했습니다. 
    선생님이 가지고 있는 예산은 한정되어 있습니다.
    현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요. 
    선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 
    배송비는 할인에 포함되지 않습니다.
*/
