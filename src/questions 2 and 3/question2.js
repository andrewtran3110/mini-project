// 2. const array = []
// then assign array = [1] it gives error,
// but array.push(1) is ok, why is that, is the const variable changed?

const array = [];
array = [1]; // Error: We cannot reassign a value to a constant variable.
array.push(1); // We can because we don't change the array's reference, only its content.
