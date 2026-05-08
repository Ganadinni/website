// Central config — edit here to update everywhere
export const WA_NUMBER = '918886277713';
export const WA_LINK = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
