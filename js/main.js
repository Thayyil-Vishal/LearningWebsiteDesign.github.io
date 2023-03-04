const slideUp = () => {
    const slideUpElements = document.querySelectorAll(".slide-up");
    slideUpElements.forEach((el) => {
      const slideUpObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add("show");
              observer.unobserve(entry.target); // Remove the observer after the animation has played once
            }
          });
        },
        {
          threshold: 0.5,
        }
      );
      slideUpObserver.observe(el);
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











  