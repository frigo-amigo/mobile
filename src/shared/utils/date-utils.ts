export const calculateStorageDuration = (manufactureDate: string, expirationDate: string) => {
  try {
    if (manufactureDate && expirationDate) {
      const manufacture = new Date(manufactureDate.split('.').reverse().join('-'));
      const expiration = new Date(expirationDate.split('.').reverse().join('-'));

      if (isNaN(manufacture.getTime()) || isNaN(expiration.getTime())) {
        return '—';
      }

      const diffTime = expiration.getTime() - manufacture.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return `${Math.max(diffDays, 0)} дн.`;
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
