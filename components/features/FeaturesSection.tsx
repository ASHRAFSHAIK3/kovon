"use client";

import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import FeatureCard from "./FeatureCard";
import { FEATURE_CARDS } from "@/constants/content";
import type { FeatureCard as FeatureCardType } from "@/types";
import { useColorMode } from "@/components/ThemeRegistry";

export default function FeaturesSection() {
  const theme = useTheme();
  const { mode } = useColorMode();
  const isDark = mode === "dark";

  return (
    <section
      id="services"
      className="py-20"
      style={{ backgroundColor: isDark ? "#0d1117" : "#ffffff" }}
    >
      <Container maxWidth="lg">
        <Box className="text-center mb-14">
          <Typography
            variant="overline"
            sx={{ color: "#1a56db", fontWeight: 700, letterSpacing: "0.12em" }}
          >
            What We Offer
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem" },
              color: theme.palette.text.primary,
              mt: 1,
              mb: 2,
            }}
          >
            Everything You Need to
            <Box component="span" className="text-gradient">
              {" "}Hire Globally
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.secondary, maxWidth: 560, mx: "auto", lineHeight: 1.7 }}
          >
            From pre-verified candidates to AI-powered matching — Kovon gives
            you every tool to hire the world&apos;s best talent, compliantly and
            efficiently.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {FEATURE_CARDS.map((card: FeatureCardType) => (
            <Grid key={card.id} item xs={12} sm={6} md={3}>
              <FeatureCard card={card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
