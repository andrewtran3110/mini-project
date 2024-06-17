// 3. Given an array I of m elements ( m > 0 ), where each element is a non-consecutive day of the week, 
// and a number n (where m ⩽ n ), the algorithm implementation returns an array O of n consecutive days. 
// continuously, counting from the first element of I , and preserving the order of appearance in the array.

// Input [I;n]		Output [O]
// [Mon; 7]		[Mon, Tue, Wed, Thu, Fri, Sat, Sun]
// [Mon; 10]		[Mon, Tue, Wed, Thu, Fri, Sat, Sun, Mon, Tue, Wed]
// [Fri, Sun; 5]		[Fri, Sat, Sun, Mon, Tue]
// [Mon, Thu, Sat; 5]	[Mon, Tue, Wed, Thu, Fri]

function consecutiveDayList(I, n) {
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let startDayIndex = daysOfWeek.indexOf(I[0]);
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(daysOfWeek[(startDayIndex + i) % 7]);
    }

    return result;
}

console.log(consecutiveDayList(["Mon"], 7));  // [Mon, Tue, Wed, Thu, Fri, Sat, Sun]
console.log(consecutiveDayList(["Mon"], 10)); // [Mon, Tue, Wed, Thu, Fri, Sat, Sun, Mon, Tue, Wed]
console.log(consecutiveDayList(["Fri", "Sun"], 5));  // [Fri, Sat, Sun, Mon, Tue]
console.log(consecutiveDayList(["Mon", "Thu", "Sat"], 5)); // [Mon, Tue, Wed, Thu, Fri]
