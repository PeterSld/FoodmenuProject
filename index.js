var checkbox = document.getElementById('view');
const sections = document.querySelectorAll('.section');
const cardWraps = document.querySelectorAll('.food_card_wrap');
function gridView(){
    sections.forEach(section => section.classList.replace('table','row'));
    sections.forEach(section => section.classList.remove('tableView'));
    cardWraps.forEach(cardWrap => cardWrap.classList.add('col-6'));
};
function tableView(){
    sections.forEach(section => section.classList.replace('row','table'));
    sections.forEach(section => section.classList.add('tableView'));
    cardWraps.forEach(cardWrap => cardWrap.classList.remove('col-6'));
};
function checker(checked) {
    checked ? gridView() : tableView();
};
checker(this.checked)
checkbox.addEventListener('change', function() {
    checker(this.checked);
});
var darkTheme = document.getElementById('darkTheme');
const qwer = document.body;
function checker_darkTheme(checked) {
    checked ? qwer.classList.add('darkTheme') : qwer.classList.remove('darkTheme');
};
darkTheme.addEventListener('change', function() {
    checker_darkTheme(this.checked);
});