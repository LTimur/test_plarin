import { observer } from "mobx-react";
import { houseStore } from "../stores/HouseStore";
import { api } from "../Api";
import { HouseCard } from "../components/HouseCard";
import { Grid, Container } from "@mui/material";
import { useEffect } from "react";

export const Cards = observer(() => {
  useEffect(() => {
    loadPage(houseStore.currentPage);
  }, []);

  const loadPage = async (page) => {
    try {
      const housesResult = await api.getHouses(page);
      houseStore.setCards([...houseStore.cards, ...housesResult]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container maxWidth="lg" style={{ textAlign: "center" }}>
        <Grid container spacing={2} justifyContent="center">
          {houseStore.cards.map((card) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
              <HouseCard
                id={card.id}
                name={card.name}
                founded={card.founded || "unknown"}
                region={card.region}
                coatOfArms={card.coatOfArms || "unknown"}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
});
