window.onload = function() {
    const liItem = document.querySelectorAll('ul li');
    const imgItem = document.querySelectorAll('.boxs');

    liItem.forEach(li => {
        li.onclick = function() {
            //active
            liItem.forEach(li => {
                li.className = "";
            })
            li.className = "active";

            //Filter
            const value = li.textContent;
            imgItem.forEach(boxs => {
                boxs.style.display = 'none';
                if (boxs.getAttribute('data-filter') == value.toLowerCase() || value == "All Menu") {
                    boxs.style.display = 'block';
                }
            })
        }
    });
}