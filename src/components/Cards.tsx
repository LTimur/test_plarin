import { observer } from "mobx-react";
import { houseStore } from "../stores/HouseStore";
import { HouseCard } from "../components/HouseCard";
import { Grid, Container, Button } from "@mui/material";
import { useEffect } from "react";
import { action } from "mobx";
import { api } from "../api";

const loadPage = async (page: number) => {
  try {
    const housesResult = await api.getHouses(page);
    action(() => {
      houseStore.currentPage = page;
      houseStore.setCards(housesResult);
    })();
  } catch (error) {
    console.log(error);
  }
};

export const Cards = observer(() => {
  useEffect(() => {
    void loadPage(houseStore.currentPage);
  }, []);

  const goToPreviousPage = () => {
    const previousPage = houseStore.currentPage - 1;
    if (previousPage >= 1) {
      loadPage(previousPage);
    }
  };

  const goToNextPage = () => {
    const nextPage = houseStore.currentPage + 1;
    loadPage(nextPage);
  };

  return (
    <>
      <Container maxWidth="lg" style={{ textAlign: "center" }}>
        <Grid container spacing={2} justifyContent="center" marginBottom="1rem">
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
        <Button
          disabled={houseStore.currentPage === 1}
          onClick={goToPreviousPage}
        >
          Previous
        </Button>
        <Button onClick={goToNextPage}>Next</Button>
      </Container>
    </>
  );
});
