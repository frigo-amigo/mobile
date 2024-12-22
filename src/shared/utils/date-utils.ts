// export const calculateStorageDuration = (manufactureDate: string, expirationDate: string) => {
//   try {
//     if (manufactureDate && expirationDate) {
//       // Преобразуем даты из строк в объекты Date
//       const manufacture = new Date(manufactureDate.split('.').reverse().join('-'));
//       const expiration = new Date(expirationDate.split('.').reverse().join('-'));

//       // Проверка на корректность дат
//       if (isNaN(manufacture.getTime()) || isNaN(expiration.getTime())) {
//         return '—';
//       }

//       const today = new Date(); // Текущая дата
//       const diffTime = expiration.getTime() - today.getTime(); // Разница между датой истечения и сегодняшним днем
//       const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Переводим в дни

//       if (diffDays > 0) {
//         return `${diffDays} дн.`; // Если срок годности еще не прошел
//       } else if (diffDays === 0) {
//         return 'Сегодня'; // Если срок годности истекает сегодня
//       } else {
//         return `${Math.abs(diffDays)} дн. назад`; // Если срок годности прошел
//       }
//     }
//   } catch (error) {
//     console.error('Ошибка в calculateStorageDuration:', error);
//     return '—';
//   }

//   return '—';
// };

export const calculateStorageDuration = (
  manufactureDate: string,
  expirationDate: string,
  currentDate: string = new Date().toLocaleDateString('ru-RU'),
): number => {
  try {
    // Преобразование дат в метки времени (в миллисекундах)
    const productionTimestamp = new Date(manufactureDate.split('.').reverse().join('-')).getTime();
    const expirationTimestamp = new Date(expirationDate.split('.').reverse().join('-')).getTime();
    const currentTimestamp = new Date(currentDate.split('.').reverse().join('-')).getTime();

    // Проверяем корректность дат
    if (isNaN(productionTimestamp) || isNaN(expirationTimestamp) || isNaN(currentTimestamp)) {
      console.error('Неверный формат даты:', { manufactureDate, expirationDate, currentDate });
      return 0; // Возвращаем 0% в случае ошибки
    }

    // Рассчитываем общий срок годности в миллисекундах
    const shelfLifeDuration = expirationTimestamp - productionTimestamp;

    // Рассчитываем оставшийся срок годности
    const remainingShelfLife = expirationTimestamp - currentTimestamp;
    const remainingDays = Math.ceil(remainingShelfLife / (1000 * 60 * 60 * 24));

    // Рассчитываем процент годности
    const shelfLifePercentage = (remainingShelfLife / shelfLifeDuration) * 100;

    // Возвращаем процент (ограничиваем значения от 0 до 100)
    // return Math.max(0, Math.min(100, shelfLifePercentage));
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

  if (expiration <= manufacture || now >= expiration) return 0; // Если срок истек
  const totalLifeSpan = expiration - manufacture;
  const remainingLifeSpan = expiration - now;

  return (remainingLifeSpan / totalLifeSpan) * 100; // Процент оставшегося времени
}

export const isValidDate = (date: string): boolean => {
  const dateParts = date.split('.');

  // Проверка на формат и количество частей
  if (dateParts.length !== 3) return false;

  const [day, month, year] = dateParts.map(Number);

  // Проверка на допустимые диапазоны
  if (
    year < 1900 ||
    year > 2100 || // Год в разумном диапазоне
    month < 1 ||
    month > 12 || // Месяц от 1 до 12
    day < 1 ||
    day > 31 // День от 1 до 31
  ) {
    return false;
  }

  // Проверка существования даты (например, 30.02.2023)
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
  // Удаляем все, кроме цифр
  const sanitized = text.replace(/[^0-9]/g, '');

  // Форматируем как DD.MM.YYYY
  const formatted =
    sanitized.length <= 2
      ? sanitized
      : sanitized.length <= 4
      ? `${sanitized.slice(0, 2)}.${sanitized.slice(2)}`
      : `${sanitized.slice(0, 2)}.${sanitized.slice(2, 4)}.${sanitized.slice(4, 8)}`;

  // Проверяем валидность даты только при полной длине
  if (formatted.length === 10 && !isValidDate(formatted)) {
    return ''; // Возвращаем пустую строку, если дата неверная
  }

  return formatted;
};
