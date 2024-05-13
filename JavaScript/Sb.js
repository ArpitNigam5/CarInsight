const product = [
    {
        id: 0,
        image: 'EV6.jpeg',
        title: 'EV6',
    },
    {
        id: 1,
        image: 'NexonEV.jpeg',
        title: 'Nexon',
    },
    {
        id: 2,
        image: 'XUV3XO.jpeg',
        title: 'XUV 3XO',
        subName: 'XUV',
    },
    {
        id: 3,
        image: 'cars.html',
        title: 'XUV 700',
        subName: 'XUV',
    },

];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    document.getElementById('sb').innerHTML = items.map((item) => {
        var { image, title,subNAme} = item;
        return (
            `<div class='searchBox'>
                <div class='img-box'>
                    <a class='images' href=${image}>${title}</a>
            </div>`
        )
    }).join('')
};
displayItem(categories);
