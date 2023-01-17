import { ImageZ } from '../index'
import { Image } from 'canvas'
import { readFileSync } from 'fs'

test('Resize to 100x100', async () => {
  const image = readFileSync('./src/__tests__/test.jpg').toString('base64');

  const transformedImage = (await ImageZ.from(image).transform('w_100,h_100')).response();

  const { width, height } = getImageSizes(transformedImage);

  expect(width).toBe(100);
  expect(height).toBe(100);
});

function getImageSizes(imageBase64: string): { width: number; height: number } {
  const imageDOM = new Image();
  imageDOM.src = `data:image/jpeg;base64,${imageBase64}`;
  return { width: imageDOM.width, height: imageDOM.height };
}