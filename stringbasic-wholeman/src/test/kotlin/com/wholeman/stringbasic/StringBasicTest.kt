package com.wholeman.stringbasic

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

/**
 * Created by wholeman on 13/11/2019
 * Github : http://github.com/wholemann
 * E-Mail : wholeman.dev@gmail.com
 */

fun validateString(s: String): Boolean {
    return if ((s.length == 4) or (s.length == 6)) s.all {
        it.isDigit()
    } else false
}

class StringBasicTest {

    @Test
    fun `validateTest`() {
        assertThat(validateString("a234")).isEqualTo(false)
        assertThat(validateString("12345")).isEqualTo(false)
        assertThat(validateString("1234")).isEqualTo(true)
    }
}