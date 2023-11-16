import { FlowerListResponse } from '../types/api/responseTypes';

export const fetchFlowers = async (): Promise<FlowerListResponse> => {
  try {
    const response = await fetch(
      'https://flowrspot-api.herokuapp.com/api/v1/flowers'
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching flowers:', error);
    return {
      flowers: [],
    };
  }
};
