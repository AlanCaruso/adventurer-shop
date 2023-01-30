const createNav = () => {
    let nav = document.querySelector('.navbar');


    nav.innerHTML = `
    <div class="nav">
        <img src="img/logo.png" class="brand-logo" alt="">
        <div class="nav-items">
            <a href="#"><img src="img/user.png" alt=""></a>
            <a href="#"><img src="img/cart.png" alt=""></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">home</a></li>
        <li class="link-item"><a href="#" class="link">shoes</a></li>
        <li class="link-item"><a href="#" class="link">socks</a></li>
        <li class="link-item"><a href="#" class="link">shirts</a></li>
        <li class="link-item"><a href="#" class="link">shorts</a></li>
    </ul>
    `;
}

createNav();