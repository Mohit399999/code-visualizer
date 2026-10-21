import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Features from "@/components/features";
import Head from "next/head";
import Link from "next/link";

const PREVIEW_GIFS = [{ src: "/avl-tree.gif", alt: "AVL Tree visualization" }];

export default function HomePage() {
  return (
    <Box>
      <Head>
        <meta
          name="impact-site-verification"
          value="a7e7b9b7-e9c4-4487-a779-71356560214e"
        />
      </Head>

      {/* Hero */}
      <Box sx={styles.hero}>
        <Box sx={styles.blob1} />
        <Box sx={styles.blob2} />
        <Box sx={styles.blob3} />

        <Container
          maxWidth="md"
          sx={{ textAlign: "center", position: "relative" }}
        >
          <Typography
            className="fadeInUp"
            sx={{ ...styles.eyebrow, animationDelay: "0s" }}
          >
            Interactive learning
          </Typography>
          <Typography
            component="h1"
            className="fadeInUp"
            sx={{ ...styles.heroTitle, animationDelay: "0.08s" }}
          >
            See what your code
            <br />
            <Box component="span" sx={styles.heroTitleAccent}>
              is actually doing.
            </Box>
          </Typography>
          <Typography
            className="fadeInUp"
            sx={{ ...styles.heroSubtitle, animationDelay: "0.16s" }}
          >
            From sorting and searching to trees and graphs,{" "}
            <strong>See Algorithms</strong> turns abstract logic into
            step-by-step animations you can pause, rewind, and control.
          </Typography>
          <Box
            className="fadeInUp"
            sx={{
              ...styles.ctaRow,
              animationDelay: "0.24s",
            }}
          >
            <Button
              component={Link}
              href="/sorting/BubbleSort"
              size="large"
              sx={styles.primaryCta}
            >
              Start visualizing
            </Button>
            <Button
              component={Link}
              href="/articles"
              variant="text"
              size="large"
              sx={styles.secondaryCta}
            >
              Read the articles
            </Button>
          </Box>
        </Container>

        <Container
          maxWidth="lg"
          className="fadeInUp"
          sx={{ mt: 6, position: "relative", animationDelay: "0.32s" }}
        >
          <Box sx={styles.previewFrame}>
            {PREVIEW_GIFS.map((gif, index) => (
              <img
                key={index}
                src={gif.src}
                alt={gif.alt}
                style={styles.previewImage}
              />
            ))}
          </Box>
          <Typography sx={styles.previewCaption}>
            Live preview — AVL tree rotations, animated in real time.
          </Typography>
        </Container>
      </Box>

      {/* Highlight banner */}
      <Box sx={styles.highlight}>
        <Typography sx={styles.highlightLabel}>New</Typography>
        <Typography sx={styles.highlightText}>
          AI-powered breakdowns, Undo / Redo, saved setups, and embeddable
          visualizers — all built in.
        </Typography>
      </Box>

      {/* Features */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography component="h2" sx={styles.sectionTitle}>
            Everything you need to understand it, not just run it
          </Typography>
        </Box>
        <Features />
      </Container>

      {/* Closing statement */}
      <Box sx={styles.closing}>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography component="h2" sx={styles.closingTitle}>
            Bridge the gap between code and concept
          </Typography>
          <Typography sx={styles.closingText}>
            Textbooks and code editors can make logic feel abstract. Whether
            you&apos;re analyzing a directed graph or balancing a binary tree,
            See Algorithms gives you a focused space to experiment and learn.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

const styles = {
  hero: {
    position: "relative",
    overflow: "hidden",
    pt: { xs: 8, md: 12 },
    pb: { xs: 6, md: 8 },
    background: "#fbfbfd",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
  },
  blob1: {
    position: "absolute",
    top: "-15%",
    left: "-10%",
    width: 420,
    height: 420,
    borderRadius: "50%",
    background:
      "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.35), rgba(99,102,241,0) 70%)",
    filter: "blur(10px)",
    animation: "floatBlob 16s ease-in-out infinite",
    pointerEvents: "none",
  },
  blob2: {
    position: "absolute",
    top: "10%",
    right: "-12%",
    width: 480,
    height: 480,
    borderRadius: "50%",
    background:
      "radial-gradient(circle at 60% 40%, rgba(6,182,212,0.3), rgba(6,182,212,0) 70%)",
    filter: "blur(10px)",
    animation: "floatBlob 20s ease-in-out infinite reverse",
    pointerEvents: "none",
  },
  blob3: {
    position: "absolute",
    bottom: "-20%",
    left: "30%",
    width: 380,
    height: 380,
    borderRadius: "50%",
    background:
      "radial-gradient(circle at 50% 50%, rgba(236,72,153,0.22), rgba(236,72,153,0) 70%)",
    filter: "blur(10px)",
    animation: "floatBlob 24s ease-in-out infinite",
    pointerEvents: "none",
  },
  eyebrow: {
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "#0071e3",
    mb: 1.5,
  },
  heroTitle: {
    fontSize: { xs: "2.4rem", md: "3.4rem" },
    fontWeight: 700,
    letterSpacing: "-0.03em",
    lineHeight: 1.1,
    color: "#1d1d1f",
  },
  heroTitleAccent: {
    display: "block",
    mt: 0.5,
    backgroundImage:
      "linear-gradient(90deg, #6366f1, #0071e3, #06b6d4, #6366f1)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "shimmer 6s linear infinite",
  },
  heroSubtitle: {
    mt: 3,
    fontSize: "1.15rem",
    lineHeight: 1.6,
    color: "#424245",
    maxWidth: 560,
    mx: "auto",
  },
  ctaRow: {
    mt: 4,
    display: "flex",
    gap: 2,
    justifyContent: "center",
  },
  primaryCta: {
    borderRadius: "980px",
    px: 3.5,
    py: 1.2,
    fontSize: "1rem",
    fontWeight: 600,
    color: "#fff",
    backgroundImage: "linear-gradient(135deg, #6366f1 0%, #0071e3 100%)",
    boxShadow: "0 8px 20px rgba(0, 113, 227, 0.3)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      backgroundImage: "linear-gradient(135deg, #6366f1 0%, #0071e3 100%)",
      transform: "translateY(-2px)",
      boxShadow: "0 12px 28px rgba(0, 113, 227, 0.4)",
    },
  },
  secondaryCta: {
    borderRadius: "980px",
    px: 2,
    py: 1.2,
    fontSize: "1rem",
    fontWeight: 500,
    color: "#0071e3",
  },
  previewFrame: {
    borderRadius: 3,
    overflow: "hidden",
    border: "1px solid rgba(0,0,0,0.08)",
    boxShadow: "0 20px 50px rgba(99, 102, 241, 0.15)",
    background: "white",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 28px 60px rgba(99, 102, 241, 0.22)",
    },
  },
  previewImage: {
    width: "100%",
    display: "block",
  },
  previewCaption: {
    textAlign: "center",
    mt: 2,
    fontSize: "0.9rem",
    color: "#86868b",
  },
  highlight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1.5,
    flexWrap: "wrap",
    textAlign: "center",
    py: 2,
    px: 3,
    backgroundImage: "linear-gradient(90deg, #1d1d1f, #2a1d3d, #1d1d1f)",
  },
  highlightLabel: {
    fontSize: "0.75rem",
    fontWeight: 700,
    color: "#1d1d1f",
    background: "linear-gradient(135deg, #fff, #e0e7ff)",
    borderRadius: "6px",
    px: 1,
    py: 0.2,
  },
  highlightText: {
    fontSize: "0.95rem",
    color: "rgba(255,255,255,0.9)",
  },
  sectionTitle: {
    fontSize: { xs: "1.8rem", md: "2.2rem" },
    fontWeight: 700,
    letterSpacing: "-0.02em",
    color: "#1d1d1f",
  },
  closing: {
    background: "#f5f5f7",
    py: { xs: 7, md: 9 },
  },
  closingTitle: {
    fontSize: { xs: "1.6rem", md: "2rem" },
    fontWeight: 700,
    letterSpacing: "-0.02em",
    color: "#1d1d1f",
    mb: 2,
  },
  closingText: {
    fontSize: "1.05rem",
    lineHeight: 1.6,
    color: "#424245",
  },
};
