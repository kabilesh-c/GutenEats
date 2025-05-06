import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { dishes } from '@/data/dishes';
import { Order } from '@/types';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { sendOrderConfirmationEmail, initEmailService, EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_PUBLIC_KEY } from '@/utils/emailService';
import emailjs from '@emailjs/browser';

const Checkout = () => {
  const { language, t } = useLanguage();
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailService();
  }, []);

  const cartItems = cart.map(item => {
    const dish = dishes.find(d => d.id === item.dishId);
    return {
      ...item,
      dish,
    };
  }).filter(item => item.dish !== undefined);

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((total, item) => {
      return total + (item.dish?.price || 0) * item.quantity;
    }, 0);
    return subtotal + 5.99; // Adding delivery fee
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === 'en' ? 'en-US' : language === 'de' ? 'de-DE' : language === 'es' ? 'es-ES' : 'fr-FR', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !address) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (cart.length === 0) {
      toast({
        title: "Error",
        description: "Your cart is empty",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Generate order ID
    const generatedOrderId = `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    setOrderId(generatedOrderId);

    // Create order object (in a real app, this would be sent to a backend)
    const order: Order = {
      id: generatedOrderId,
      items: cart,
      customerName: name,
      customerEmail: email,
      customerAddress: address,
      status: 'pending',
      total: calculateTotal(),
      createdAt: new Date().toISOString(),
    };

    // Format order items for email
    const orderItemsForEmail = cartItems.map(item => 
      `${item.dish?.translations[language].name} x ${item.quantity} - ${formatPrice((item.dish?.price || 0) * item.quantity)}`
    ).join('\n');

    try {
      // Log order and email details for debugging
      console.log('Sending order email with details:', {
        orderItems: orderItemsForEmail,
        total: formatPrice(calculateTotal()),
        customer: { name, email, address }
      });

      // Prepare email parameters
      const emailParams = {
        toName: name,
        toEmail: email,
        address: address,
        orderItems: orderItemsForEmail,
        orderTotal: formatPrice(calculateTotal()),
        orderNumber: generatedOrderId,
        orderDate: new Date().toLocaleDateString()
      };

      // Try with the utility function first
      let emailSent = await sendOrderConfirmationEmail(emailParams);
      console.log('Email sending result from utility:', emailSent);

      // Try alternative direct email method if the first method failed
      if (!emailSent) {
        try {
          console.log('Attempting direct email method with key:', EMAIL_PUBLIC_KEY);
          // Ensure EmailJS is initialized properly
          emailjs.init(EMAIL_PUBLIC_KEY);
          
          // Direct method using emailjs
          const directResult = await emailjs.send(
            EMAIL_SERVICE_ID,
            EMAIL_TEMPLATE_ID,
            {
              to_name: name,
              to_email: email,
              customer_address: address,
              order_items: orderItemsForEmail,
              order_total: formatPrice(calculateTotal()),
              order_number: generatedOrderId,
              order_date: new Date().toLocaleDateString()
            }
          );
          
          console.log('Direct email method result:', directResult);
          emailSent = true;
        } catch (directError) {
          console.error('Direct email method also failed:', directError);
        }
      }

      // Show appropriate toast based on email sending status
      if (emailSent) {
        toast({
          title: "Order Placed",
          description: "Your order has been successfully placed. Check your email for confirmation.",
        });
      }

      // Log the order (in a real app, this would be saved to a database)
      console.log('Order created:', order);
      
      // Clear cart and complete order
      clearCart();
      setIsSubmitting(false);
      setIsOrderComplete(true);
    } catch (error) {
      console.error('Error processing order:', error);
      toast({
        title: "Error",
        description: "There was a problem processing your order. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  if (isOrderComplete) {
    return (
      <main className="py-12 bg-gray-50 min-h-[70vh]">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            
            <h1 className="text-2xl font-serif font-bold mb-4">
              {t('checkout.confirmationTitle')}
            </h1>
            
            <p className="text-gray-600 mb-2">
              {t('checkout.confirmationMessage').replace('{email}', email)}
            </p>
            
            <p className="text-gray-600 mb-6">
              {t('checkout.orderNumberMessage').replace('{orderNumber}', orderId)}
            </p>
            
            <Button
              className="bg-german-amber hover:bg-german-amber/90 w-full"
              onClick={() => navigate('/')}
            >
              {t('checkout.returnHome')}
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="py-12 bg-gray-50 min-h-[70vh]">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif font-bold text-german-brown mb-8 text-center">
          {t('checkout.title')}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('checkout.name')}
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('checkout.email')}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('checkout.address')}
                    </label>
                    <Textarea
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      rows={4}
                      required
                    />
                  </div>
                
                  <Button
                    type="submit"
                    className="w-full bg-german-amber hover:bg-german-amber/90 py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      t('checkout.submit')
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">{t('checkout.orderSummary')}</h2>
              
              <ul className="divide-y mb-4">
                {cartItems.map((item) => (
                  <li key={item.dishId} className="py-3 flex justify-between">
                    <div>
                      <p className="font-medium">
                        {item.dish?.translations[language].name} × {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium">
                      {formatPrice((item.dish?.price || 0) * item.quantity)}
                    </p>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('checkout.subtotal')}</span>
                  <span>
                    {formatPrice(calculateTotal() - 5.99)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('checkout.delivery')}</span>
                  <span>{formatPrice(5.99)}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between font-semibold">
                    <span>{t('checkout.total')}</span>
                    <span>{formatPrice(calculateTotal())}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
