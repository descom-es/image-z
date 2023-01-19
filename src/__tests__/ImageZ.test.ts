import { ImageZ } from '../index'
import { Image } from 'canvas'
import { readFileSync, writeFileSync } from 'fs'

test('Resize to 100x100', async () => {
  const image = readFileSync('./src/__tests__/test.jpg').toString('base64');

  const transformedImage = (await ImageZ.from(image).transform('w_100,h_100')).response();

  const { width, height } = getImageSizes(transformedImage);

  expect(width).toBe(100);
  expect(height).toBe(100);
});

test('Resize to 300x100 with fit', async () => {
  const image = readFileSync('./src/__tests__/test.jpg').toString('base64');

  const transformedImage = (await ImageZ.from(image).transform('w_300,h_100,fit_fill')).response();

  const { width, height } = getImageSizes(transformedImage);

  expect(width).toBe(300);
  expect(height).toBe(100);

  // saveImage(transformedImage, './src/__tests__/test-300x100-fill.jpg');
});

test('Resize to 300x100 with fit and background', async () => {
  const image = readFileSync('./src/__tests__/test.jpg').toString('base64');

  const transformedImage = (await ImageZ.from(image).transform('w_300,h_100,fit_contain,bg_#000')).response();

  const { width, height } = getImageSizes(transformedImage);

  expect(width).toBe(300);
  expect(height).toBe(100);

  // saveImage(transformedImage, './src/__tests__/test-300x100-contain-black-bg.jpg');
});

function getImageSizes(imageBase64: string): { width: number; height: number } {
  const imageDOM = new Image();
  imageDOM.src = `data:image/jpeg;base64,${imageBase64}`;
  return { width: imageDOM.width, height: imageDOM.height };
}

function saveImage(imageBase64: string, path: string) {
  writeFileSync(path, Buffer.from(imageBase64, 'base64'));
}