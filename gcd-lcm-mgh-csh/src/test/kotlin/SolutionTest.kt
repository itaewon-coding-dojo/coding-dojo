import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

//1. 두 수를 입력 받는다.
//2. 각 수의 공약수를 모두 구한다.
//2-1. 1부터 시작하여 나누는 수를 계속 1씩 증가시키면서 나머지가 0인 숫자는 공약수
//배열에 추가한다.
//2-2. 나누는 수가 공약수 배열에 포함되어 있으면 (2-1) 작업을 중지한다.
//2-3. 나누는 수와 나눈 몫이 같으면 (2-1) 작업을 중지한다.
//3. 각 공약수 에서 공통된 수 중에서 가장 큰 값이 최대 공약수가 된다.
//4. 최대 공약수로 각 수를 나눈 몫들을 최대 공약수와 곱하면 최소 공배수가 된다.

internal class SolutionTest {
    @Test
    fun `최대 공약수와 최소 공배수 구하기`() {
        assertThat(solution(3, 12)).isEqualTo(intArrayOf(3, 12))
        assertThat(solution(2, 5)).isEqualTo(intArrayOf(1, 10))
    }

    @Test
    fun `공약수들이 포함된 배열을 만든다`() {
        assertThat(getCommonDivisors(3)).isEqualTo(listOf(1, 3))
        assertThat(getCommonDivisors(12)).isEqualTo(listOf(1, 12, 2, 6, 3, 4))
        assertThat(getCommonDivisors(36)).isEqualTo(listOf(1, 36, 2, 18, 3, 12, 4, 9, 6))
        assertThat(getCommonDivisors(2)).isEqualTo(listOf(1, 2))
        assertThat(getCommonDivisors(5)).isEqualTo(listOf(1, 5))
    }

    @Test
    fun `최대 공약수 구하기`() {
        assertThat(getGcd(listOf(1, 3), listOf(1, 2, 3, 4, 6, 12))).isEqualTo(3)
        assertThat(getGcd(listOf(1, 2), listOf(1, 5))).isEqualTo(1)
    }

    @Test
    fun `최소 공배수 구하기`() {
        assertThat(getLcm(3, 12, 3)).isEqualTo(12)
        assertThat(getLcm(3, 12, 3)).isEqualTo(12)
        assertThat(getLcm(2, 5, 1)).isEqualTo(10)
    }
}

fun solution(n: Int, m: Int): IntArray {
    val gcd = getGcd(getCommonDivisors(n), getCommonDivisors(m))

    return intArrayOf(gcd, getLcm(n, m, gcd))
}

tailrec fun getCommonDivisors(n: Int, divisor: Int = 1, result: List<Int> = listOf()): List<Int> =
    when (n % divisor) {
        0 -> if (result.contains(divisor)) result.distinct() else getCommonDivisors(n, divisor + 1, result + divisor + (n / divisor)
        )
        else -> getCommonDivisors(n, divisor + 1, result)
    }


fun <T : Int> getGcd(a: List<T>, b: List<T>) = a.asSequence().filter { b.contains(it) }.max()!!

fun getLcm(n: Int, m: Int, gcm: Int) = (n * m / gcm)
