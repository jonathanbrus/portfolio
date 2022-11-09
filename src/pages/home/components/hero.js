import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const HeroSection = () => {
  return (
    <Container
      sx={{
        minHeight: "68vh",
        px: { xs: "1.6rem", sm: "2.6rem" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          width: { xs: "100%", md: "66%" },
          fontSize: { xs: "2.3rem", sm: "3rem", md: "3.6rem" },
          fontWeight: "bolder",
        }}
      >
        Building digital products, brands{" "}
        <Box component="span" color="primary.light">
          & experience.
        </Box>
      </Typography>
      <Typography sx={{ my: { xs: "1.8rem", sm: "1.4rem" }, width: { xs: "86%", sm: "56%" } }}>
        A lifelong learner 🎓 exploring and creating products that bring a change 🚀✨
      </Typography>
    </Container>
  );
};

// const Titles = ({ toggle }) => {
//   const transition = {
//     delay: 3,
//     type: "tween",
//     duration: 6,
//     repeat: Infinity,
//     repeatType: "loop",
//   };

//   const variant = {
//     initial: {
//       y: 20,
//     },
//     animate: {
//       y: -20,
//     },
//   };

//   return (
//     <div style={{ overflow: "hidden", height: "16px" }}>
//       <motion.div
//         variants={variant}
//         initial="initial"
//         animate="animate"
//         transition={{
//           delay: 0.2,
//           type: "tween",
//           duration: 6,
//           repeat: Infinity,
//           repeatType: "loop",
//         }}
//       >
//         <Typography>MERN-Stack Developer</Typography>
//       </motion.div>
//       <motion.div
//         variants={variant}
//         initial="initial"
//         animate={{
//           y: -38,
//         }}
//         transition={transition}
//       >
//         <Typography>Flutter Developer</Typography>
//       </motion.div>
//     </div>
//   );
// };
