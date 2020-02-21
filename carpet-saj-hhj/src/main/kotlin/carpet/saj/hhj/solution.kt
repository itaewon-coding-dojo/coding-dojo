package carpet.saj.hhj

//1. 이해
//- 구하고자 하는 것 : 카펫의 가로, 세로 크기를 순서대로 배열에 담음
//- 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
//
//2. 계획
//- 먼저 레드의 약수를 구한다.
//- 약수의 처음부터 배열의 반까지 순회한다.
//- (약수 +2) * (나머지 약수?+2) 의 값 - 레드 = 브라운
fun solution(b: Int, r: Int): IntArray {
    val length = findAliquots(r).filter { (it + 2) * (r / it + 2) == b + r }.get(0)
    return intArrayOf((r / length + 2), length + 2)
}

fun findAliquots(number: Int): IntArray {
    var aliquots = mutableListOf<Int>()
    for (i in 1..number) {
        if (number % i == 0) {
            aliquots.add(i)
        }
    }
    return aliquots.toIntArray()
}