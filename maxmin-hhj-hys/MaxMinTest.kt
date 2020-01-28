package com.dojo.maxmin

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

internal class MaxMinKtTest {
    @Test
    fun `max and min test`() {
        assertThat(maxMin("1 2 3 4")).isEqualTo("1 4")
        assertThat(maxMin("-1 -2 -3 -4")).isEqualTo("-4 -1")
        assertThat(maxMin("-1 -1")).isEqualTo("-1 -1")
    }
}

