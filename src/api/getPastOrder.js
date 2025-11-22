export default async function getPastOrder(order) {
  //   await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate network delay for 5 seconds
  const response = await fetch(`/api/past-order/${order}`);
  const data = await response.json();
  return data;
}
