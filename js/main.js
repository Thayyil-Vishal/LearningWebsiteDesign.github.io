const slideUp = () => {
  const sections = document.querySelectorAll('.animate-section');
  
  sections.forEach((section) => {
    const slideUpElements = section.querySelectorAll('.slide-up');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          slideUpElements.forEach((el) => {
            const target = el;
            const delay = Array.from(slideUpElements).indexOf(target) * 200;
            target.style.transitionDelay = `${delay}ms`;
            target.classList.add('show');
          });
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(section);
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







  