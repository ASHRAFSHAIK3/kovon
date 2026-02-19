"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  useScrollTrigger,
  useTheme,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Link from "next/link";
import Button from "@/components/Button";
import { NAV_LINKS } from "@/constants/content";
import type { NavLink } from "@/types";
import { useColorMode } from "@/components/ThemeRegistry";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { mode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const isDark = mode === "dark";

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

  useEffect(() => {
    setScrolled(trigger);
  }, [trigger]);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);
  const closeDrawer = () => setDrawerOpen(false);

  const bgScrolled = isDark ? "rgba(10,15,30,0.95)" : "rgba(255,255,255,0.97)";
  const borderScrolled = isDark
    ? "1px solid rgba(255,255,255,0.08)"
    : "1px solid rgba(0,0,0,0.06)";

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled ? bgScrolled : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all 0.3s ease",
          borderBottom: scrolled ? borderScrolled : "none",
          boxShadow: scrolled
            ? isDark
              ? "0 4px 24px rgba(0,0,0,0.4)"
              : "0 4px 24px rgba(0,0,0,0.06)"
            : "none",
        }}
      >
        <Toolbar
          sx={{ maxWidth: "1280px", width: "100%", mx: "auto", px: { xs: 2, md: 4 } }}
          className="flex items-center justify-between"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <FlightTakeoffIcon sx={{ color: "#1a56db", fontSize: 28 }} />
            <Typography
              variant="h6"
              fontWeight={800}
              sx={{ color: theme.palette.text.primary, letterSpacing: "-0.02em" }}
            >
              Kovon
            </Typography>
          </Link>

          {/* Desktop Nav */}
          <Box component="nav" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link: NavLink) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium transition-colors duration-200 no-underline text-sm"
                style={{ color: theme.palette.text.secondary }}
              >
                {link.label}
              </Link>
            ))}
          </Box>

          {/* Right side: Dark mode toggle + CTAs */}
          <Box className="hidden md:flex items-center gap-3">
            <Tooltip title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}>
              <IconButton
                onClick={toggleColorMode}
                aria-label="Toggle dark mode"
                sx={{
                  color: theme.palette.text.secondary,
                  "&:hover": {
                    backgroundColor: isDark
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(0,0,0,0.05)",
                  },
                }}
              >
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>
            <Button variant="outlined" size="medium" color="primary">
              Sign In
            </Button>
            <Button variant="contained" size="medium" color="primary">
              Get Started
            </Button>
          </Box>

          {/* Mobile: dark mode + hamburger */}
          <Box className="flex items-center gap-1 md:hidden">
            <IconButton
              onClick={toggleColorMode}
              aria-label="Toggle dark mode"
              size="small"
              sx={{ color: theme.palette.text.secondary }}
            >
              {isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
            </IconButton>
            <IconButton
              onClick={toggleDrawer}
              aria-label="Open menu"
              sx={{ color: theme.palette.text.primary }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={closeDrawer}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.paper,
            backgroundImage: "none",
          },
        }}
      >
        <Box
          sx={{ width: 280, p: 3 }}
          role="presentation"
          className="flex flex-col h-full"
        >
          <Box className="flex items-center justify-between mb-8">
            <Box className="flex items-center gap-2">
              <FlightTakeoffIcon sx={{ color: "#1a56db" }} />
              <Typography fontWeight={800} sx={{ color: theme.palette.text.primary }}>
                Kovon
              </Typography>
            </Box>
            <IconButton
              onClick={closeDrawer}
              aria-label="Close menu"
              sx={{ color: theme.palette.text.secondary }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <List disablePadding>
            {NAV_LINKS.map((link: NavLink) => (
              <ListItem key={link.href} disablePadding sx={{ mb: 1 }}>
                <Link
                  href={link.href}
                  onClick={closeDrawer}
                  className="w-full no-underline"
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      color: theme.palette.text.primary,
                      fontSize: "1rem",
                    }}
                  />
                </Link>
              </ListItem>
            ))}
          </List>

          <Box className="flex flex-col gap-3 mt-auto">
            <Button variant="outlined" fullWidthOnMobile>
              Sign In
            </Button>
            <Button variant="contained" fullWidthOnMobile>
              Get Started
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar />
    </>
  );
}
