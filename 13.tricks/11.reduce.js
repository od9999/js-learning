const userList = [
    {
      id: 1,
      username: 'john',
      sex: 1,
      email: 'john@163.com'
    },
    {
      id: 2,
      username: 'jerry',
      sex: 1,
      email: 'jerry@163.com'
    },
    {
      id: 3,
      username: 'nancy',
      sex: 0,
      email: ''
    }
];
const keyByUsernameReducer = (acc, person) => ({...acc, [person.id]: person});
const userObj = userList.reduce(keyByUsernameReducer, {});
console.log(userObj);


const readings = [0.3, 1.2, 3.4, 0.2, 3.2, 5.5, 0.4];
const minMax = readings.reduce((acc, reading) => ({
    minReading: Math.min(acc.minReading, reading),
    maxReading: Math.max(acc.maxReading, reading),
}), {
    minReading: Number.MAX_VALUE,
    maxReading: Number.MIN_VALUE,
});
console.log(minMax);
// {minReading: 0.2, maxReading: 5.5}
