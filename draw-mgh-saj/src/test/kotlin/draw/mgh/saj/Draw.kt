package draw.mgh.saj

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

tailrec fun solution(n: Int, a: Int, b: Int): Int =
    when(n / 2) {
        in a until b -> power(n, 0)
        in b until a -> power(n, 0)
        in a..(n / 2) -> solution(n / 2, a, b)
        else -> solution(n / 2, a - (n / 2), b - (n / 2))
    }

tailrec fun power(n: Int, pow: Int): Int =
        when(n / 2){
            1 -> pow + 1
            else -> power(n / 2, pow + 1)
        }

internal class Draw {

    @Test
    fun `When A and B fight`() {
        assertThat(solution(8, 4, 7)).isEqualTo(3)
        assertThat(solution(8, 4, 5)).isEqualTo(3)
        assertThat(solution(8, 7, 4)).isEqualTo(3)
        assertThat(solution(8, 1, 2)).isEqualTo(1)
        assertThat(solution(8, 2, 1)).isEqualTo(1)
        assertThat(solution(8, 1, 8)).isEqualTo(3)
        assertThat(solution(8, 5, 8)).isEqualTo(2)
    }

    @Test
    fun `제곱수 구하기`() {
        assertThat(power(4, 0)).isEqualTo(2)
        assertThat(power(8, 0)).isEqualTo(3)
        assertThat(power(16, 0)).isEqualTo(4)
    }
}
