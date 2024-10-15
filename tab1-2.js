function textContent() {
    myString = ''
    
    for (let i = 0; i < 20; i++){
        myString += 'Please not that this font size is too small to read easily on this device for many';
        myString += '<br><br><br><br> '
    }
    document.getElementById('text-body').innerHTML = myString;
}

function choicesContent() {
    myString = ''
    radio_selection = document.getElementsByName('AddOrRem')
    select_selection = document.getElementById('groceries')
    checked_select = select_selection.value
    var checkedRadio = Array.from(radio_selection).find(
        (radio) => radio.checked
     );
    
    myString += `You have ${checkedRadio.value}ed ${checked_select} to your inventory`
    document.getElementById('choices-body').innerHTML = myString;
}

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')

        if (tab.dataset.tabTarget === "#text") {
            textContent();
        }
    })
})

document.addEventListener('DOMContentLoaded', function() {
    textContent();
});