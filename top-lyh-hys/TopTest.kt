package com.dojo.top

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

internal class TopKtTest {
    @Test
    fun receivedTop() {
        assertThat(receivedTop(intArrayOf(6, 9, 5, 7, 4)))
            .isEqualTo(intArrayOf(0, 0, 2, 2, 4))

        assertThat(receivedTop(intArrayOf(3, 9, 9, 3, 5, 7, 2)))
            .isEqualTo(intArrayOf(0, 0, 0, 3, 3, 3, 6))

        assertThat(receivedTop(intArrayOf(1, 5, 3, 6, 7, 6, 5)))
            .isEqualTo(intArrayOf(0, 0, 2, 0, 0, 5, 6))
    }
}

