export function generateRandomNumber() {
  const candidata = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // 랜덤하게 섞어서 4자리 숫자만 이용
  const pickedNumbers = shuffle(candidata).splice(0, 4);

  return pickedNumbers;
}

function shuffle(array) {
  // Math.random(), 0 ~ 1까지 랜덤 선택

  // array.sort(() => 음수를 반환하면 내림차순 정렬, 양수를 반환하면 오름차순 정렬)
  return array.sort(() => {
    return Math.random() - 0.5;
  });
}
