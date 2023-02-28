function capitalize(s) {
  return [
    s
      .split("")
      .map((item, index) =>
        index % 2 === 0 ? item.toUpperCase() : item.toLowerCase()
      )
      .join(""),
    s
      .split("")
      .map((item, index) =>
        index % 2 !== 0 ? item.toUpperCase() : item.toLowerCase()
      )
      .join(""),
  ];
}
