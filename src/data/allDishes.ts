import { dishes } from './dishes';
import { moreDishes } from './moreDishes';
import { Dish } from '@/types';

// This file combines all dish sources into one exported array
export const allDishes: Dish[] = [...dishes, ...moreDishes];

// Export a function to get dishes by category
export const getDishesByCategory = (category: string) => {
  if (category === 'all') {
    return allDishes;
  }
  return allDishes.filter(dish => dish.category === category);
};

// Update the existing dishes export to use allDishes
// This ensures backward compatibility with existing code
export { allDishes as dishes };
