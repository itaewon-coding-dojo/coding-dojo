package com.dojo.secretmap

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

internal class SecretMapTest {
    @Test
    fun `Decrypt secret map`() {
        assertThat(decrypt(5, arrayOf(9, 20, 28, 18, 11), arrayOf(30, 1, 21, 17, 28)))
            .isEqualTo(arrayOf("#####","# # #", "### #", "#  ##", "#####"))

        assertThat(decrypt(6, arrayOf(46, 33, 33 ,22, 31, 50), arrayOf(27 ,56, 19, 14, 14, 10)))
            .isEqualTo(arrayOf("######", "###  #", "##  ##", " #### ", " #####", "### # "))
    }
}
