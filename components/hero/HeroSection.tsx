"use client";

import { Box, Container, Typography, Stack, Chip, useTheme } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "@/components/Button";
import { useColorMode } from "@/components/ThemeRegistry";

const STATS = [
  { value: "100K+", label: "Verified Candidates" },
  { value: "50+", label: "Countries" },
  { value: "98%", label: "Placement Rate" },
];

const TRUST_BADGES = ["Zero Middlemen", "MEA Verified", "100% Compliant"];

export default function HeroSection() {
  const theme = useTheme();
  const { mode } = useColorMode();
  const isDark = mode === "dark";

  const heroBg = isDark
    ? "linear-gradient(135deg, #0a0f1e 0%, #0c1a3a 40%, #071020 100%)"
    : "linear-gradient(135deg, #eff6ff 0%, #e0f2fe 40%, #f0fdf4 100%)";

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Background gradient */}
      <Box className="absolute inset-0 -z-10" sx={{ background: heroBg }} />

      {/* Decorative blobs */}
      <Box
        className="absolute -z-10"
        sx={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(26,86,219,0.18) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(26,86,219,0.12) 0%, transparent 70%)",
          top: "-20%",
          right: "-10%",
        }}
      />
      <Box
        className="absolute -z-10"
        sx={{
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          bottom: "0%",
          left: "-5%",
        }}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 16 } }}>
        <Box className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <Box>
            <Chip
              label="🌏 Global Talent Mobility Platform"
              sx={{
                mb: 3,
                backgroundColor: "rgba(26,86,219,0.1)",
                color: "#1a56db",
                fontWeight: 600,
                fontSize: "0.8rem",
                border: "1px solid rgba(26,86,219,0.25)",
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                lineHeight: 1.1,
                mb: 3,
                color: theme.palette.text.primary,
              }}
            >
              Hire Verified
              <Box component="span" className="text-gradient" sx={{ display: "block" }}>
                Global Talent.
              </Box>
              Instantly.
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 400,
                lineHeight: 1.7,
                mb: 4,
                fontSize: { xs: "1rem", md: "1.125rem" },
              }}
            >
              The trusted bridge between international employers and India&apos;s
              best workforce. Access 100,000+ verified candidates across 50+
              countries — zero middlemen, 100% compliant.
            </Typography>

            {/* Trust badges */}
            <Stack direction="row" spacing={2} className="flex-wrap gap-y-2 mb-8">
              {TRUST_BADGES.map((badge) => (
                <Box key={badge} className="flex items-center gap-1">
                  <CheckCircleIcon sx={{ color: "#16a34a", fontSize: 18 }} />
                  <Typography variant="body2" fontWeight={500} color={theme.palette.text.primary}>
                    {badge}
                  </Typography>
                </Box>
              ))}
            </Stack>

            {/* CTAs */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                endIcon={<EastIcon />}
                sx={{ px: 4, py: 1.5, fontSize: "1rem" }}
              >
                Start Hiring Free
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayCircleOutlineIcon />}
                sx={{ px: 4, py: 1.5, fontSize: "1rem" }}
              >
                Watch Demo
              </Button>
            </Stack>
          </Box>

          {/* Stats Panel */}
          <Box className="hidden lg:flex flex-col gap-6">
            <Box
              sx={{
                background: isDark
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(255,255,255,0.8)",
                backdropFilter: "blur(20px)",
                borderRadius: 4,
                p: 4,
                border: isDark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(26,86,219,0.12)",
                boxShadow: isDark
                  ? "0 20px 60px rgba(0,0,0,0.4)"
                  : "0 20px 60px rgba(26,86,219,0.1)",
              }}
            >
              <Typography variant="h5" fontWeight={700} mb={1} color={theme.palette.text.primary}>
                Match Found! 🎉
              </Typography>
              <Typography variant="body2" color={theme.palette.text.secondary} mb={3}>
                AI matched 47 verified candidates for your demand
              </Typography>

              {[
                { name: "Rajesh Kumar", role: "Welder - Kuwait", match: "98%" },
                { name: "Priya Sharma", role: "Nurse - UAE", match: "95%" },
                { name: "Amit Singh", role: "Driver - Saudi", match: "92%" },
              ].map((candidate) => (
                <Box
                  key={candidate.name}
                  className="flex items-center justify-between"
                  sx={{
                    p: 1.5,
                    mb: 1.5,
                    borderRadius: 2,
                    backgroundColor: isDark
                      ? "rgba(26,86,219,0.08)"
                      : "rgba(239,246,255,0.8)",
                    border: isDark
                      ? "1px solid rgba(26,86,219,0.15)"
                      : "1px solid rgba(26,86,219,0.08)",
                  }}
                >
                  <Box className="flex items-center gap-3">
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #1a56db, #06b6d4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      {candidate.name[0]}
                    </Box>
                    <Box>
                      <Typography variant="body2" fontWeight={600} color={theme.palette.text.primary}>
                        {candidate.name}
                      </Typography>
                      <Typography variant="caption" color={theme.palette.text.secondary}>
                        {candidate.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Chip
                    label={candidate.match}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(22,163,74,0.12)",
                      color: "#16a34a",
                      fontWeight: 700,
                      fontSize: "0.7rem",
                    }}
                  />
                </Box>
              ))}
            </Box>

            {/* Stats row */}
            <Box className="grid grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <Box
                  key={stat.label}
                  sx={{
                    background: isDark
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(255,255,255,0.8)",
                    backdropFilter: "blur(20px)",
                    borderRadius: 3,
                    p: 2.5,
                    textAlign: "center",
                    border: isDark
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "1px solid rgba(26,86,219,0.1)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                  }}
                >
                  <Typography variant="h5" fontWeight={800} className="text-gradient">
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" color={theme.palette.text.secondary} fontWeight={500}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Mobile stats */}
        <Box className="grid grid-cols-3 gap-4 mt-10 lg:hidden">
          {STATS.map((stat) => (
            <Box key={stat.label} className="text-center">
              <Typography variant="h5" fontWeight={800} className="text-gradient">
                {stat.value}
              </Typography>
              <Typography variant="caption" color={theme.palette.text.secondary} fontWeight={500}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </section>
  );
}
