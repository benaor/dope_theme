new Vue({
    el: "#app",
    data : {
        inPageProduct: false,
        faq: {
            currentQuestion: 0,
            questions: [
                {
                    sentence: 'Started several mistake joy say painful removed reached end',
                    answer: '1Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the.Widow downs you new shade drift hopes small.So otherwise commanded sweetness we improving.'
                },
                {
                    sentence: 'Although moreover mistaken kindness me feelings do be marianne?',
                    answer: '2Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the.Widow downs you new shade drift hopes small.So otherwise commanded sweetness we improving.'
                },
                {
                    sentence: 'By in no ecstatic wondered disposal my speaking?',
                    answer: '3Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the.Widow downs you new shade drift hopes small.So otherwise commanded sweetness we improving.'
                }
            ] // array(question)
        }, //faq
        products: {
            data: [
                {
                    name: 'Titre du produit 1',
                    img: 'img/portfolio1.jpg',
                    client: 'Envato 1',
                    categories: ['Fashion', 'Design'],
                    visit: 'envato.com',
                    date: '01.09.2018'
                },
                {
                    name: 'Titre du produit 2',
                    img: 'img/portfolio2.jpg',
                    client: 'Envato 2',
                    categories: ['Fashion', 'Design'],
                    visit: 'envato.com',
                    date: '01.09.2018'
                },
                {
                    name: 'Chaussure bleue',
                    img: 'img/portfolio3.jpg',
                    client: 'Envato 2',
                    categories: ['Fashion', 'Design'],
                    visit: 'envato.com',
                    date: '01.09.2018'
                },
                {
                    name: 'Titre du produit 4',
                    img: 'img/portfolio4.jpg',
                    client: 'Envato 2',
                    categories: ['Fashion', 'Design'],
                    visit: 'envato.com',
                    date: '01.09.2018'
                },
                {
                    name: 'Titre du produit 5',
                    img: 'img/portfolio5.jpg',
                    client: 'Envato 2',
                    categories: ['Fashion', 'Design'],
                    visit: 'envato.com',
                    date: '01.09.2018'
                }
            ] // array(data)
        }, // products
    },// data
    methods: {
        showProduct: function(){
            this.inPageProduct = true
            window.scrollTo(0, 0)
        } // showProduct()
    }, // methods
}) // VueJS