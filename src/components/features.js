import { Grid, Card, CardContent, Typography, Box, Chip } from "@mui/material";
import {
  LightbulbOutlined,
  PlayCircleOutline,
  SchoolOutlined,
  ShapeLine,
  AutoAwesomeOutlined,
  UndoOutlined,
  SaveOutlined,
  CodeOutlined,
} from "@mui/icons-material";
import { useRouter } from "next/router";

const features = [
  {
    icon: <SchoolOutlined sx={{ fontSize: 40, color: "white" }} />,
    title: "Visual Learning",
    description:
      "Stop guessing what happens inside the loop. Our visualizer isolates and highlights the algorithm's exact decisions as they occur.",
    color: "#7c3aed",
    bgGradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
    path: "/sorting/HeapSort",
  },
  {
    icon: <PlayCircleOutline sx={{ fontSize: 40, color: "white" }} />,
    title: "Playback Control",
    description:
      "Don't just watch — control the flow. Pause, resume, and step through animations at your own pace to truly understand the algorithm's behavior.",
    color: "#2563eb",
    bgGradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)",
    path: "/sorting/QuickSort",
  },
  {
    icon: <ShapeLine sx={{ fontSize: 36, color: "white" }} />,
    iconSize: 36,
    title: "Custom Inputs",
    description:
      "Move beyond static examples. Draw custom directed or undirected graphs, edit weights, create binary trees, or input your own numbers to sort.",
    color: "#059669",
    bgGradient: "linear-gradient(135deg, #34d399 0%, #059669 100%)",
    path: "/graph/Prims",
  },
  {
    icon: <LightbulbOutlined sx={{ fontSize: 40, color: "white" }} />,
    title: "Share Insights",
    description:
      "Created a tricky graph or a specific tree structure? Generate a unique URL to share your exact visualization setup with peers or students instantly.",
    color: "#d97706",
    bgGradient: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
    path: "/graph/Dijkstras",
  },
  {
    icon: <AutoAwesomeOutlined sx={{ fontSize: 40, color: "white" }} />,
    title: "AI Summary",
    description:
      "Get AI-powered breakdowns of your custom graph algorithms and tree operations to bridge the gap between visualization and deep understanding.",
    color: "#0284c7",
    bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
    path: "/data-structures/BinaryHeap",
    isNew: true,
  },
  {
    icon: <UndoOutlined sx={{ fontSize: 40, color: "white" }} />,
    title: "Undo & Redo",
    description:
      "Made a mistake? No problem. Seamlessly step backward and forward through your graph algorithm setup and rebalanced tree structure.",
    color: "#f97316",
    bgGradient: "linear-gradient(135deg, #fb923c 0%, #f43f5e 100%)",
    path: "/data-structures/AVL",
    isNew: true,
  },
  {
    icon: <SaveOutlined sx={{ fontSize: 40, color: "white" }} />,
    title: "Save Data",
    description:
      "Don't start from scratch. Save your custom graph layouts and complex data structures to your library to revisit and refine your experiments anytime.",
    color: "#16a34a",
    bgGradient: "linear-gradient(135deg, #4ade80 0%, #16a34a 100%)",
    path: "/data-structures/SplayTree",
    isNew: true,
  },
  {
    icon: <CodeOutlined sx={{ fontSize: 40, color: "white" }} />,
    title: "Embed Visualizers",
    description:
      "Seamlessly embed any of the interactive algorithm or data structure directly into your own website, blog, or educational materials.",
    color: "#c026d3",
    bgGradient: "linear-gradient(135deg, #f0abfc 0%, #c026d3 100%)",
    path: "/articles",
    isNew: true,
  },
];

export default function Features() {
  const router = useRouter();

  return (
    <Grid container spacing={4} pb={4} justifyContent="center">
      {features.map((feat, index) => (
        <Grid item sm={6} lg={3} key={index} mx="auto">
          <Card
            elevation={0}
            className="fadeInUp"
            sx={{ ...styles.card(feat), animationDelay: `${index * 0.06}s` }}
            onClick={() => router.push(feat.path)}
          >
            {feat.isNew && (
              <Chip label="NEW" size="small" sx={styles.cardBadge()} />
            )}
            {/* Decorative background element */}
            <Box className="feature-bg" sx={styles.cardBackground(feat)} />

            {/* Icon container with gradient background */}
            <Box sx={styles.iconBox(feat)} mt={3} mx="auto">
              <Box className="feature-icon" height={feat.iconSize || 40}>
                {feat.icon}
              </Box>
            </Box>

            <CardContent sx={{ px: 3, pb: 3, textAlign: "center" }}>
              <Typography variant="h6" color="grey.900" mb={2}>
                {feat.title}
              </Typography>

              <Typography lineHeight={1.6} variant="body2" color="grey.600">
                {feat.description}
              </Typography>
            </CardContent>

            {/* Bottom accent line */}
            <Box sx={styles.accentLine(feat)} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

const styles = {
  card: (feat) => ({
    height: "100%",
    position: "relative",
    overflow: "hidden",
    borderRadius: 3,
    background: "#ffffff",
    boxShadow: "none",
    border: "1px solid",
    borderColor: "rgba(0,0,0,0.08)",
    transition:
      "border-color 0.2s ease, transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease",
    cursor: "pointer",

    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: `0 16px 32px ${feat.color}26`,
      borderColor: `${feat.color}55`,

      "& .feature-bg": {
        opacity: 0.12,
      },
      "& .feature-icon": {
        transform: "scale(1.1) rotate(-4deg)",
      },
    },
  }),

  cardBadge: () => ({
    fontWeight: 600,
    fontSize: "0.7rem",
    position: "absolute",
    top: 16,
    left: 16,
    bgcolor: "#1d1d1f",
    color: "#fff",
  }),

  cardBackground: (feat) => ({
    position: "absolute",
    top: -50,
    right: -50,
    width: 140,
    height: 140,
    background: feat.bgGradient,
    borderRadius: "50%",
    opacity: 0.06,
    transition: "opacity 0.3s ease",
  }),

  iconBox: (feat) => ({
    width: 52,
    height: 52,
    borderRadius: 2.5,
    background: feat.bgGradient,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: `0 8px 20px ${feat.color}40`,
    transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
  }),

  accentLine: () => ({
    display: "none",
  }),
};
