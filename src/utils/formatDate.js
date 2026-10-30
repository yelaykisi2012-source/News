/**
 * Format date into human-readable Uzbek format
 */
export function formatRelativeTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) {
    return "Hozirgina";
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} daqiqa oldin`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} soat oldin`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays === 1) {
    return "Kecha";
  }
  if (diffInDays < 7) {
    return `${diffInDays} kun oldin`;
  }

  // Full date format: 28-oktabr, 2026
  const monthsUz = [
    "yanvar", "fevral", "mart", "aprel", "may", "iyun",
    "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"
  ];
  return `${date.getDate()}-${monthsUz[date.getMonth()]}, ${date.getFullYear()}`;
}

export function formatFullDate(date = new Date()) {
  const daysUz = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];
  const monthsUz = [
    "yanvar", "fevral", "mart", "aprel", "may", "iyun",
    "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"
  ];
  
  const dayName = daysUz[date.getDay()];
  const day = date.getDate();
  const month = monthsUz[date.getMonth()];
  const year = date.getFullYear();

  return `${dayName}, ${day}-${month}, ${year}`;
}
