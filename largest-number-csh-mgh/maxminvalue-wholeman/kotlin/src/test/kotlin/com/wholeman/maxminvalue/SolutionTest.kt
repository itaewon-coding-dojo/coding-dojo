package com.wholeman.maxminvalue

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(s: String): String = with(s.split(" ").map { it.toInt() }) { "${min()} ${max()}" }


class SolutionTest {

    @Test
    fun `Find max value and min value in given strings`() {
        assertThat(solution("1 2 3 4")).isEqualTo("1 4")
        assertThat(solution("-1 -2 -3 -4")).isEqualTo("-4 -1")
        assertThat(solution("-1 -1")).isEqualTo("-1 -1")
    }
}
