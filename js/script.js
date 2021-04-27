const clubSelect = document.querySelector(".club-select");
const clubSelectList = document.querySelector(".clubs-list ul");

clubSelect.addEventListener("click", () => {
    console.log(clubSelectList);
    if (clubSelectList.classList.contains("display-block")) {
        clubSelectList.classList.add("display-none"); 
        clubSelectList.classList.remove("display-block");
        console.log('added')
    }
    else {
        clubSelectList.classList.add("display-block");
        clubSelectList.classList.remove("display-remove");
        console.log('removed')
    }
})