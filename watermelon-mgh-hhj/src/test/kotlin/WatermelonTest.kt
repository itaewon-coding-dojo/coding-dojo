import org.assertj.core.api.Assertions.assertThat
import org.junit.Test


class WatermelonTest {

    @Test
    fun `길이만큼 패턴 리턴하기`(){
        //given

        //when
        val n1: Int = 3
        val n2: Int = 4

        //then
        assertThat(getPatternByLength(n1)).isEqualTo("수박수")
        assertThat(getPatternByLength(n2)).isEqualTo("수박수박")

    }
}