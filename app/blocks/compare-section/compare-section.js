app.compareSection = {
    name: 'compare',
    description: 'compare section table scroll logic',
    init() {
        const table = document.querySelector('.table-wrap');
        if (!table) return;
        const tableVisibleWidth = table.getBoundingClientRect().width;
        const tableWidth = table.scrollWidth;
        const ths = table.querySelectorAll('th');
        const compareProductItems = document.querySelectorAll('.compare-product');
        const compareProducts = [...ths].slice(1);
        const thWidth = compareProducts[0].getBoundingClientRect().width;
        const compareProductsWidth = thWidth * compareProducts.length;
        const compareProductsOffsets = compareProducts.map((item) => item.offsetLeft);
        const firstThWidth = tableWidth - compareProductsWidth;
        const visibleProductsWidth = tableVisibleWidth - firstThWidth;
        const deltaVisible = visibleProductsWidth - thWidth;

        table.onscroll = function () {
            const scrollX = table.scrollLeft;
            const delta = deltaVisible + scrollX;

            compareProductsOffsets.forEach((_, index) => {
                if (index > 0) {
                    if (delta >= compareProductsOffsets[index - 1]) {
                        compareProductItems[index].classList.add('in-view');
                    } else {
                        compareProductItems[index].classList.remove('in-view');
                    }
                }
            });
        };
    },
};