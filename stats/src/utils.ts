export function dateStringToDate(dateString: string): Date {
  const [day, month, year]: number[] = dateString
    .split('/')
    .map(entry => parseInt(entry));

  return new Date(year, month - 1, day);
}
