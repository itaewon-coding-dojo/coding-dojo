// const maxminvalue = (insert) => `${Math.min(...insert.split(' '))} ${Math.max(...insert.split(' '))}`;

const maxminvalue = (insert) => [Math.min(...insert.split(' ')) ,Math.max(...insert.split(' '))].join(' ');

test('maxminvalue', () => {
    expect(maxminvalue('1 2 3 4')).toBe('1 4');
    expect(maxminvalue('-1 -2 -3 -4')).toBe('-4 -1');
    expect(maxminvalue('-1 -1')).toBe('-1 -1');
});