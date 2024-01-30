import {
  Card,
  CardContent,
  Typography,
  Tooltip,
  Box,
  Button,
} from "@mui/material";
import { Star } from "@mui/icons-material";
import { houseStore } from "../stores/HouseStore";
import { useState } from "react";
import { HouseCardTypes } from "../entities/House";

export function HouseCard({
  id,
  name,
  region,
  founded,
  coatOfArms,
}: HouseCardTypes) {
  const [isFavorite, setIsFavorite] = useState(houseStore.isFavorite(id!));
  const toggleFavorite = () => {
    houseStore.toggleFavorite(id!);
    setIsFavorite(!isFavorite);
  };

  return (
    <Card sx={{ minWidth: 275, height: "100%" }}>
      <Box
        sx={{
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent sx={{ minHeight: "100%" }}>
          <Typography variant="h5" sx={{ minHeight: "4rem" }}>
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              Founded:
            </Typography>{" "}
            {founded}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              Region:
            </Typography>{" "}
            {region}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              Coat of arms:
            </Typography>{" "}
            {coatOfArms}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "1rem",
            marginRight: "1rem",
          }}
        >
          <Tooltip
            title="Add to Favorites"
            arrow
            placement="bottom-end"
            enterDelay={300}
          >
            <Button
              variant="outlined"
              color="primary"
              sx={{
                border: "1px solid black",
                color: "#e3f2fd",
                backgroundColor: "transparent",
                transition: "color 0.3s",
                "&:hover": {
                  color: "#FFD700",
                },
              }}
              onClick={toggleFavorite}
            >
              <Star
                sx={{
                  color: isFavorite ? "#FFD700" : "#e3f2fd",
                }}
              />
            </Button>
          </Tooltip>
        </Box>
      </Box>
    </Card>
  );
}
