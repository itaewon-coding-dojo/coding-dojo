package com.hyejineee.centerNumberTest

import org.hamcrest.CoreMatchers
import org.junit.Assert
import org.junit.Test
import com.hyejineee.centerNumber.*

class centerNumberTest {

    @Test
    fun getCenterLetterTest(){
        //Given

        //When
        var words1:String = "abcde"
        var words2:String = "qwer"

        //Then
        Assert.assertThat(getCenterLetter(words1), CoreMatchers.`is`(CoreMatchers.equalTo("c")))
        Assert.assertThat(getCenterLetter(words2), CoreMatchers.`is`(CoreMatchers.equalTo("we")))

    }
}