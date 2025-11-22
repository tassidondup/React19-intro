const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "AUD",
});

export const priceConverter = (price) => intl.format(price);

export default function useCurrency(price) {
  return priceConverter(price);
}
