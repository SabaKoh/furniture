// const loadMoreBtns = document.querySelectorAll(".shop a");

// loadMoreBtns.forEach( (btn) => {
//     btn.addEventListener('click', (e) => {
//         e.preventDefault();
//         const target = e.target;
//         const parent = target.closest("section");
//         loadMore(4, parent, target);
//     });
// });

// function loadMore(count, parentElement, targetElem) {
//     const products = parentElement.querySelectorAll('ul li.is-hidden');
//     const showItems = Array.from(products).slice(0, count);
//     showItems.forEach( item => {
//         item.classList.remove('is-hidden');
//     });

//     if (products.length == 4) {
//         targetElem.parentElement.classList.add('is-hide');
//     };
// };

// loadMore(0, document.querySelector("section.our-products"));
// loadMore(0, document.querySelector("section.store"));