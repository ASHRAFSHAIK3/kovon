"use client";

import { Box, Typography, Paper, useTheme } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PublicIcon from "@mui/icons-material/Public";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SecurityIcon from "@mui/icons-material/Security";
import type { FeatureCard as FeatureCardType } from "@/types";
import { ElementType } from "react";
import { SvgIconProps } from "@mui/material";
import { useColorMode } from "@/components/ThemeRegistry";

const ICON_MAP: Record<string, ElementType<SvgIconProps>> = {
  VerifiedUser: VerifiedUserIcon,
  Public: PublicIcon,
  SmartToy: SmartToyIcon,
  Security: SecurityIcon,
};

interface FeatureCardProps {
  card: FeatureCardType;
}

export default function FeatureCard({ card }: FeatureCardProps) {
  const IconComponent = ICON_MAP[card.icon] ?? SecurityIcon;
  const theme = useTheme();
  const { mode } = useColorMode();
  const isDark = mode === "dark";

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3.5,
        borderRadius: 3,
        height: "100%",
        cursor: "default",
        backgroundColor: theme.palette.background.paper,
        border: isDark
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid rgba(0,0,0,0.07)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: isDark
            ? "0 20px 40px rgba(0,0,0,0.5)"
            : "0 20px 40px rgba(26,86,219,0.12)",
          borderColor: isDark
            ? "rgba(26,86,219,0.4)"
            : "rgba(26,86,219,0.2)",
        },
      }}
    >
      <Box
        sx={{
          width: 52,
          height: 52,
          borderRadius: 2.5,
          background: "linear-gradient(135deg, rgba(26,86,219,0.14) 0%, rgba(6,182,212,0.14) 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2.5,
        }}
      >
        <IconComponent sx={{ color: "#1a56db", fontSize: 26 }} />
      </Box>

      <Typography
        variant="h6"
        fontWeight={700}
        mb={1}
        sx={{ color: theme.palette.text.primary, fontSize: "1.05rem" }}
      >
        {card.title}
      </Typography>

      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}>
        {card.description}
      </Typography>
    </Paper>
  );
}
