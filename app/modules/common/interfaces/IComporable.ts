type ComparableSelector<T> = (value: T, other: T) => number | string | null;

export interface IComporable<T> {
  compareTo(data: T): T;
  ascSort(data: T): T;
  descSort(data: T): T;
}

// abstract classinterface IComporable<T> {
//   compareTo(data: T): T;
//   ascSort(data: T): T;
//   descSort(data: T): T;
// }

// export function createComparator<T>(...selectors: ComparableSelector<T>[]) {
//   return (a: T, b: T) => {
//     for (const selector of selectors) {
//       const valA = selector(a, b);
//       if (valA === null) continue;
//       const valB = selector(b, a);
//       if (valB === null || valA == valB) continue;
//       if (valA > valB) return 1;
//       if (valA < valB) return -1;
//     }
//     return 0;
//   };
// }
