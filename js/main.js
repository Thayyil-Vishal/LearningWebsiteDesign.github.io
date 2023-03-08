const slideUp = () => {
  const slideUpElements = document.querySelectorAll('.slide-up');
  slideUpElements.forEach((el) => {
    window.addEventListener('scroll', () => {
      const slideUpTrigger = el.offsetTop - window.innerHeight;
      if (window.scrollY > slideUpTrigger) {
        el.classList.add('show');
      }
    });
  });
};
  
  slideUp();


  

  // var all = document.getElementsByTagName("*"), i = 0, rect, docWidth = document.documentElement.offsetWidth;
  // for (; i < all.length; i++) {
  //     rect = all[i].getBoundingClientRect();
  //     if (rect.right > docWidth || rect.left < 0){
  //         console.log(all[i]);
  //         all[i].style.borderTop = '1px solid red';
  //     }
  // }











  