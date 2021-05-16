import { ArrayBufferConverter } from '../ArrayBufferConverter';
import { getBuffer } from '../getBuffer';

test('проверка значения пришедшего при извлечении из ArrayBuffer', () => {
  const converter = new ArrayBufferConverter();

  converter.load(getBuffer());

  expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test('проверка на отсутствие ошибок', () => {
  expect(() => {
    const converter = new ArrayBufferConverter();

    converter.load(getBuffer());
    converter.toString();
  }).not.toThrowError();
});
