package com.codingdojo.top

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test


fun solution(heights: IntArray): IntArray {
    return ArrayList<Int>().apply {
        for (i in heights.size downTo 1) {
            add(0, findFirstHigherTower(heights[i - 1], heights.dropLast(heights.size - i + 1)))
        }
    }.toIntArray()
}

fun findFirstHigherTower(sender: Int, receivers: List<Int>): Int {
    return if (receivers.indexOfLast { it > sender } == -1) 0
    else receivers.indexOfLast { it > sender } + 1!!
}

class SolutionTest {

    @Test
    fun `Find towers that received the signal`() {
        assertThat(solution(intArrayOf(6, 9, 5, 7, 4)))
                .isEqualTo(intArrayOf(0, 0, 2, 2, 4))
        assertThat(solution(intArrayOf(3, 9, 9, 3, 5, 7, 2)))
                .isEqualTo(intArrayOf(0, 0, 0, 3, 3, 3, 6))
        assertThat(solution(intArrayOf(1, 5, 3, 6, 7, 6, 5)))
                .isEqualTo(intArrayOf(0, 0, 2, 0, 0, 5, 6))
    }

    @Test
    fun `Find first higher tower`() {
        assertThat(findFirstHigherTower(4, listOf(6, 9, 5, 7))).isEqualTo(4)
        assertThat(findFirstHigherTower(7, listOf(6, 9, 5))).isEqualTo(2)
    }
}
