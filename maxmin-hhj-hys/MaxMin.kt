package com.dojo.maxmin

fun maxMin(s: String) =
    s.split(" ")
        .map(toDecimal(10))
        .let(toResultString)

val toDecimal: (Int) -> (String) -> Int = { it ->
    { v -> v.toInt(it) }
}

val toResultString: (List<Int>) -> String = {
    "${it.min()} ${it.max()}"
}

