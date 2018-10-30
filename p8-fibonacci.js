let fibonacci = (szamok) => {
  if (szamok < 2) {
    return szamok;
  } else {
    return fibonacci(szamok - 1) + fibonacci(szamok - 2);
  }
};

for (let i = 0; i < 100; i++) {
  fibonacci();
}
