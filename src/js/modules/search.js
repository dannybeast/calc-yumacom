export default function() {
  const $searchFields = document.querySelectorAll(
    ".choose-color__search input"
  );
  const $colorItems = document.querySelectorAll(
    ".modal-visible .js-color-item"
  );

  for (let field of $searchFields) {
    field.addEventListener("keyup", () => {
      for (let i = 0; i < $colorItems.length; i++) {
        let val = field.value.toLowerCase();
        let item = $colorItems[i];
        let title = item.querySelector("p").innerHTML.toLowerCase();

        if (title.indexOf(val) !== -1) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  }
}
