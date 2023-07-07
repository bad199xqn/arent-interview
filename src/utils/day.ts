import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { DATETIME_FORMAT } from "@/constants";

dayjs.extend(utc);
dayjs.extend(timezone);

const timeZone = dayjs.tz.guess();

export const convertDateTimezoneLocal = (
  dateString?: string | null,
  format: string = DATETIME_FORMAT
) => {
  if (typeof dateString !== "string") return "";

  return dayjs.utc(dateString).tz(timeZone).format(format);
};