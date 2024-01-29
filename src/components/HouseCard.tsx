import {
    Card,
    CardContent,
    Typography,
    Button,
    Tooltip,
    Box,
  } from "@mui/material";
  
  export interface HouseCardProps {
    title: string;
    region: string;
    founded: string;
    coatOfArms: string;
  }
  
  export function HouseCard({ id, name, region, founded, coatOfArms }) {
  
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
            <Tooltip title="Add to Favorites" arrow placement="bottom-end">
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  border: "1px solid #FFC0CB",
                  color: "#FFC0CB",
                  backgroundColor: "#FFF",
                  "&:hover": {
                    backgroundColor: "#FFC0CB",
                    color: "#FFF",
                  },
                }}
              >
                <Favorite />
              </Button>
            </Tooltip>
          </Box>
        </Box>
      </Card>
    );
  }
  