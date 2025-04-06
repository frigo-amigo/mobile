export const calculateStorageDuration = (
  manufactureDate: string,
  expirationDate: string,
  currentDate: string = new Date().toLocaleDateString('ru-RU'),
): number => {
  try {
    const productionTimestamp = new Date(manufactureDate.split('.').reverse().join('-')).getTime();
    const expirationTimestamp = new Date(expirationDate.split('.').reverse().join('-')).getTime();
    const currentTimestamp = new Date(currentDate.split('.').reverse().join('-')).getTime();

    if (isNaN(productionTimestamp) || isNaN(expirationTimestamp) || isNaN(currentTimestamp)) {
      console.error('Неверный формат даты:', { manufactureDate, expirationDate, currentDate });
      return 0;
    }

    const shelfLifeDuration = expirationTimestamp - productionTimestamp;

    const remainingShelfLife = expirationTimestamp - currentTimestamp;
    const remainingDays = Math.ceil(remainingShelfLife / (1000 * 60 * 60 * 24));

    const shelfLifePercentage = (remainingShelfLife / shelfLifeDuration) * 100;

    return remainingDays;
  } catch (error) {
    console.error('Ошибка в calculateShelfLifePercentage:', error);
    return 0;
  }
};

export function calculateRemainingPercentage(
  manufactureDate: string,
  expirationDate: string,
  currentDate: string = new Date().toLocaleDateString('ru-RU'),
): number {
  const manufacture = new Date(manufactureDate.split('.').reverse().join('-')).getTime();
  const expiration = new Date(expirationDate.split('.').reverse().join('-')).getTime();
  const now = new Date(currentDate.split('.').reverse().join('-')).getTime();

  if (expiration <= manufacture || now >= expiration) return 0;
  const totalLifeSpan = expiration - manufacture;
  const remainingLifeSpan = expiration - now;

  return (remainingLifeSpan / totalLifeSpan) * 100;
}

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

  const formatted =
    sanitized.length <= 2
      ? sanitized
      : sanitized.length <= 4
      ? `${sanitized.slice(0, 2)}.${sanitized.slice(2)}`
      : `${sanitized.slice(0, 2)}.${sanitized.slice(2, 4)}.${sanitized.slice(4, 8)}`;

  if (formatted.length === 10 && !isValidDate(formatted)) {
    return '';
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
