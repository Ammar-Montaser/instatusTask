export default function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short", // abbreviated month
    day: "numeric", // numeric day
    hour: "numeric", // numeric hour
    minute: "numeric", // numeric minutes
    hour12: true, // 12-hour format
  }).format(new Date(date));
}
