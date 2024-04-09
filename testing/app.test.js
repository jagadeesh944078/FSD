const sortingByAge = require("./app");

test("after sorting in first name should be rajendhar", () => {
  const sortData = sortingByAge();
  expect(sortData[0].name).toBe("rajendhar");
});

test("after sorting in last name should be rajashekar", () => {
  const sortData = sortingByAge();
  expect(sortData[sortData.length - 1].name).toBe("rajashekar");
});

test("testing sorted data has length 4", () => {
  const sortData = sortingByAge();
  expect(sortData.length).toBe(4);
});

test("testing sorted data has length 4", () => {
  const sortData = sortingByAge();
  expect(sortData).not.toBeUndefined();
});
