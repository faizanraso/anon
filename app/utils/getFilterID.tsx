export default function getFilterID(school: string) {
  return school.toLowerCase().replace(/[^a-z0-9]/g, "");
}
