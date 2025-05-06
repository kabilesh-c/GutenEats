
import React, { createContext, useState, useContext, useEffect } from 'react';
import { CartItem } from '@/types';
import { useToast } from '@/components/ui/use-toast';

interface CartContextType {
  cart: CartItem[];
  addToCart: (dishId: string) => void;
  removeFromCart: (dishId: string) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  totalItems: 0,
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
        localStorage.removeItem('cart');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (dishId: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.dishId === dishId);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.dishId === dishId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { dishId, quantity: 1 }];
      }
    });
    
    toast({
      title: "Added to cart",
      description: "Item successfully added to your cart",
    });
  };

  const removeFromCart = (dishId: string) => {
    setCart(prevCart => prevCart.filter(item => item.dishId !== dishId));
    
    toast({
      title: "Removed from cart",
      description: "Item removed from your cart",
    });
  };

  const updateQuantity = (dishId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(dishId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.dishId === dishId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      totalItems 
    }}>
      {children}
    </CartContext.Provider>
  );
};
