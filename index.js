function writeCards(names, reason) {
  return names.map(
    (name) => `Thank you, ${name}, for the wonderful ${reason} gift!`
  );
}
function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}
