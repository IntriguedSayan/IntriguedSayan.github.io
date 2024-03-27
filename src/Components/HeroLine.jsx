import { Box, Text } from "@chakra-ui/react";
import "./HeroLine.css";
export default function HeroLine() {
  return (
    <Box width={{ base: "90%", md: "88%", lg: "80%" }} m={"5% 0 0 0"}>
      <Box
        fontSize={{ base: "xl", md: "2xl", lg: "5xl" }}
        fontWeight={"bold"}
        color="white"
      >
        Making use of<Text className="gradien">Creativity</Text> to solve
        <Text className="gradien">problems</Text> is my work.
      </Box>
    </Box>
  );
}
