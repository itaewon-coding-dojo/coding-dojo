package com.codingdojo.featuredev

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test


fun getDeploymentsCounts(progresses: MutableList<Int>, speeds: MutableList<Int>): IntArray {
    var count = 0
    var result = mutableListOf<Int>()

    while (progresses.isNotEmpty()) {
        for ((index, speed) in speeds.withIndex()) {
            progresses[index] += speed
        }

        while (progresses.isNotEmpty() && progresses[0] >= 100) {
            progresses.removeAt(0)
            speeds.removeAt(0)
            count++
        }

        if(count>0){
            result.add(count)
        }
        count=0;
    }

    return result.toIntArray()
}

class FeatureDevTest {

    @Test
    fun `return counts of deployments`() {
        assertThat(getDeploymentsCounts(arrayListOf(93, 30, 55), arrayListOf(1, 30, 5))).isEqualTo(arrayOf(2, 1))
    }


}