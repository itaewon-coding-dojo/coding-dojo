package collatz.mgh.hhj

fun countCollatzAlgorithm(n:Int):Int = collatzAlgorithm(n.toLong(),0)

//1-1. 입력된 수가 짝수라면 2로 나눕니다.
//1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
tailrec fun collatzAlgorithm(n:Long, c:Int):Int =
        when{
            c > 500 -> -1
            n == 1L -> c
            else -> collatzAlgorithm(if( n%2 == 0L ) n/2 else (n*3)+1, c+1)
        }
