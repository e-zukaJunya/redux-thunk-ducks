import { DateTime } from "luxon";

export const testDt = () => {
  const aa = DateTime.local().setLocale("ja");
  console.log(aa);

//   const aa = DateTime.local().setLocale("ja").toFormat(loginTimeFormat);
};
