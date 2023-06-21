export default async function checkInfo() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await fetch(
      "http://localhost:3000/api/info",
      requestOptions
    );
    if (response.ok) {
      const data = await response.json();
      if (data.complete === "false") {
        return true;
      } else {
        return false;
      }
    }
  } catch (e) {
    return false;
  }
}
