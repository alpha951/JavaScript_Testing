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

let E = { '2020-01-01': 6, '2020-01-04': 12, '2020-01-05': 14, '2020-01-06': 2, '2020-01-07': 4 }

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];



//! Solution Function is  below
function solution(D) {
    let sol = {};
    for (let key in D) {
        let myDate = new Date(key)
        let myDay = days[myDate.getDay()];
        let preVal;

        if (sol[[myDay]]) {
            preVal = parseInt(sol[myDay])
        }
        else {
            preVal = 0;
        }
        preVal += D[key]

        let obj = { [myDay]: preVal }
        sol = { ...sol, ...obj };
    }

    const sorter = {
        'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6,
        'Sun': 7
    };

    let tmp = [];
    Object.keys(sol).forEach(function (key) {
        let value = sol[key];
        let index = sorter[key];
        tmp[index] = {
            key: key,
            value: value
        };
    });

    let orderedData = {};
    tmp.forEach(function (obj) {
        orderedData[obj.key] = obj.value;
    });

    return orderedData;
}

// 1st TestCase
let ans = solution(D);
console.log(JSON.stringify(ans));


//2nd TestCase
ans = solution(E);
console.log(JSON.stringify(ans));

module.exports = solution;
