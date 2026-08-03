const grid = document.getElementById("itemsGrid");

const clothes = document.getElementById("clothes");
const shoes = document.getElementById("shoes");
const eyes = document.getElementById("eyes");
const hairFront = document.getElementById("hairFront");
const hairBack = document.getElementById("hairBack");

let currentCategory = "clothes";

function loadItems(category){

    currentCategory = category;

    grid.innerHTML = "";

    if(category === "hair"){

        data.hair.forEach((hair,index)=>{

            const item = document.createElement("div");

            item.className = "item";

            item.innerHTML = `
                <img src="Img/hair/front/${hair.front}">
            `;

            item.onclick = ()=>{

                hairFront.src = `Img/hair/front/${hair.front}`;

                hairBack.src = `Img/hair/back/${hair.back}`;

                selectItem(item);

            };

            grid.appendChild(item);

        });

        return;

    }

    data[category].forEach(image=>{

        const item = document.createElement("div");

        item.className = "item";

        item.innerHTML = `
            <img src="Img/${dataFolders[category]}/${image}">
        `;

        item.onclick = ()=>{

            switch(category){

                case "clothes":

                    clothes.src = `Img/Clothes/${image}`;

                break;

                case "shoes":

                    shoes.src = `Img/shoes/${image}`;

                break;

                case "eyes":

                    eyes.src = `Img/eyes/${image}`;

                break;

            }

            selectItem(item);

        };

        grid.appendChild(item);

    });

}

function selectItem(item){

    document.querySelectorAll(".item").forEach(i=>{

        i.style.border = "2px solid transparent";

    });

    item.style.border = "3px solid #ff69b4";

}

document.querySelectorAll(".tab").forEach(tab=>{

    tab.onclick = ()=>{

        document.querySelector(".tab.active").classList.remove("active");

        tab.classList.add("active");

        loadItems(tab.dataset.category);

    };

});

const dataFolders = {

    clothes:"Clothes",

    shoes:"shoes",

    eyes:"eyes"

};

loadItems("clothes");
