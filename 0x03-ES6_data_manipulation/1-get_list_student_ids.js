export default function getListStudentIds(arg) {
  if (!Array.isArray(args)) return [];
  return args.map((elm) => elm.id);
}
