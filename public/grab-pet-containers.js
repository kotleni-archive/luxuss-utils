(function () {
    const resultArr = [];

    const productsEls = document.getElementsByClassName('product');
    for (const productEl of productsEls) {
        const imgEl = productEl.getElementsByClassName(
            'attachment-woocommerce_thumbnail',
        )[0];
        const imageUrl = imgEl.dataset.src;
        const attributes =
            productEl.getElementsByClassName('custom-attributes')[0];
        function getAttribute(key) {
            const els = attributes.getElementsByClassName(key);
            if (els.length === 0) {
                console.log('PANIC', 'unknown key', key);
                return undefined;
            }
            return els[0].innerText.replace(':', '').trim();
        }
        const vendorCode = getAttribute('artikul');
        const color = getAttribute('cvet');
        const throatStandart = getAttribute('standart-gorloviny');
        const volume = getAttribute('obem-ml');
        const height = getAttribute('vysota-mm');
        const width = getAttribute('shirina-mm');
        const depth = getAttribute('glubina-mm');
        const gofroBoxDimentions = getAttribute('gofrojashhik-mm');
        const minimalLot = getAttribute('minimalnaja-partija-sht');
        const pcsInBox = getAttribute('kolichestvo-v-jashhike-sht');

        const container = {
            vendorCode,
            color: color.length > 0 ? color : 'transparent',
            throatStandart,
            volume,
            height,
            width,
            depth,
            gofroBoxDimentions,
            minimalLot,
            pcsInBox,
            imageUrl,
        };
        resultArr.push(container);
    }

    console.log(JSON.stringify(resultArr));
})();
