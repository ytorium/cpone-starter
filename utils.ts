export const walletFormat = (address, digits = 4) => {
  return (
    address.substring(0, digits) +
    "..." +
    address.substring(address.length - digits, address.length)
  );
};