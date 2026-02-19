import { Box, Container, Typography, Grid } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { HOW_IT_WORKS_STEPS } from "@/constants/content";
import type { HowItWorksStep } from "@/types";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
      }}
    >
      <Container maxWidth="lg">
        {/* Section header */}
        <Box className="text-center mb-14">
          <Typography
            variant="overline"
            sx={{ color: "#06b6d4", fontWeight: 700, letterSpacing: "0.12em" }}
          >
            Simple Process
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem" },
              color: "#ffffff",
              mt: 1,
              mb: 2,
            }}
          >
            How It Works
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#94a3b8", maxWidth: 500, mx: "auto", lineHeight: 1.7 }}
          >
            From signup to successful placement in four clear steps. No
            confusion, no delays — just results.
          </Typography>
        </Box>

        {/* Steps */}
        <Grid container spacing={3} alignItems="stretch">
          {HOW_IT_WORKS_STEPS.map((step: HowItWorksStep, index: number) => (
            <Grid key={step.step} item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  p: 3.5,
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  height: "100%",
                  position: "relative",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(255,255,255,0.09)",
                    transform: "translateY(-4px)",
                    borderColor: "rgba(6,182,212,0.4)",
                  },
                }}
              >
                {/* Step number */}
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #1a56db, #06b6d4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {step.step}
                </Box>

                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ color: "#ffffff", mb: 1.5, fontSize: "1rem" }}
                >
                  {step.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "#94a3b8", lineHeight: 1.7 }}
                >
                  {step.description}
                </Typography>

                {/* Arrow connector (not on last step) */}
                {index < HOW_IT_WORKS_STEPS.length - 1 && (
                  <Box
                    className="hidden md:flex"
                    sx={{
                      position: "absolute",
                      right: -18,
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: 10,
                      color: "#475569",
                    }}
                  >
                    <EastIcon sx={{ fontSize: 20 }} />
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
