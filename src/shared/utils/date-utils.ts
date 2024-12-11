export const calculateStorageDuration = (manufactureDate: string, expirationDate: string) => {
  try {
    if (manufactureDate && expirationDate) {
      // Преобразуем даты из строк в объекты Date
      const manufacture = new Date(manufactureDate.split('.').reverse().join('-'));
      const expiration = new Date(expirationDate.split('.').reverse().join('-'));

      // Проверка на корректность дат
      if (isNaN(manufacture.getTime()) || isNaN(expiration.getTime())) {
        return '—';
      }

      const today = new Date(); // Текущая дата
      const diffTime = expiration.getTime() - today.getTime(); // Разница между датой истечения и сегодняшним днем
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Переводим в дни

      if (diffDays > 0) {
        return `${diffDays} дн.`; // Если срок годности еще не прошел
      } else if (diffDays === 0) {
        return 'Сегодня'; // Если срок годности истекает сегодня
      } else {
        return `${Math.abs(diffDays)} дн. назад`; // Если срок годности прошел
      }
    }
  } catch (error) {
    console.error('Ошибка в calculateStorageDuration:', error);
    return '—';
  }

  return '—';
};

export const formatDateInput = (text: string) => {
  const sanitized = text.replace(/[^0-9]/g, '');
  const formatted =
    sanitized.length <= 2
      ? sanitized
      : sanitized.length <= 4
      ? `${sanitized.slice(0, 2)}.${sanitized.slice(2)}`
      : `${sanitized.slice(0, 2)}.${sanitized.slice(2, 4)}.${sanitized.slice(4, 8)}`;
  return formatted;
};
