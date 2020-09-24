const splitIdFromURL = (str: string) => {
  const id = str.split('/pokemon/')[1].replace('/', '');
  return Number(id);
};

const getUniqueItems = (arr: string[]) => {
  const uniqueItems = [arr[0]];

  for (let i = 0; i < arr.length - 1; i++) {
    let current = arr[i];
    let next = arr[i + 1];

    if (current.slice(0, 10) !== next.slice(0, 10)) {
      uniqueItems.push(next);
    }
  }

  return uniqueItems;
};

export { splitIdFromURL, getUniqueItems };
