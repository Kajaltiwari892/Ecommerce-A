const navbar = ` <!-- left part of the nav -->
       <div class="left-nav">
        <img src="Apna Bazar.png" alt="">
    </div>
<!-- seacrh bar of the nav -->
    <div class="search-bar">
        <input type="text" placeholder="Find Your Favrouite Product" id="search-input">
        <button id="search-button">Search</button>
      </div>
<!-- right part of the nav -->
    <div class="right-nav">
        <nav class="navbar">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="products.html">Products</a>
            <a href="login.html">Login</a>
            <a href="contact.html">Contact</a>
        </nav>
    </div>`;

    document.getElementById('header').innerHTML = navbar