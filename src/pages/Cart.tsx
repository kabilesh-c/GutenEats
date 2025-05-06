import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { dishes } from '@/data/dishes';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Cart = () => {
  const { language, t } = useLanguage();
  const { cart, updateQuantity, removeFromCart, totalItems } = useCart();
  const navigate = useNavigate();

  const cartItems = cart.map(item => {
    const dish = dishes.find(d => d.id === item.dishId);
    return {
      ...item,
      dish,
    };
  }).filter(item => item.dish !== undefined);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.dish?.price || 0) * item.quantity;
    }, 0);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === 'en' ? 'en-US' : language === 'de' ? 'de-DE' : language === 'es' ? 'es-ES' : 'fr-FR', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };

  return (
    <main className="py-12 bg-gray-50 min-h-[70vh]">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif font-bold text-german-brown mb-8 text-center">
          {t('cart.title')}
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <ShoppingCart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <p className="text-xl text-gray-600 mb-6">{t('cart.empty')}</p>
            <Link to="/menu">
              <Button className="bg-german-amber hover:bg-german-amber/90">
                {t('cart.browseMenu')}
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold">{t('cart.itemsLabel')} ({totalItems})</h2>
                </div>

                <ul className="divide-y">
                  {cartItems.map((item) => (
                    <li key={item.dishId} className="p-6 flex flex-col sm:flex-row sm:items-center">
                      <div className="sm:w-20 h-20 rounded-md overflow-hidden mb-4 sm:mb-0 sm:mr-4">
                        <img 
                          src={item.dish?.imageUrl} 
                          alt={item.dish?.translations[language].name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-medium text-lg">
                          {item.dish?.translations[language].name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {item.dish?.translations[language].region}
                        </p>
                        <p className="text-german-amber font-semibold mt-1">
                          {formatPrice(item.dish?.price || 0)}
                        </p>
                      </div>
                      
                      <div className="flex items-center mt-4 sm:mt-0">
                        <button
                          onClick={() => updateQuantity(item.dishId, item.quantity - 1)}
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>
                        
                        <span className="mx-3 w-6 text-center">{item.quantity}</span>
                        
                        <button
                          onClick={() => updateQuantity(item.dishId, item.quantity + 1)}
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                        
                        <button
                          onClick={() => removeFromCart(item.dishId)}
                          className="ml-4 p-1 text-red-500 hover:text-red-700"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">{t('cart.orderSummary')}</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('cart.subtotal')}</span>
                    <span>{formatPrice(calculateTotal())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('cart.delivery')}</span>
                    <span>{formatPrice(5.99)}</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-semibold">
                      <span>{t('cart.total')}</span>
                      <span>{formatPrice(calculateTotal() + 5.99)}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-german-amber hover:bg-german-amber/90 py-6"
                  onClick={() => navigate('/checkout')}
                >
                  {t('cart.checkout')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
