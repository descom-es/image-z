export class ImageZ {
  private imageBase64 = '';

  public static from(imageBase64: string): ImageZ {
    const imageZ = new ImageZ();
    imageZ.imageBase64 = imageBase64;
    return imageZ;
  }

  public transform(params: string) {
    // ...

    return this;
  }

  public response(): string {
    return this.imageBase64;
  }
}