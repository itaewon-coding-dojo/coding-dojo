package carpet.mgh.ktj

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(brown: Int, red: Int): IntArray =
        (1..red).asSequence()
            .filter {
                red % it == 0
            }.filter {
                ((red / it + 2) * (it + 2) - red == brown)
            }.let {
                intArrayOf(red / it.first() + 2, it.first() + 2)
            }

internal class Carpet {
    @Test
    fun `Find length of width and height`() {
        assertThat(solution(10, 2)).isEqualTo(intArrayOf(4, 3))
        assertThat(solution(8, 1)).isEqualTo(intArrayOf(3, 3))
        assertThat(solution(24, 24)).isEqualTo(intArrayOf(8, 6))
    }
}

