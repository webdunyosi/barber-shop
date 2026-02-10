// Telegram Bot API integration
// Calls are proxied through the backend server to avoid CORS issues

import { formatPrice } from './format';

// Backend API URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// Helper function to send message via backend
const sendMessageViaBackend = async (message) => {
  const response = await fetch(`${API_URL}/api/telegram/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to send message');
  }

  return await response.json();
};

export const sendBookingToTelegram = async (bookingData) => {
  try {
    const message = `
🎉 *Yangi buyurtma!*

👤 *Mijoz:* ${bookingData.name}
📱 *Telefon:* ${bookingData.phone}

💈 *Xizmat:* ${bookingData.service.name}
💰 *Narx:* ${formatPrice(bookingData.service.price)} so'm

📅 *Sana:* ${bookingData.date}
🕐 *Vaqt:* ${bookingData.time}

✅ *Buyurtma tasdiqlandi!*
    `.trim();

    console.log('Sending to Telegram via backend:', message);
    
    return await sendMessageViaBackend(message);
  } catch (error) {
    console.error('Telegram error:', error);
    throw error;
  }
};

export const sendPaymentReceiptToTelegram = async (paymentData) => {
  try {
    const message = `
🧾 *To'lov cheki*

👤 *Mijoz:* ${paymentData.name}
📱 *Telefon:* ${paymentData.phone}

💈 *Xizmat:* ${paymentData.service.name}
💰 *To'langan summa:* ${formatPrice(paymentData.service.price)} so'm

💳 *Karta:* **** **** **** ${paymentData.cardNumber.slice(-4)}

📅 *Sana:* ${paymentData.date}
🕐 *Vaqt:* ${paymentData.time}

✅ *To'lov muvaffaqiyatli amalga oshirildi!*
🎉 *Buyurtma tasdiqlandi!*

Sizni kutib qolamiz! 💈
    `.trim();

    console.log('Sending receipt to Telegram via backend:', message);
    
    return await sendMessageViaBackend(message);
  } catch (error) {
    console.error('Telegram error:', error);
    throw error;
  }
};