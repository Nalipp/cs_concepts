let categories = [
  { id: 'animals', 'parent': null },
  { id: 'mamals', 'parent': 'animals' },
  { id: 'cats', 'parent': 'mamals' },
  { id: 'dogs', 'parent': 'mamals' },
  { id: 'chihuahua', 'parent': 'dogs' },
  { id: 'labrador', 'parent': 'dogs' },
  { id: 'person', 'parent': 'cats' },
  { id: 'siamese', 'parent': 'cats' }
]

let makeTree = (categories, parent) => {
  let node = {}
  categories
    .filter(c => c.parent === parent) 
    .forEach(c => 
      node[c.id] = makeTree(categories, c.id));
  return node;
}

console.log(
  JSON.stringify(
    makeTree(categories, null)
    , null, 2)
);

// tree
// { 
//   animals: {
//     mamals: {
//       dogs: {
//         chihauhua: null;
//         labrador: null;
//       }
//       cats: {
//         person: null;
//         siamese: null;
//       }
//     }
//   }
// }


