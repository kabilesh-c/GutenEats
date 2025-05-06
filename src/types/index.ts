export type Language = 'en' | 'de' | 'es' | 'fr';

export interface Dish {
  id: string;
  imageUrl: string;
  price: number;
  audioUrl: Record<Language, string>;
  translations: {
    [key in Language]: DishTranslation;
  };
  prepTime?: number; // Preparation time in minutes
  category?: 'sausages' | 'meat' | 'sides' | 'desserts'; // Category for filtering
}

export interface CartItem {
  dishId: string;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  customerName: string;
  customerEmail: string;
  customerAddress: string;
  status: 'pending' | 'completed' | 'cancelled';
  total: number;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export interface DishTranslation {
  name: string;
  description: string;
  ingredients: string[];
  region: string;
  preparationSteps?: string[];
  tips?: string[];
}

export interface FeaturedDish {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  region: string;
}
