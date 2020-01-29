package camouflage.mgh.hys.lyh

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(clothes: Array<Array<String>>) =
        clothes
                .asSequence()
                .groupBy { it.last() }
                .map { it.value.size }
                .fold(1) { acc, i -> acc * (i + 1) }
                .let { it - 1 }



class camouflageTest {

    @Test
    fun `조합할 수 있는 옷의 경우의 수 구하기`() {
        assertThat(solution(arrayOf(
                arrayOf("yellow_hat", "headgear"),
                arrayOf("blue_sunglasses", "eyewear"),
                arrayOf("green_turban", "headgear")
        ))).isEqualTo(5)
    }
}