export default function compareDates(creation_time: string) {
    const postDate = new Date(creation_time.slice(0, 10));

    return (
      postDate.toLocaleString("default", { month: "long" }) +
      " " +
      postDate.getDate() +
      ", " +
      postDate.getFullYear()
    );
  }