export default function createIteratorObject(report) {
  const result = [];
  for (const dept of Object.values(report.allEmployees)) {
    result.push(...dept);
  }
  return result;
}
