import axios from "axios";
import { ReceivedHouseTypes } from "./entities/ReceivedHouseTypes";

const baseUrl = "https://anapioficeandfire.com/api";
const housesUrl = `${baseUrl}/houses`;

const getHouses = async (
  page: number = 1,
  pageSize: number = 12
): Promise<ReceivedHouseTypes[]> => {
  try {
    const response = await axios.get<ReceivedHouseTypes[]>(
      `${housesUrl}?page=${page}&pageSize=${pageSize}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const api = {
  getHouses,
};
