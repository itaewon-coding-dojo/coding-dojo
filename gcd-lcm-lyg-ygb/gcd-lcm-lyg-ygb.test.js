const getGcm1 = (n, m) => {
    let gcd;
    let min = Math.min(n, m);
    let max = Math.max(n, m);
    let remainder;

    while (remainder !== 0) {
        remainder = max % min
        if (remainder == 0) {
            gcd = min;
        }
        max = min;
        min = remainder;
    }
    const lcm = (n / gcd) * (m / gcd) * gcd
    return [gcd, lcm];
}

const getGcm2 = (n, m) => {
    let min = Math.min(n, m);
    for (let i = min; i > 0; i--) {
        if (n % i == 0 && m % i == 0) {
            gcd = i;
            break;
        }
    }
    const lcm = (n / gcd) * (m / gcd) * gcd
    return [gcd, lcm];
}

test('getGcm', () => {
    [getGcm1, getGcm2].forEach(getGcm =>
        expect(getGcm(192, 72)).toEqual([24, 576]));
})
