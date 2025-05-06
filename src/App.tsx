import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from '@/components/ScrollToTop';
import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Recipe from "@/pages/Recipe";
import About from "@/pages/About";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import NotFound from "@/pages/NotFound";
import Members from "@/pages/Members";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  // Get the base path from Vite's environment variable
  const basePath = import.meta.env.BASE_URL || '/';
  
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter basename={basePath}>
              <ScrollToTop />
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/recipe/:id" element={<Recipe />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
                <Footer />
              </div>
              <Chatbot />
            </BrowserRouter>
          </TooltipProvider>
        </CartProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
