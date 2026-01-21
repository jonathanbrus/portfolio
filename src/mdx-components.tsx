import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { Box, Divider, Paper, Table, TableCell, TableContainer, TableHead, Typography } from "@mui/material";

const components = {
  h1: ({ children }) => (
    <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, mt: 4 }}>
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
      {children}
    </Typography>
  ),
  p: ({ children }) => (
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7, color: "text.secondary" }}>
      {children}
    </Typography>
  ),
  table: ({ children }) => (
    <TableContainer component={Paper} sx={{ mb: 4, backgroundColor: "background.paper" }}>
      <Table size="small">{children}</Table>
    </TableContainer>
  ),
  thead: ({ children }) => <TableHead sx={{ backgroundColor: "action.hover" }}>{children}</TableHead>,
  th: ({ children }) => <TableCell sx={{ fontWeight: "bold", py: 2 }}>{children}</TableCell>,
  td: ({ children }) => <TableCell sx={{ py: 1.5 }}>{children}</TableCell>,
  a: ({ children, href }) => (
    <Link href={href} target="_blank" rel="noopener">
      {children}
    </Link>
  ),
  li: ({ children }) => (
    <Box component="li" sx={{ mb: 1 }}>
      <Typography variant="body1" component="span">
        {children}
      </Typography>
    </Box>
  ),

  hr: () => <Divider sx={{ my: 4 }} />,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
