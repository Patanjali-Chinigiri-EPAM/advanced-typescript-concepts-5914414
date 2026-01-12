function sortArray<T, K extends keyof T>(arr: T[], key: K) {
  arr.sort((a, b) => {
    return a[key] < b[key] ? -1: 1;
  });
}

let tasks = [{id: 10, title: "Effective Typescript"}, {id: 2, title: "Effective Spring"}];
sortArray(tasks, "id");
console.log(tasks);