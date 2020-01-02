import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

internal class PrintTest {
    @Test
    fun `요청한 문서의 출력순서 구하기`() {

        assertThat(findPrintOrder(intArrayOf(2, 1, 3, 2), 2)).isEqualTo(1)
        assertThat(findPrintOrder(intArrayOf(1, 1, 9, 1, 1, 1), 0)).isEqualTo(5)
        assertThat(findPrintOrder(intArrayOf(1, 1, 9, 1, 2, 1), 5)).isEqualTo(3)
        assertThat(findPrintOrder(intArrayOf(3, 1, 1, 9, 1, 2, 1), 2)).isEqualTo(6)
        assertThat(findPrintOrder(intArrayOf(1, 1, 1, 1), 1)).isEqualTo(2)
        assertThat(findPrintOrder(intArrayOf(1, 2, 3, 4), 2)).isEqualTo(2)
        assertThat(findPrintOrder(intArrayOf(3, 2, 3, 4, 5, 9), 4)).isEqualTo(2)
        assertThat(findPrintOrder(intArrayOf(9, 4, 3, 2, 1, 9), 0)).isEqualTo(1)
        assertThat(findPrintOrder(intArrayOf(9, 4, 3, 2, 1, 9), 5)).isEqualTo(2)
    }
}
