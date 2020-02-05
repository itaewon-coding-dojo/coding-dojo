import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

internal class SolutionTest {

    @Test
    fun `solution test`() {
        assertThat(solution(8, 4, 7)).isEqualTo(3)
        assertThat(solution(8, 6, 7)).isEqualTo(2)
    }

    @Test
    fun `calculateExp test`() {
        assertThat(calculateExp(32)).isEqualTo(5)
        assertThat(calculateExp(8)).isEqualTo(3)
        assertThat(calculateExp(2)).isEqualTo(1)
    }

    @Test
    fun `isSmallerThanExp test`() {
        assertThat(isSmallerThanExp(4, 8)).isEqualTo(true)
        assertThat(isSmallerThanExp(7, 8)).isEqualTo(false)
    }
}