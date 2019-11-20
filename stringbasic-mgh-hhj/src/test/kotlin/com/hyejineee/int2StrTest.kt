package com.hyejineee

import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.CoreMatchers.equalTo
import org.junit.Assert.assertThat
import org.junit.Test

class Int2StrTest{
    @Test
    fun 안녕하세요(){
        //Given

        //When

        //Then
        assertThat("안녕",`is`(equalTo("hi")))
    }
}