package int2str;

import org.junit.Test;

import static org.assertj.core.api.Assertions.*;


public class Int2strTest {

    @Test
    public void 정수를_문자열로_반환하기() {

        //given
        Int2str tester = new Int2str();

        //when
        String result = tester.int2Str(1234);
        String result2 = tester.int2Str(12345);
        String result3 = tester.int2Str(0);

        //then
        assertThat(result).isEqualTo("1234");
        assertThat(result2).isEqualTo("12345");
        assertThat(result3).isEqualTo("0");

    }

    @Test
    public void 음수를_넣으면_에러발생시키(){
        //given
        Int2str tester = new Int2str();

        //when
        Throwable throwable = catchThrowable( () -> {
            tester.int2Str(-1);
        });

       //then
        assertThat(throwable)
                .isInstanceOf(IllegalArgumentException.class)
                .withFailMessage("Error");
    }

    @Test
    public void 정수의_마지막자리수를_문자열로_변환해서_가져오기(){
        //given
        Int2str tester = new Int2str();
        //when
        String result = tester.getLastNumberToStr(1234);

       //then
        assertThat(result).isEqualTo("4");


    }








}