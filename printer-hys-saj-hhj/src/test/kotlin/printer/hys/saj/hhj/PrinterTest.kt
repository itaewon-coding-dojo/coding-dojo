package printer.hys.saj.hhj

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

internal class PrinterTest {
    @Test
    fun `프린터 테스트하기`() {
        assertThat(printer(intArrayOf(2, 1, 3, 2), 2)).isEqualTo(1)
        assertThat(printer(intArrayOf(1, 1, 9, 1, 1, 1), 0)).isEqualTo(5)
    }

//    @Test
//    fun `문서 뽑기 테스트하기`() {
//        var priorities = arrayOf(
//                Pair(2, false),
//                Pair(1, false),
//                Pair(3, true),
//                Pair(2, false)
//        )
//
//        var result = print(priorities)
//        assertThat(result.first).isEqualTo(arrayOf(
//                Pair(1, false),
//                Pair(3, true),
//                Pair(2, false),
//                Pair(2, false)
//        ))
//        assertThat(result.second).isEqualTo(null)
//
//        result = print(result.first)
//
//        assertThat(result.first).isEqualTo(arrayOf(
//                Pair(3, true),
//                Pair(2, false),
//                Pair(2, false),
//                Pair(1, false)
//        ))
//        assertThat(result.second).isEqualTo(null)
//
//        result = print(result.first)
//
//        assertThat(result.first).isEqualTo(arrayOf(
//                Pair(2, false),
//                Pair(2, false),
//                Pair(1, false)
//        ))
//        assertThat(result.second).isEqualTo(Pair(3, true))
//    }
}