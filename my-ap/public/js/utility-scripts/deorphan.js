let removeOrphansLiquidPage = (function(classname) {
    let elements = document.querySelectorAll('.'.concat(classname));
    elements.forEach(function(el) {
      let elArr = el.innerHTML.split(' ');
      let lastWords = elArr.splice(-2, 2).join('&nbsp');
      elArr.push(lastWords);
      el.innerHTML = elArr.join(' ');
    });
     
  })('liquid_comparison_block_card_container_text');  



  let removeOrphansLiquidTokenPage = (function(classname) {
    let elements = document.querySelectorAll('.'.concat(classname));
    elements.forEach(function(el) {
      let elArr = el.innerHTML.split(' ');
      let lastWords = elArr.splice(-2, 2).join('&nbsp');
      elArr.push(lastWords);
      el.innerHTML = elArr.join(' ');
    });
     
  })('liquid-token_comparison_block_card_container_text');  


//   let removeOrphansLiquidTokenSubtitlePage = (function(classname) {
//     let elements = document.querySelectorAll('.'.concat(classname));
//     elements.forEach(function(el) {
//       let elArr = el.innerHTML.split(' ');
//       let lastWords = elArr.splice(-2, 2).join('&nbsp');
//       elArr.push(lastWords);
//       el.innerHTML = elArr.join(' ');
//     });
     
//   })('liquid-token_comparison_block_card_container_subtitle');
  
  