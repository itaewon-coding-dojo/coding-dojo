package com.wholeman.centernumber

class Solution {
    fun getCenterNumber(s: String): String = when(s.length % 2) {
            1 -> s.subSequence(s.length / 2, s.length / 2 + 1).toString()
            else -> s.subSequence(s.length / 2 - 1, s.length / 2 + 1).toString()
    }
}
