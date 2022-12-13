u("div#ext-container")
  .append(
    u("<ul>").append(
      (item) => {
        return u("<li>")
          .append(`Data ${item}`)
          .attr({ id: `LI_${item}` });
      },
      [1, 2, 3, 4, 5]
    )
  )
  .append(u("<h3>").append("H34"));
