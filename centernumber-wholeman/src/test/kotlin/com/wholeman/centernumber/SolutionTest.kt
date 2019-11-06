package com.wholeman.centernumber

import org.junit.Assert.assertThat
import org.hamcrest.CoreMatchers.`is`
import org.junit.Before
import org.junit.Test

/**
 * Created by wholeman on 06/11/2019
 * Github : http://github.com/wholemann
 * E-Mail : wholeman.dev@gmail.com
 */
class SolutionTest {

    lateinit var solution: Solution

    @Before
    fun setUp() {
        solution = Solution()
    }

    @Test
    fun getCenterNumber() {
        assertThat(solution.getCenterNumber("abcde"), `is`("c"))
        assertThat(solution.getCenterNumber("qwer"), `is`("we"))
    }
}