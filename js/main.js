const slideUp = () => {
  const slideUpElements = document.querySelectorAll('.slide-up');

  const observer = new IntersectionObserver((entries, observer) => {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      if (entry.isIntersecting) {
        const target = entry.target;
        const delay = i * 80;
        target.style.transitionDelay = `${delay}ms`;
        target.classList.add('show');
        observer.unobserve(target);
      }
    }
  });

  slideUpElements.forEach((element) => {
    observer.observe(element);
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







  