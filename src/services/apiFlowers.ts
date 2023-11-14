import { Flower } from '../types';

export const fetchFlowers = async (): Promise<Flower[]> => {
  try {
    const response = await fetch(
      'https://flowrspot-api.herokuapp.com/api/v1/flowers'
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: Flower[] = (await response.json()).flowers;

    return data;
  } catch (error) {
    console.error('Error fetching flowers:', error);
    return [];
  }
};
