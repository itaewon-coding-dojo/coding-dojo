문제

두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

제한사항
두 수는 1이상 1000000이하의 자연수입니다.


아는것
- 입력값 n과 m
- 배열 index 0의 자리는 최대공약수, 배열 index 1의 자리는 최소공배수
- 두수의 곱은 최대공약수와 최소공배수의 곱과 같다.

계획
1. m과 n중에 높은수와 낮은수를 낮은수로 나눠준다.
2. 나눠주는수를 -1 둘다 나머지가 0이 될때까지 나눠준다.
3. 이되면 그게 최대공약수다.
4. 최대공약수에서 n를 나눈 몫, m를 나눈몫을 최대공약수와 곱해준다.

1. m와 n중에 높은수롤 낮은수로 나눠서 나머지를 구해준다.
2. m과n중에 낮은수를 나머지로 나눠준다.
3. 계

<!-- - n과 m중에 높은수를 낮은수로 나눈다. -->