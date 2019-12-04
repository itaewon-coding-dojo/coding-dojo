package com.dojo.secretmap

fun decrypt(n: Int, map1: Array<Int>, map2: Array<Int>): Array<String> =
    map1.mapIndexed{ index, i ->
        i.or(map2[index]).toString(2).padStart(n, '0')
    }.map {
        it.fold("", { acc, cur ->
            acc + if(cur=='0') " " else "#"
        })
    }.toTypedArray()
