import { getAllSlugs } from "@/core/helpers/get-all-slugs";
import { EngineeringLogsPage } from "@/presentations/engineering-logs";

export const metadata = {
  title: "The Engineering Ledger | Jonathan Brus",
  description: "A tactical record of architectural decisions and system post-mortems.",
};

export default function Page() {
  const logs = getAllSlugs();

  return <EngineeringLogsPage logs={logs} />;
}
