package gcd.lcm.hhj.hys

//1. 이해
//- 두 수가 주어진다.
//- 두 수의 최대 공약수와 최소 공배수를 구한다.
//- 최대 공약수는 : 공통 약수중에 제일 큰 수
//3,4 -> 1,3 / 1,2,4
//2,4 -> 1,2 / 1,2,4
//- 최소 공배수 : 공통 배수 중에 제일 작은 수
//3,4 -> 12
//2,4 -> 4
//2. 계획
//- 두 수의 최대 공약수를 구한다.
//- 최대 공약수로 두 수를 나눈다.
//- 최대 공약수로 나누어진 수들을 곱한다.
//- 최대 공약수를 위의 결과값에 곱한다.
fun gcdLcm(num1: Int, num2: Int): IntArray {
    val gcd = calculateGCD(num1, num2, 2)
    return intArrayOf(gcd, num1 / gcd * num2 / gcd * gcd)
}

fun calculateGCD(num1: Int, num2: Int, divider: Int): Int =
        when {
            divider > num1 || divider > num2 -> 1
            num1 % divider == 0 && num2 % divider == 0 ->
                divider * calculateGCD(num1 / divider, num2 / divider, divider)
            else ->
                calculateGCD(num1, num2, divider + 1)
        }
