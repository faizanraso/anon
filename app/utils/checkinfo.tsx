export default async function checkInfo() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const response = await fetch(
    "http://localhost:3000/api/info",
    requestOptions
  );

  if (!response.ok) {
    return false;
  }

  const data = await response.json();
  return data.complete;
}
