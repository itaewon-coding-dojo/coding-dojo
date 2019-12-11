
fun SupportMaxDepartment(applyBudget: IntArray, budget: Int): Int {
    var count = 0;
    applyBudget.sortedArray().fold(budget, { acc, it ->
        println(acc-it)
        if(acc-it >= 0 ){
            count += 1;
        }
        acc - it
    })
    return count
}