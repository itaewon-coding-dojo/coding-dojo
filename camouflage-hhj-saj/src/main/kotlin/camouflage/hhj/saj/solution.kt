package camouflage.hhj.saj

fun solution(clothes: Array<Array<String>>): Int =
        clothes.groupingBy {
            it[1]
        }.eachCount()
                .map {
                    (it.value + 1)
                }.reduce { acc, i ->
                    acc * i
                }.minus(1)

