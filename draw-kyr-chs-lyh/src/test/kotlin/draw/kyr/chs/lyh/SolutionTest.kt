package draw.kyr.chs.lyh

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

/*
    1. 그룹반으로 쪼개 2개의 그룹으로 만든다.
    2. a와 b가 같은 그룹에 있는지 확인한다.
        2-1 바로 옆에 있는지 검사한다.
        2-2 현재 위치가 홀수면 +1 짝수면 -1
        2-3 같은 그룹에 바로 옆이면 종료.
    3. 다른 그룹에 있으면 카운트 +1 다음 대진표를 만든다.
        3-1. a, b 값을 다시 부여
            (1)      (2)
         2   4(2)   5   7(4)
        1 2 3 4 5 6 7 8
*/

fun solution(n: Int, a: Int, b: Int): Int {
    tailrec fun step(n: Int, a: Int, b: Int, acc: Int): Int = when {
        a - 1 == b || a + 1 == b-> acc
        a < n/2 && b < n/2 || a >= n/2 && b >= n/2 -> step(n / 2, next(a), next(b), acc + 1)
        else -> step(n / 2, next(a), next(b), acc + 1)
    }

    return step(n, a, b, 1)
}

fun next(a: Int) = if (a % 2 == 0) a / 2 else (a + 1) / 2

class SolutionTest {

    @Test
    fun `Find the number of rounds A and B meet`() {
        assertThat(solution(2, 1, 2)).isEqualTo(1)
        assertThat(solution(4, 3, 4)).isEqualTo(1)
        assertThat(solution(8, 4, 7)).isEqualTo(3)
    }

    @Test
    fun `Find the number in the next round`() {
        assertThat(next(4)).isEqualTo(2)
        assertThat(next(7)).isEqualTo(4)
    }
}
