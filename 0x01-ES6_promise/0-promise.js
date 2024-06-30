export default function iterateThroughObject(reportWithIterator) {
  if (typeof reportWithIterator !== 'object' || Array.isArray(reportWithIterator)) {
    return ''; // or some other default value
  }
  const values = Object.values(reportWithIterator);
  return values.join(' | ');
}
