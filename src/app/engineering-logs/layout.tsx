import { EngineeringLogsLayout } from "@/components/app-layouts/engineering-logs";

interface IMdxLayoutProps {
  children: React.ReactNode;
}

export default function MdxLayout({ children }: Readonly<IMdxLayoutProps>) {
  return <EngineeringLogsLayout>{children}</EngineeringLogsLayout>;
}
