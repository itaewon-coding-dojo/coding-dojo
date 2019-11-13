package com.hyejineee

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import com.hyejineee.findMrKim


class FindMrKimTest{

    @Test
    fun findMrKimTest(){
        //Given

        //When
        val seoul = arrayOf("Jane","Kim")
        val seoul2 = arrayOf("Noah","Jane","Kim")

        //Then
        assertThat(findMrKim(seoul)).isEqualTo("김서방은 1에 있다.")
        assertThat(findMrKim(seoul2)).isEqualTo("김서방은 2에 있다.")
    }
}