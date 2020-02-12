fun solution(n:Int, a:Int, b:Int):Int {

    if(n == 2) {
        return 1
    }

    val result = calculateExp(n)
    val aCompareResult = isSmallerThanExp(a, n)
    val bCompareResult = isSmallerThanExp(b, n)

    if(aCompareResult != bCompareResult) return result
    if(!aCompareResult && !bCompareResult) return solution(n/2, a-(n/2), b-(n/2))


    return solution(n/2, a, b)
}

fun calculateExp(n : Int):Int{

    var exp = n
    var count = 0

    while (exp > 1) {
        exp = exp.shr(1)
        count += 1
    }

    return count
}

fun isSmallerThanExp(x: Int, n: Int): Boolean {

    if(x <= n/2) return true

    return false
}