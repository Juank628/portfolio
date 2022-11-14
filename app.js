let mobile_menu_icon = document.getElementById("mobile_menu_icon")
let mobile_menu = document.getElementById("mobile_menu")
let close_menu_icon = document.getElementById("close_menu_icon")

mobile_menu_icon.addEventListener("click", (e)=> {
    let classList = mobile_menu.classList
    classList.remove("no-visible")
})

close_menu_icon.addEventListener("click", (e)=> {
    let classList = mobile_menu.classList
    classList.add("no-visible")
})

