let products = [
    
    {   category: "konyhai", 
        name: "turmix2000", 
        price:5000, 
        stock: 1, 
        attachements: ["fej", "motor"]
    },
    {   category: "Pancsi", 
        name: "Sampon", 
        price:500, 
        stock: 6, 
        attachements: ["head", "shoulder"]
    },
    {   category: "Pancsi", 
        name: "Tusfürdő", 
        price:400, 
        stock: 2, 
        attachements: ["kókusz", "shoulder"]
    }
]; //utolsó eleme egy object(objektum) lesz onnan ismerem meg kulcs:érték

let customer = "Ádám";

function main() {
    console.log("it works!");
    let product = products[2];
    let answer = window.confirm("Do you want a "+ product.name);//stringet adok át
   if (answer === false) {
        let answer = window.confirm("But it has "+ product.attachements.join(",") );
        if(answer === true) {
            console.log(product)
        }
   }
}

function displayDetails(product) { //egy db objektum tömbbol kiolovassuk
    let stock = product.stock; //értékeket kivesszük és egy változoba tesszük
    let price = product.price;
    let name = product.name;
    let value= price*stock;
    let attachements = product.attachements;
    let productDetailsDiv = document.createElement("div");
    productDetailsDiv.className = "product-details"; //cssben ezzel tuduk hivatkzi rá
    productDetailsDiv.innerText = name + " : " + value + " " + attachements.join(", ");
    document.getElementById("container").append(productDetailsDiv);

    let available = stock > 5;//logikai kif: értéke igaz ha matematikailag megfelelünk ennek a feltételnek. ha a stock több mint 5 az expression true lesz
    let stockInfoDiv = document.createElement("div");
    stockInfoDiv.className = "stockinfo";
    if (available) {
        stockInfoDiv.innerText = ("elérhető");
    }else {
        stockInfoDiv.innerText = (" nem elérhető");
    }
    productDetailsDiv.append(stockInfoDiv);

    let special = customer ==="Ádám"; //equality operátor
    if (!available && special){ //nem és és opeátor
        stockInfoDiv.innerText = stockInfoDiv.innerText +" (de neki mégis) ";
    }
}

function inventory() {
  /*  let stock = products[2].stock;
    let price = products[2].price;
    let value= price*stock;
    let div = document.createElement("div");
    div.innerText =products[2].name + " : " +value;
    document.body.append(div);

    stock = products[0].stock;
    price = products[0].price;
    value= price*stock;
    div = document.createElement("div");
    div.innerText =products[0].name + " : " +value;
    document.body.append(div);

    stock = products[1].stock;
    price = products[1].price;
    value= price*stock;
    div = document.createElement("div");
    div.innerText =products[1].name + " : " +value;
    document.body.append(div); */

    displayDetails(products[0]); //function call (paraméter)
    displayDetails(products[1]);
    displayDetails(products[2]);

    

}

window.addEventListener("load", inventory); //átadom neki a maint h ezt futtasd le itt feliratkozol esemémyre