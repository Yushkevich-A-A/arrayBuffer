export class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferValue = new Uint16Array(this.buffer);
    return String.fromCharCode(...bufferValue);
  }
}
