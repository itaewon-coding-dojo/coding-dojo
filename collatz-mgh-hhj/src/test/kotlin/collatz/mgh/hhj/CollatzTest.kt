package collatz.mgh.hhj

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test


internal class CollatzTest{

    @Test
    fun `콜라츠 알고리즘 실행 횟수 구하기`(){
        //given

        //when
        val n1 = 6
        val n2 = 16
        val n3 = 626331

        //then
        assertThat(countCollatzAlgorithm(n1)).isEqualTo(8)
        assertThat(countCollatzAlgorithm(n2)).isEqualTo(4)
        assertThat(countCollatzAlgorithm(n3)).isEqualTo(-1)

    }


}