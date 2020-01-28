package com.dojo.top

fun receivedTop(heights: IntArray) =
    heights
        .mapIndexed(findReceivedTop(heights))
        .toIntArray()

fun findReceivedTop(heights: IntArray) = { i: Int, _: Int ->
    val index = heights
        .take(i + 1)
        .indexOfLast { it > heights[i] }

    if (index == -1) 0 else index + 1
}

