"use client";

import { Card, CardActionArea, CardContent, Stack, Typography } from "@mui/material";
import Link from "next/link";

interface IEngineeringLogsPageProps {
  logs: {
    slug: string;
    title: string;
    date: string;
    category: string;
    roi: string;
  }[];
}

export const EngineeringLogsPage: React.FC<Readonly<IEngineeringLogsPageProps>> = (props) => {
  const { logs } = props;

  return (
    <Stack sx={{ marginY: "3rem" }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
        Engineering Ledger
      </Typography>

      <Stack gap={2}>
        {logs.map((log) => {
          console.log(log.slug);

          return (
            <Card key={log.slug} variant="outlined" sx={{ backgroundColor: "transparent", borderColor: "divider" }}>
              <CardActionArea LinkComponent={Link} href={`/engineering-logs/${log.slug}`}>
                <CardContent>
                  <Typography variant="overline" color="primary" sx={{ fontWeight: "bold" }}>
                    {log.category} — {log.date}
                  </Typography>
                  <Typography variant="h6" component="div" gutterBottom>
                    {log.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>ROI Impact:</strong> {log.roi}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Stack>
    </Stack>
  );
};
