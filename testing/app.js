const data = [
  { name: "jagadeesh", age: 26 },
  { name: "rajashekar", age: 30 },
  { name: "rajendhar", age: 23 },
];

const sortData = data.sort((a, b) => a.age - b.age);
module.exports = sortData;
