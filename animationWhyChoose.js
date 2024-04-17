const observer= new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }else{
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenLElements= document.querySelectorAll('.left-hidden');
  const hiddenRElements= document.querySelectorAll('.right-hidden');
  const fadein= document.querySelectorAll('.fadein');
  hiddenLElements.forEach((el)=> observer.observe(el));
  hiddenRElements.forEach((el)=> observer.observe(el));
  fadein.forEach((el)=> observer.observe(el));