export const calculateStorageDuration = (
  manufactureDate: string,
  expirationDate: string,
): number => {
  if (
    !manufactureDate ||
    !expirationDate ||
    manufactureDate.length !== 10 ||
    expirationDate.length !== 10
  ) {
    return 0;
  }

  const manufDate = new Date(formatDateForServer(manufactureDate));
  const expDate = new Date(formatDateForServer(expirationDate));

  if (isNaN(manufDate.getTime()) || isNaN(expDate.getTime()) || expDate <= manufDate) {
    return 0;
  }

  const durationMs = expDate.getTime() - manufDate.getTime();
  const days = Math.ceil(durationMs / (1000 * 60 * 60 * 24));
  return days;
};

export const formatDateForServer = (date: string): string => {
  if (!date || date.length !== 10) return new Date().toISOString();
  const [day, month, year] = date.split('.');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T00:00:00.000Z`;
};

export const calculateRemainingPercentage = (
  manufactureDate: string,
  expirationDate: string,
  currentDate: string = new Date().toISOString(),
): number => {
  const manufDate = new Date(manufactureDate);
  const expDate = new Date(expirationDate);
  const now = new Date(currentDate);

  if (
    isNaN(manufDate.getTime()) ||
    isNaN(expDate.getTime()) ||
    isNaN(now.getTime()) ||
    expDate <= manufDate ||
    now >= expDate
  ) {
    return 0;
  }

  const totalLifeSpan = expDate.getTime() - manufDate.getTime();
  const remainingLifeSpan = expDate.getTime() - now.getTime();
  const percentage = (remainingLifeSpan / totalLifeSpan) * 100;

  return percentage;
};

export const isValidDate = (date: string): boolean => {
  const dateParts = date.split('.');

  if (dateParts.length !== 3) return false;

  const [day, month, year] = dateParts.map(Number);

  if (year < 1900 || year > 2100 || month < 1 || month > 12 || day < 1 || day > 31) {
    return false;
  }

  const testDate = new Date(
    `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
  );
  return (
    testDate.getFullYear() === year &&
    testDate.getMonth() + 1 === month &&
    testDate.getDate() === day
  );
};

export const formatDateInput = (text: string): string => {
  const sanitized = text.replace(/[^0-9]/g, '');
  if (sanitized.length === 0) return '';

  let formatted = sanitized;
  if (sanitized.length > 2) {
    formatted = `${sanitized.slice(0, 2)}.${sanitized.slice(2)}`;
  }
  if (sanitized.length > 4) {
    formatted = `${sanitized.slice(0, 2)}.${sanitized.slice(2, 4)}.${sanitized.slice(4, 8)}`;
  }

  if (formatted.length > 10) return formatted.slice(0, 10);

  if (formatted.length === 10 && !isValidDate(formatted)) {
    return formatted.slice(0, formatted.lastIndexOf('.'));
  }

  return formatted;
};

export const formatDate = (dateString: string): number => {
  if (!/\d{2}\.\d{2}\.\d{4}/.test(dateString)) {
    console.error(`Invalid date format: ${dateString}`);
    return NaN;
  }

  const [day, month, year] = dateString.split('.');

  const formattedDate = `${year}-${month}-${day}`;

  const parsedDate = new Date(formattedDate);

  if (isNaN(parsedDate.getTime())) {
    console.error(`Invalid date: ${dateString}`);
    return NaN;
  }

  return parsedDate.getTime();
};

export const calculateRemainingDays = (expirationDate: string): number => {
  const expDate = new Date(expirationDate);
  const now = new Date();

  if (isNaN(expDate.getTime()) || expDate <= now) {
    return 0;
  }

  const remainingMs = expDate.getTime() - now.getTime();
  const remainingDays = Math.ceil(remainingMs / (1000 * 60 * 60 * 24));
  return remainingDays;
};
