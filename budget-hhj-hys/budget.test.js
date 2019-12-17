const maxDepartmentsCount = (departmentBudgets, budget) =>
  [...departmentBudgets]
    .sort((a, b) => a - b)
    .reduce(
      (acc, cur, index, arr) => {
        if (acc.sum + cur <= budget) {
          return {
            sum: acc.sum + cur,
            departmentsCount: index + 1
          };
        } else {
          arr.splice(index);
          return acc;
        }
      },
      {
        sum: 0,
        departmentsCount: 0
      }
    ).departmentsCount;

test('maxDepartmentsCount', () => {
  expect(maxDepartmentsCount([1, 3, 2, 5, 4], 9)).toBe(3);
  expect(maxDepartmentsCount([2, 2, 3, 3], 10)).toBe(4);
  expect(maxDepartmentsCount([5, 3, 2, 1], 20)).toBe(4);
});
