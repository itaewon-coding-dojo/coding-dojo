fun getPatternByLength(n:Int) = Array(n){ it -> if((it+1)%2 == 1) "수" else "박"}.joinToString("")
