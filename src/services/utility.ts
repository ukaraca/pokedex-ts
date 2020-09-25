import { HTMLProps, MutableRefObject } from 'react';

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

const randomArrayElement = (list: string[]) => {
  const randomElement = list[Math.floor(Math.random() * list.length)];
  return randomElement;
};

const getAverageRGB = (imgEl: HTMLImageElement | null) => {
  // thanks to http://jsfiddle.net/xLF38/818/
  if (imgEl) {
    var blockSize = 5, // only visit every 5 pixels
      defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
      canvas = document.createElement('canvas'),
      context = canvas.getContext && canvas.getContext('2d'),
      data,
      width,
      height,
      i = -4,
      length,
      rgb = { r: 0, g: 0, b: 0 },
      count = 0;

    if (!context) {
      return defaultRGB;
    }

    height = canvas.height =
      imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width =
      imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
      data = context.getImageData(0, 0, width, height);
    } catch (e) {
      /* security error, img on diff domain */ alert('x');
      return defaultRGB;
    }

    length = data.data.length;

    while ((i += blockSize * 4) < length) {
      ++count;
      rgb.r += data.data[i];
      rgb.g += data.data[i + 1];
      rgb.b += data.data[i + 2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return rgb;
  }
};

export { splitIdFromURL, getUniqueItems, randomArrayElement, getAverageRGB };
