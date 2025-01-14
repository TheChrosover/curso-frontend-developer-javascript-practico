const menuEmail = document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const mobileMenu= document.querySelector('.menu');
const burguerMenu= document.querySelector('.mobile-menu');
const aside= document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

mobileMenu.addEventListener('click', toggleMobileMenu)
menuEmail.addEventListener('click', toggleDesktopMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){
    //Quita y lo pone
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    burguerMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleCarritoAside() {
    aside.classList.toggle('inactive');
    burguerMenu.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    imagen: '//images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Rolex',
    price: 2120,
    imagen: '//images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Iphone',
    price: 1220,
    imagen: '//images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr){
    for  (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagen);
      
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
      
        const productInfoDiv = document.createElement('div');
      
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
      
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
      
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
      
        productInfoFigure.appendChild(productImgCart);
      
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
      
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
      
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);