import { observer } from "mobx-react";
import { houseStore } from "../stores/HouseStore";
import { HouseCard } from "../components/HouseCard";
import { Grid, Container, Pagination } from "@mui/material";
import { useState } from "react";

export const Favorites = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = houseStore.favorites.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  return (
    <Container maxWidth="lg" style={{ textAlign: "center" }}>
      <Grid container spacing={2} justifyContent="center">
        {currentCards.map((favoriteCard) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={favoriteCard.id}>
            <HouseCard
              id={favoriteCard.id}
              name={favoriteCard.name}
              founded={favoriteCard.founded || "unknown"}
              region={favoriteCard.region}
              coatOfArms={favoriteCard.coatOfArms || "unknown"}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center">
        <Pagination
          count={Math.ceil(houseStore.favorites.length / cardsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          style={{ marginTop: "20px" }}
        />
      </Grid>
    </Container>
  );
});
