import { useTranslation } from "react-i18next";

export function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}.${month}.${year}`;
  }

  export function getDayName(dateString, locale = "en-US") {
    const date = new Date(dateString);
    const dayOfWeek = new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date).toLowerCase();
    const { t } = useTranslation();
    
    return t(dayOfWeek);
  }