var checkbox = document.getElementById('view')
const sections = document.querySelectorAll('.section');
const cardWraps = document.querySelectorAll('.food_card_wrap');
function gridView(){
    sections.forEach(section => section.classList.replace('table','row'));
    cardWraps.forEach(cardWrap => cardWrap.classList.add('col-6'));
};
function tableView(){
    sections.forEach(section => section.classList.replace('row','table'));
    cardWraps.forEach(cardWrap => cardWrap.classList.remove('col-6'));
};
function checker(checked) {
    checked ? gridView() : tableView();
};
checker(this.checked)
checkbox.addEventListener('change', function() {
    checker(this.checked);
});
