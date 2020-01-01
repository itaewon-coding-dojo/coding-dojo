package gcd.lcm.hhj.hys

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

internal class `GCD-LCMTest` {
    @Test
    fun `최대 공약수와 최대 공배수 구하기 테스`() {
        // Given

        // When

        // Then
        assertThat(gcdLcm(3, 12)).isEqualTo(intArrayOf(3, 12))
        assertThat(gcdLcm(2, 5)).isEqualTo(intArrayOf(1, 10))

    }

    @Test
    fun `최대 공약수 구하기 테스트`() {
        // Given

        // When

        // Then
        assertThat(calculateGCD(3, 12, 2)).isEqualTo(3)
        assertThat(calculateGCD(2, 5, 2)).isEqualTo(1)
        assertThat(calculateGCD(6, 24, 2)).isEqualTo(6)
    }
}

