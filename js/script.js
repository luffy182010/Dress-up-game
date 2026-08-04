const grid = document.getElementById("itemsGrid");

const clothes = document.getElementById("clothes");
const shoes = document.getElementById("shoes");
const eyes = document.getElementById("eyes");
const hair = document.getElementById("hair");

// أسماء المجلدات
const folders = {
    clothes: "Clothes",
    hair: "hair/back",
    eyes: "eyes",
    shoes: "shoes"
};

// تحميل العناصر
function loadItems(category) {

    grid.innerHTML = "";

    data[category].forEach(image => {

        const item = document.createElement("div");

        item.className = "item";

        item.innerHTML = `
            <img src="Img/${folders[category]}/${image}">
        `;

        item.onclick = () => {

            switch(category){

                case "clothes":
                    clothes.src = `Img/Clothes/${image}`;
                    break;

                case "hair":
                    hair.src = `Img/hair/back/${image}`;
                    break;

                case "eyes":
                    eyes.src = `Img/eyes/${image}`;
                    break;

                case "shoes":
                    shoes.src = `Img/shoes/${image}`;
                    break;

            }

            selectItem(item);

        };

        grid.appendChild(item);

    });

}

// تحديد القطعة المختارة
function selectItem(selected){

    document.querySelectorAll(".item").forEach(item=>{

        item.style.border = "2px solid transparent";

    });

    selected.style.border = "3px solid hotpink";

}

// تغيير التبويبات
document.querySelectorAll(".tab").forEach(tab=>{

    tab.addEventListener("click",()=>{

        document.querySelector(".tab.active").classList.remove("active");

        tab.classList.add("active");

        loadItems(tab.dataset.category);

    });

});

// أول تشغيل
loadItems("clothes");
