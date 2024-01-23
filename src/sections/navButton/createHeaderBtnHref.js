

export function createBtnHref (nameBtn) {
  return nameBtn.reduce((acc, ele) => {
    switch (ele) {
      case 'Галлерея':
        acc.push('gallery');
        break;
      case 'Календарь':
        acc.push('calendar');
        break;
      case 'Контакты':
        acc.push('contact');
        break;
      case 'Чат Телеграм':
        acc.push('chatTelegram');
        break;
      default:
        console.error(`данного линка ${ele} нет в списке`);
    }
    return acc;
  }, []);
}