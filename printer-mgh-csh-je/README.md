#이해
1. location 은 priorities 배열의 인덱스 값을 의미한다.
2. priorities(출력 우선순위 값) 배열의 값은 1~9의 값만 가진다.


#풀이
1. priorities 배열을 인덱스 값을 Key 로 배열 값을 value 로하는 MAP을 생성한다.
(priorities 배열에서 같은 값을 가진 숫자들을 각각 구분하기 위해)
2. priorities 배열에서 첫 번째 값이 최댓값이 아니면 해당 원소를 배열에서 제거하고
제일 뒤에 추가한다.  
3. priorities 배열에서 인덱스가 location 인 값이 배열에서
최댓값이면서 배열의 가장 첫 번째에 위치할 때까지 (2)을 반복한다.  
