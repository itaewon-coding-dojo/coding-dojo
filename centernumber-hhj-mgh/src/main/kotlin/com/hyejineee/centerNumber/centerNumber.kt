package com.hyejineee.centerNumber

fun getCenterLetter(word:String):String {
    val index:Int = word.length/2
    when(word.length%2) {
        0 -> return word.slice(index - 1..index)
        else -> return word[index].toString()
    }
}
