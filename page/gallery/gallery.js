const arrPhotographs = [
    { 
        title: "Круглий стіл «Центри підтримки студентів: спільні рішення для рівних можливостей»",
        img_url: "images/centrePidrumka.jpg" 
    },
    { 
        title: "Благодійний ярмарок у Полтавській політехніці",
        img_url: "images/halloween.jpg" 
    },
    { 
        title: "Всеукраїнський флешмоб «White card» («Біла картка»)",
        img_url: "images/whiteCard.jpg"
    },
    { 
        title: "Спортивний клуб для студентів",
        img_url: "images/tenis.jpg"
    },
    { 
        title: "Наші студенти на природі",
        img_url: "images/student.jpg"
    },
    { 
        title: "Наші студенти під час пари",
        img_url: "images/student2.jpg"
    },
    { 
        title: "Наші студенти",
        img_url: "images/student3.jpg"
    },
    {
        title: "Студенти Полтавської політехніки перемогли на Всеукраїнській олімпіаді",
        img_url: "images/olimpiada.jpg",
    },
    {
        title: "Відкрито новий коворкінг-простір для студентів",
        img_url: "images/kovorking.jpg",
    },
    {
        title: "Полтавська політехніка організувала благодійний студентський ярмарок",
        img_url: "images/yarmarok.jpg",
    },
    {
        title: "Проведено День першокурсника 2025",
        img_url: "images/pershokersnuk.jpg",
    },
    {
        title: "В університеті стартував проект «Eco System»",
        img_url: "images/ecoSystem.jpg",
    },
]

const photographs = document.getElementById("photographs")

function createGallery(){
    for(let photo of arrPhotographs){
        const div = document.createElement("div")
        div.classList.add("blockPhoto")
        div.style.backgroundImage = `url(${photo.img_url})`
        const h2 = document.createElement("h2")
        h2.innerText = photo.title

        div.append(h2)
        photographs.append(div)
    }
}

createGallery()