package com.codingdojo.printer

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

// brute force
//fun getPrintOrder(priorities: IntArray, location: Int): Int {
//    var order = 1
//    val maxValueIndex = priorities.max()?.let { priorities.indexOf(it) }!!
//
//    for ((index, x) in priorities.withIndex()) {
//        if (x == priorities[location] && index == location) continue
//        if (priorities[location] < x) order += 1
//        if (priorities[location] == x) {
//            if (location < index) {
//                if (maxValueIndex in (location + 1) until index) {
//                    order += 1
//                }
//                continue
//            } else {
//                if (maxValueIndex in (index + 1) until location) {
//                    continue
//                }
//                order += 1
//            }
//        }
//    }
//
//    return order
//}

// Use List as a Queue
fun getPrintOrder(priorities: IntArray, location: Int): Int {
    val queue = priorities.mapIndexed { index, value -> index to value }
    return step(queue, location, 1)
}

tailrec fun <T : Pair<Int, Int>> step(queue: List<T>, target: Int, order: Int): Int =
        when (queue.maxBy { it.second }) {
            queue.first() ->
                if (queue.first().first == target) order
                else step(queue.drop(1), target, order + 1)
            else -> step(queue.drop(1) + queue.first(), target, order)
        }

class SolutionTest {

    @Test
    fun `Find the print order of the document at the given location`() {
        assertThat(getPrintOrder(intArrayOf(2, 1), 0)).isEqualTo(1)
        assertThat(getPrintOrder(intArrayOf(2, 1, 1), 0)).isEqualTo(1)
        assertThat(getPrintOrder(intArrayOf(2, 1, 1), 2)).isEqualTo(3)
        assertThat(getPrintOrder(intArrayOf(2, 1, 3, 2), 2)).isEqualTo(1)
        assertThat(getPrintOrder(intArrayOf(2, 1, 3, 2), 0)).isEqualTo(3)
        assertThat(getPrintOrder(intArrayOf(1, 1, 9, 1, 1, 1), 0)).isEqualTo(5)
    }
}
