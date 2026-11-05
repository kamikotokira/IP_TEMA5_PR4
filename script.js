const container = document.getElementById('items-container');

const quantityState = {
    value: 0,
    domElement: document.getElementById('selected-count'),
    
    update(selectedItems) {
        this.value = selectedItems.length;
        this.domElement.textContent = this.value;
    }
};

const sumState = {
    value: 0,
    domElement: document.getElementById('total-sum'),
    
    update(selectedItems) {
        let total = 0;
        
        selectedItems.forEach(item => {
            const itemValue = parseFloat(item.textContent) || 0;
            total += itemValue;
        });
        
        this.value = total;
        this.domElement.textContent = this.value;
    }
};

container.addEventListener('click', (event) => {
    const item = event.target.closest('.item');
    
    if (!item) return;

    item.classList.toggle('selected');
    
    const selectedItems = container.querySelectorAll('.item.selected');
    
    quantityState.update(selectedItems);
    sumState.update(selectedItems);
});