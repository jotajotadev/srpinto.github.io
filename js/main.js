let buttonShowItems = document.getElementById("button-show");
const showItems = () => {
    let hiddenItems =  document.getElementById("hidden");
    hiddenItems.classList.toggle("show-items");
}
buttonShowItems.addEventListener("click", showItems)