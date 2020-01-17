function createListHTML(links) {
  console.log(links);

  return links
    .map(
      link =>
        `<a href="./${link.toLowerCase()}/"><li class="button">${link}</li></a>`
    )
    .join(" ");
}

export default st => `
  <nav>
    <ul class="flex justify-space-around">
      ${createListHTML(st)}
    </ul>
  </nav>
  `;
