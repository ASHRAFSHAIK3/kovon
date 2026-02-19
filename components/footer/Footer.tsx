"use client";

import { Box, Container, Grid, Typography, IconButton, Divider, useTheme } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { FOOTER_QUICK_LINKS } from "@/constants/content";
import type { FooterLink } from "@/types";
import { useColorMode } from "@/components/ThemeRegistry";

const SOCIAL_ICONS = [
  { Icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com" },
  { Icon: TwitterIcon, label: "Twitter", href: "https://twitter.com" },
  { Icon: FacebookIcon, label: "Facebook", href: "https://facebook.com" },
  { Icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
];

export default function Footer() {
  const theme = useTheme();
  const { mode } = useColorMode();
  const isDark = mode === "dark";

  const footerBg = isDark ? "#060b14" : "#0f172a";
  const textMuted = isDark ? "#64748b" : "#94a3b8";
  const textBody = isDark ? "#94a3b8" : "#94a3b8";

  return (
    <footer id="contact" style={{ background: footerBg, color: "#e2e8f0" }}>
      <Container maxWidth="lg" sx={{ pt: 10, pb: 5 }}>
        <Grid container spacing={6}>
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Box className="flex items-center gap-2 mb-4">
              <FlightTakeoffIcon sx={{ color: "#06b6d4", fontSize: 26 }} />
              <Typography variant="h6" fontWeight={800} sx={{ color: "#ffffff", letterSpacing: "-0.02em" }}>
                Kovon
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: textBody, lineHeight: 1.8, maxWidth: 280 }}>
              Redefining global talent mobility. The trusted bridge between
              international employers and India&apos;s best workforce.
            </Typography>
            <Box className="flex items-center gap-1 mt-4">
              {SOCIAL_ICONS.map(({ Icon, label, href }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  size="small"
                  sx={{
                    color: "#64748b",
                    "&:hover": { color: "#06b6d4", backgroundColor: "rgba(6,182,212,0.1)" },
                    transition: "all 0.2s",
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="body2"
              fontWeight={700}
              sx={{ color: "#ffffff", mb: 2.5, textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.75rem" }}
            >
              Quick Links
            </Typography>
            <Box className="flex flex-col gap-2">
              {FOOTER_QUICK_LINKS.map((link: FooterLink) => (
                <Link key={link.href} href={link.href} className="no-underline">
                  <Typography
                    variant="body2"
                    sx={{ color: textBody, "&:hover": { color: "#06b6d4" }, transition: "color 0.2s", cursor: "pointer" }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="body2"
              fontWeight={700}
              sx={{ color: "#ffffff", mb: 2.5, textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.75rem" }}
            >
              Services
            </Typography>
            <Box className="flex flex-col gap-2">
              {["Employer Portal", "Candidate Verification", "AI Matching", "Visa Processing", "Compliance"].map((item) => (
                <Typography
                  key={item}
                  variant="body2"
                  sx={{ color: textBody, cursor: "pointer", "&:hover": { color: "#06b6d4" }, transition: "color 0.2s" }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="body2"
              fontWeight={700}
              sx={{ color: "#ffffff", mb: 2.5, textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.75rem" }}
            >
              Contact Us
            </Typography>
            <Box className="flex flex-col gap-2">
              <Typography variant="body2" sx={{ color: textBody }}>📧 hello@kovon.io</Typography>
              <Typography variant="body2" sx={{ color: textBody }}>📍 Bangalore, India</Typography>
              <Typography variant="body2" sx={{ color: textBody }}>🌐 Available across 50+ countries</Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", my: 5 }} />

        <Box className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <Typography variant="caption" sx={{ color: textMuted }}>
            © {new Date().getFullYear()} Kovon Global Private Limited. All rights reserved.
          </Typography>
          <Box className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Typography
                key={item}
                variant="caption"
                sx={{ color: textMuted, cursor: "pointer", "&:hover": { color: "#94a3b8" }, transition: "color 0.2s" }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
