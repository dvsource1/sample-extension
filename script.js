const extContainerElm = document.getElementById("ext-container");

if (extContainerElm) {
  const sampleDataListElm = document.createElement("ul");
  [1, 2, 3, 4].forEach((i) => {
    const listItemElm = document.createElement("li");
    listItemElm.appendChild(document.createTextNode(`Data ${i}`));
    sampleDataListElm.appendChild(listItemElm);
  });

  extContainerElm.appendChild(sampleDataListElm);
}
