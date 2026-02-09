// Telegram Bot API integration
// Note: In production, this should be implemented on the backend for security

const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE'; // Replace with your bot token
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE'; // Replace with your chat ID

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

    // Simulate API call (in production, this should be done on the backend)
    console.log('Sending to Telegram:', message);
    
    // Uncomment this in production with real tokens
    /*
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );
    
    return await response.json();
    */
    
    // Return mock success response
    return { ok: true, message: 'Booking sent successfully' };
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

    console.log('Sending receipt to Telegram:', message);
    
    // Uncomment this in production with real tokens
    /*
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );
    
    return await response.json();
    */
    
    // Return mock success response
    return { ok: true, message: 'Receipt sent successfully' };
  } catch (error) {
    console.error('Telegram error:', error);
    throw error;
  }
};

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
