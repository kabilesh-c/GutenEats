import emailjs from '@emailjs/browser';

// EmailJS credentials
export const EMAIL_SERVICE_ID = 'service_20sxhao';
export const EMAIL_TEMPLATE_ID = 'template_1nk27n3';
export const EMAIL_PUBLIC_KEY = 'Nk_Y7mBeMzbnmX-la0bKD';

export interface EmailParams {
  toName: string;
  toEmail: string;
  address: string;
  orderItems: string;
  orderTotal: string;
  orderNumber: string;
  orderDate: string;
}

// Initialize EmailJS service
export const initEmailService = () => {
  try {
    console.log('Initializing EmailJS with public key:', EMAIL_PUBLIC_KEY);
    emailjs.init(EMAIL_PUBLIC_KEY);
    console.log('EmailJS initialized successfully');
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
  }
};

// Send order confirmation email
export const sendOrderConfirmationEmail = async (params: EmailParams): Promise<boolean> => {
  try {
    console.log('Attempting to send email with:', {
      serviceId: EMAIL_SERVICE_ID,
      templateId: EMAIL_TEMPLATE_ID,
      publicKey: EMAIL_PUBLIC_KEY,
      toEmail: params.toEmail
    });

    const templateParams = {
      to_name: params.toName,
      to_email: params.toEmail,
      customer_address: params.address,
      order_items: params.orderItems,
      order_total: params.orderTotal,
      order_number: params.orderNumber,
      order_date: params.orderDate
    };
    
    console.log('Template parameters:', templateParams);

    const response = await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending email:', {
      name: error instanceof Error ? error.name : 'Unknown error',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : 'No stack trace'
    });
    return false;
  }
}; 