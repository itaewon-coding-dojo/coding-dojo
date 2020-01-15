package com.codingdojo.largestnumber

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(numbers: IntArray): String =
        when {
            numbers.all { it == 0 } -> "0"
            else -> numbers.sortedWith(Comparator { o1, o2 ->
                "$o2$o1".compareTo("$o1$o2")
            }).joinToString("")
        }

class SolutionTest {
    @Test
    fun `findTheLargestNumber`() {
        assertThat(solution(intArrayOf(6, 10, 2))).isEqualTo("6210")
        assertThat(solution(intArrayOf(3, 30, 34, 5, 9))).isEqualTo("9534330")
        assertThat(solution(intArrayOf(0, 0, 0, 0, 0))).isEqualTo("0")
    }
}
