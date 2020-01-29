package camouflage.hhj.saj

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

internal class solutionTest {
    @Test
    fun `스파이 옷 입히기 테스트`() {
        // Given

        // When

        // Then
        assertThat(solution(
                arrayOf(
                        arrayOf("yellow_hat", "headgear"),
                        arrayOf("blue_sunglasses", "eyewear"),
                        arrayOf("green_turban", "headgear")
                )
        )
        ).isEqualTo(5)

        assertThat(solution(
                arrayOf(
                        arrayOf("crow_mask", "face"),
                        arrayOf("blue_sunglasses", "face"),
                        arrayOf("smoky_makeup", "face")
                )
        )
        ).isEqualTo(3)
    }
}