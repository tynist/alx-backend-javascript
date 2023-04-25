export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const new_DateView = new DataView(buffer, 0, length);
  const arrays = new Int8Array(buffer);
  arrays[position] = value;
  return new_DataView;
}
