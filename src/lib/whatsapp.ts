const WHATSAPP_NUMBER = "5565999721093";

export function generateWhatsAppLink(productName: string): string {
  const message = `Olá! Estou vendo este produto: ${productName} e gostaria de mais informações ou quero comprar.`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function generateWhatsAppGeneralLink(): string {
  const message = "Olá! Gostaria de saber mais sobre os perfumes disponíveis.";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
