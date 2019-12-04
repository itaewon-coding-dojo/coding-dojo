package com.wholeman.collatz

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

/**
 * Created by wholeman on 27/11/2019
 * Github : http://github.com/wholemann
 * E-Mail : wholeman.dev@gmail.com
 */
tailrec fun getCollatzCount(n: Long, acc: Int): Int = when {
    n == 1L -> acc
    acc == 500 -> -1
    else -> getCollatzCount(if (n % 2 == 0L) n / 2 else n * 3 + 1, acc + 1)
}


class CollatzTest {
    @Test
    fun `returns count of processing collatz guess`() {
        assertThat(getCollatzCount(6, 0)).isEqualTo(8)
        assertThat(getCollatzCount(16, 0)).isEqualTo(4)
        assertThat(getCollatzCount(626331, 0)).isEqualTo(-1)
    }
}