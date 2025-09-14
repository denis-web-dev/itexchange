const doc = document
const log = console.log

const aria = {
  label: {
    true: "Отправить реакцию «нравится»",
    false: "Отменить реакцию «нравится»"
  }
}

doc.addEventListener("click", ({ target }) => {
  const likeLink = target.closest(".card__link-like")

  if (!likeLink) return;
  likeLink.ariaPressed = likeLink.ariaPressed === "true" ? "false" : "true";
  likeLink.ariaLabel = aria.label[likeLink.ariaPressed];

  log(
    `Отправляю запрос, что кто-то лайкнул пост с id ${likeLink.dataset.id}`
  )
})
