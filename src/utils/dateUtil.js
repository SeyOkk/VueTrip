import dayjs from "dayjs";

/**
 * 格式化日期
 * @param date
 * @param format 日期格式
 * @returns {string} MM月DD日
 */
export function formatMonthDay(date, format = "MM月DD日") {
  return dayjs(date).format(format);
}

/**
 * 计算两个日期之间的天数
 * @param start 开始日期
 * @param end 结束日期
 * @returns {number} 天
 */
export function getDiffDays(start, end) {
  return dayjs(end).diff(start, "day");
}
