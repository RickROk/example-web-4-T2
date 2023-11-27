export default defineEventHandler(() => {
  return { hello: "world" };
});

// return new Promise((resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         id: 1,
//         name: "Кирилл",
//       },
//       {
//         id: 2,
//         name: "Владимир",
//       },
//       {
//         id: 3,
//         name: "Александр",
//       },
//       {
//         id: 4,
//         name: "Даниил",
//       },
//       {
//         id: 5,
//         name: "Владислав",
//       },
//     ]);
//   }, 2000);
// });
