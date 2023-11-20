import dayjs from "dayjs";

/**
 * 格式化日期
 * @param date
 * @returns {string} MM月DD日
 */
export function formatMonthDay(date) {
  return dayjs(date).format("MM月DD日");
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
