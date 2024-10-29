document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const itemsList = document.getElementById('items-list');
    const addItemButton = document.getElementById('add-item-button');

    const categoryIcons = {
        meats: 'beefIcon.png',
        vegetables: 'vegetablesIcon.png',
        dairy: 'dairyIcon.png',
        fruits: 'fruitsIcon.png',
        frozen: 'frozenIcon.png'
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const items = document.querySelectorAll('.sub-item');
            items.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    addItemButton.addEventListener('click', () => {
        const category = document.getElementById('category-select').value;
        const itemName = document.getElementById('item-input').value.trim();
        const quantity = parseInt(document.getElementById('quantity-input').value, 10);

        if (itemName && quantity > 0) {
            const newItem = document.createElement('div');
            newItem.classList.add('sub-item');
            newItem.setAttribute('data-category', category);

            const iconSrc = categoryIcons[category];

            newItem.innerHTML = `
                <img src="${iconSrc}" alt="${category} icon" />
                <p>${itemName}</p>
                <button class="reduce-button">-</button>
                <span class="item-count">${quantity}</span>
                <button class="add-button">+</button>
            `;

            itemsList.appendChild(newItem);

            document.getElementById('item-input').value = '';
            document.getElementById('quantity-input').value = '1';

            const addButton = newItem.querySelector('.add-button');
            const reduceButton = newItem.querySelector('.reduce-button');
            const itemCount = newItem.querySelector('.item-count');

            addButton.addEventListener('click', () => {
                let count = parseInt(itemCount.textContent);
                itemCount.textContent = ++count;
            });

            reduceButton.addEventListener('click', () => {
                let count = parseInt(itemCount.textContent);
                if (count > 1) {
                    itemCount.textContent = --count;
                } else {
                    newItem.remove();
                }
            });
        } else {
            alert('Please enter a valid item name and quantity.');
        }
    });
});
