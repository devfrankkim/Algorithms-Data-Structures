/*
    선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
    학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라 고 했습니다. 
    선생님이 가지고 있는 예산은 한정되어 있습니다.
    현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요. 
    선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 
    배송비는 할인에 포함되지 않습니다.
*/

// 최대 몇 명의 학생에게 선물을 사줄 수 있는지
// 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰
// 상품가격 100000
// 배송비 max 100000
// 가격은 짝수만 가능.

let max = [5, 28];

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

function getSolution(arr) {
  let count = arr.length;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for ([a, b] of arr) {
      sum += a + b;
    }
  }

  return count;
}

getSolution(arr);

// pesduo code {
// 다 돌려서 < 28인지 확인한다. 그러면 5명 전부 가능하기 때문.
// 28 이상이면 제일 비싼새끼부터 한명씩 빼고, 다시 돌려서 맞을때까지 확인한다.

// }

function solution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;

    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

console.log(solution(28, arr));
