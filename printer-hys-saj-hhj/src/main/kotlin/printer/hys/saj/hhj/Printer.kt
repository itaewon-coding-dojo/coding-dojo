package printer.hys.saj.hhj

fun printer(priorities: IntArray, location: Int): Int {
    val newPriorities = priorities.mapIndexed { index, i ->
        val isMyDocument = location == index
        Pair(i, isMyDocument)
    }
    return print(newPriorities.toTypedArray(), 0, null)
}

//아래 두 함수(doPrint(), print())를 하나의 재귀함수로 만들었다.
tailrec fun print(priorities: Array<Pair<Int, Boolean>>, count: Int, printedDoc: Pair<Int, Boolean>?): Int {
    if (printedDoc?.second == true) return count

    val nextPrints = priorities.drop(1)

    if (nextPrints.find { it.first > priorities.first().first } == null)
        return print(nextPrints.toTypedArray(), count + 1, priorities.first())
    return print((nextPrints + priorities.take(1)).toTypedArray(), count, null)
}

fun doPrint(priorities: Array<Pair<Int, Boolean>>, count: Int): Int {
    val (first, second) = print(priorities)
    return when {
        second == null -> doPrint(first, count)
        second.second -> count + 1
        else -> doPrint(first, count + 1)
    }
}

fun print(
        priorities: Array<Pair<Int, Boolean>>
): Pair<Array<Pair<Int, Boolean>>, Pair<Int, Boolean>?> {
    val nextPrints = priorities.drop(1)
    if (nextPrints.find { it.first > priorities.first().first } == null) {
        return Pair((nextPrints).toTypedArray(), priorities.first())
    }
    return Pair((nextPrints + priorities.take(1)).toTypedArray(), null)
}
