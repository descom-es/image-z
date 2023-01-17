import * as sharp from 'sharp';

export class ImageZ {
  private imageBase64 = '';

  public static from(imageBase64: string): ImageZ {
    const imageZ = new ImageZ();
    imageZ.imageBase64 = imageBase64;
    return imageZ;
  }

  public async transform(params: string) {
    const buffer = Buffer.from(this.imageBase64, 'base64');

    const options = paramsToResizeOptions(params);

    const transformedBuffer = await sharp(buffer).resize(options).toBuffer();

    this.imageBase64 = transformedBuffer.toString('base64');

    return this;
  }

  public response(): string {
    return this.imageBase64;
  }
}

function paramsToResizeOptions(params: string): sharp.ResizeOptions {
  const options: sharp.ResizeOptions = {};
  const paramsArray = params.split(',');

  for (const param of paramsArray) {
    const [key, value] = param.split('_');

    switch (key) {
      case 'w':
        options.width = parseInt(value);
        break;
      case 'h':
        options.height = parseInt(value);
        break;
    }
  }

  return options;
}