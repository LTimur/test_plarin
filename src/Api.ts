import axios from "axios";

const baseUrl = "https://anapioficeandfire.com/api";
const housesUrl = `${baseUrl}/houses`;

const getHouses = async (
  page: number = 1,
  pageSize: number = 12
): Promise<Array> => {
  try {
    const response = await axios.get(
      `${housesUrl}?page=${page}&pageSize=${pageSize}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const api = {
  getHouses,
};
