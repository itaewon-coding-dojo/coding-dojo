fun findPrintOrder(priorities: IntArray, location: Int): Int =
    printOrRelocation(priorities.asSequence().mapIndexed { index, it -> index to it }.toMutableList(), location, 1)

fun printOrRelocation(order: MutableList<Pair<Int, Int>>, location: Int, count: Int): Int =
    if (order[0] == order.maxBy { it.second } && order[0].first == location)
        count
    else
        when (order[0]) {
            order.maxBy { it.second } -> {
                order.removeAt(0)
                printOrRelocation(order, location, count + 1)
            }
            else -> {
                order.add(order.removeAt(0))
                printOrRelocation(order, location, count)
            }
        }
