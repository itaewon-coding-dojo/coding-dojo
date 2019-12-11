import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

internal class BudgetTest {
    @Test
    fun `예산 구하기`() {

        assertThat(SupportMaxDepartment(intArrayOf(1,3,2,5,4),9)).isEqualTo(3)
        assertThat(SupportMaxDepartment(intArrayOf(2,2,3,3),10)).isEqualTo(4)
    }
}