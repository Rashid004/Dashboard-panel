/** @format */

import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function UseTodayActivity() {
  const { isLoading, data: activties } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["today-activity"],
  });

  return { isLoading, activties };
}
