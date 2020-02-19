package carpet.saj.hhj

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test


internal class solutionTest {
    @Test
    fun `카페트 가로,세로 구하기 테스트`() {
        // Given

        // When

        // Then
        assertThat(solution(10, 2)).isEqualTo(intArrayOf(4, 3))
        assertThat(solution(24, 24)).isEqualTo(intArrayOf(8, 6))
        assertThat(solution(18, 12)).isEqualTo(intArrayOf(6, 5))
    }

    @Test
    fun `약수 구하기 테스트`() {
        assertThat(findAliquots(24)).isEqualTo(intArrayOf(1, 2, 3, 4, 6, 12, 24))
    }
}
