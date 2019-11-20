package com.hyejineee.stringbasic

fun treatString(s:String):Boolean =
    if(s.length == 4|| s.length ==6)
        Regex(pattern = """\d+""").matches(s)
    else
        false
