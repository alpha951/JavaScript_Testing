const solution = require('./index');

test('Return a sorted object of Days with values.', () => {
    let D = {
        '2020-01-01': 4,
        '2020-01-02': 4,
        '2020-01-03': 6,
        '2020-01-04': 8,
        '2020-01-05': 2,
        '2020-01-06': -6,
        '2020-01-07': 2,
        '2020-01-08': -2
    }
    let ansD = { Mon: -6, Tue: 2, Wed: 2, Thu: 4, Fri: 6, Sat: 8, Sun: 2 }
    expect(solution(D)).toEqual(ansD);
    let E = { '2020-01-01': 6, '2020-01-04': 12, '2020-01-05': 14, '2020-01-06': 2, '2020-01-07': 4 }
    let ansE ={ Mon: 2, Tue: 4, Wed: 6, Thu: 8, Fri: 10, Sat: 12, Sun: 14 };
    expect(solution(E)).toEqual(ansE);
});

