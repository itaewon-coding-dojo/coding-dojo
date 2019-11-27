package com.wholeman.watermelon

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

/**
 * Created by wholeman on 27/11/2019
 * Github : http://github.com/wholemann
 * E-Mail : wholeman.dev@gmail.com
 */
fun isEven(v: Int) = if (v % 2 === 0) "수" else "박"

fun getStringPattern(n: Int): String {
    return Array(n) { i -> isEven(i) }.joinToString("")
}

class StringPatternTest {
    @Test
    fun `it returns repeated string "수박수박수"`() {
        assertThat(getStringPattern(3)).isEqualTo("수박수")
        assertThat(getStringPattern(4)).isEqualTo("수박수박")
    }
}