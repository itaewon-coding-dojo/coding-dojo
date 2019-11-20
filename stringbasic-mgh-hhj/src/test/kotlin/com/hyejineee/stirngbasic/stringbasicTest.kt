package com.hyejineee.stirngbasic

import com.hyejineee.stringbasic.*
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

class stringbasicTest {
    @Test
    fun stirngbasicTest(){
        //Given

        //When
        val s1 = "a12"
        val s2 = "1234"
        val s3 = "123b"
        val s4 = "abcd12"
        val s5 = "111111"

        //Then
        assertThat(treatString(s1)).isEqualTo(false)
        assertThat(treatString(s2)).isEqualTo(true)
        assertThat(treatString(s3)).isEqualTo(false)
        assertThat(treatString(s4)).isEqualTo(false)
        assertThat(treatString(s5)).isEqualTo(true)
    }
}