(function vcStorefronts(){

    /* Toggle One/Two Columns */
    const oneColumn = document.querySelector('#productOne')
    const twoColumns = document.querySelector('#productTwo')
    const vcGrid = document.querySelectorAll('.vc-grid > div')
    
    oneColumn.addEventListener('click', function(){
        vcGrid.forEach(function(item){
            item.classList.add('col-12', 'oneColumn');
        })
        this.classList.remove('vc-disabled');
        twoColumns.classList.add('vc-disabled')
    });

    twoColumns.addEventListener('click', function(){
        vcGrid.forEach(function(item){
            item.classList.remove('col-12', 'oneColumn');
        })
        this.classList.remove('vc-disabled');
        oneColumn.classList.add('vc-disabled')
    });

})();
