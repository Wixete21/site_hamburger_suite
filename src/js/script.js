document.addEventListener("DOMContentLoaded", function(event) {

    //Un commentaire
    console.log("Ça fonctionne!!!");


    var informations = [
        {
            id: "pizza",
            title: "Nos Pizza",
            slogan: "Eat. Pizza. Repeat.",
            type: ["pepperoni", "All Dress", "Baaaaaacon"],
            image: "images/pizza/main.jpg",
            description: "NY style pesto ricotta onions chicken and bacon chicken wing peppers pie lasagna steak. Parmesan hawaiian extra sauce, onions pizza roll meatball stuffed burnt mouth black olives meatball thin crust bbq rib. Chicken and bacon pizza roll ham thin crust",    
            gallery: ["images/pizza/1.jpg", "images/pizza/2.jpg", "images/pizza/3.jpg"]

        }, {
            id: "bacon",
            title: "Baaaaacoonnn",
            slogan: "Bacon c'est comme un High-five pour ta bouche",
            type: ["À l'érable", "Bacon de sanglier", "avec du bacon", "au bacon", "avec du bacon"],
            image: "images/bacon/main.jpg",
            description: "Leberkas hamburger ribeye, jerky frankfurter prosciutto tail fatback. Ham hock venison andouille ham turducken porchetta tenderloin t-bone flank beef ribs salami ribeye pork belly short ribs shankle. Cow capicola ground round, pancetta flank spare ribs swine pork chop chuck rump brisket sirloin",    
            gallery: ["images/bacon/1.jpg", "images/bacon/2.jpg", "images/bacon/3.jpg"]
        }, {
            id: "beigne",
            title: "Beigne",
            slogan: "Donut worry be happy",
            type: ["Glacé au chocolat", "Crème Boston", "Fraises", "Rousettes au miel", "À 'ancienne"],
            image: "images/donuts/main.jpg",
            description: "Cake sweet tiramisu lollipop donut sprinkles dolor tiramisu marzipan jelly. Tiramisu muffin cookie orange dolor marzipan croissant sweet ipsum muffin. Tiramisu donut marzipan croissant lollipop orange cookie sugar vanilla cake. Sugar orange muffin sweet cake croissant sprinkles dolor jelly cake",    
            gallery: ["images/donuts/1.jpg", "images/donuts/2.jpg", "images/donuts/3.jpg"]
        }
    ];


    if(document.querySelector('.page-item')){
        reinitialiserItem();
    }
    function reinitialiserItem() {
        var url = window.location.search;
        console.log(url);

        var params = new URLSearchParams(url);
        console.log(params);

        //Quel type de contenu on veut
        var type =  params.get('type');
        console.log(type);

        var contenu = informations.find(element => element.id === type);
        console.log(contenu);

        var title = document.querySelector('.main-title');
        title.innerHTML = contenu.title;

        var slogan = document.querySelector('.sub-title');
        slogan.innerHTML = contenu.slogan;

        var desc = document.querySelector('.sub-description p');
        desc.innerHTML = contenu.description;

        var image = document.querySelector('.sub-image img');
        image.src = contenu.image;

        var list = document.querySelector('.type-list');
        list.innerHTML = "";

        for(let x = 0; x < contenu.type.length; x++){
            console.log(contenu.type[x]);
            let li = document.createElement("li");
            li.innerHTML = contenu.type[x];

            list.appendChild(li);
        }

        var gallery = document.querySelectorAll('.thumb img');
        for(let i = 0; i < gallery.length; i++){
            var thumb = gallery[i];
            thumb.src = contenu.gallery[i];
        }
    }
});