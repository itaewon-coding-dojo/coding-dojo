package com.wholeman.findmrkim

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

/**
 * Created by wholeman on 13/11/2019
 * Github : http://github.com/wholemann
 * E-Mail : wholeman.dev@gmail.com
 */

fun findKim(seoul: Array<String>): String = "김서방은 ${seoul.indexOf("Kim")}에 있다"

class FindKimTest {

    @Test
    fun `find Kim in seoul`() {
        assertThat(findKim(arrayOf("Jane", "Kim"))).isEqualTo("김서방은 1에 있다")
    }

}