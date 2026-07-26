const heart = document.getElementById('wishlist-heart');

heart.addEventListener('click', function(){
    this.classList.toggle('fa-regular');
    this.classList.toggle('fa-solid');
    this.classList.toggle('active');
})

