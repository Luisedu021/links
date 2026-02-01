function ToggleMode() {
  const html = document.documentElement
  const body = document.body
  const img = document.querySelector("#profile img")

  html.classList.toggle("light")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar-escuro.png")
    img.setAttribute(
      "alt",
      "Foto de Luís Eduardo no onibus de frente com um black,cavanhaque e bigode e óculos escuros"
    )
  } else {
    img.setAttribute("src", "assets/avatar-claro.png")
    img.setAttribute(
      "alt",
      "Foto de Luís Eduardo no onibus de frente com um black,cavanhaque e bigode"
    )
  }
}
