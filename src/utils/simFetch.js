const products = [
    {
        id: 1,
        title: "Guitarra Acústica Martin&Co GPC-16E Natural",
        desc: "Palo Rosa Natural Grand Performance",
        stock: 3,
        category: "acustica",
        price: 2000,
        img: "https://martinguitarmexico.com/wp-content/uploads/2021/02/10-GPC16-E-01-frente.jpg",
    },
    {
        id: 2,
        title: "Guitarra Acústica Martin&Co SC-13E Natural",
        desc: "Natural Abeto Ébano",
        stock: 4,
        category: "acustica",
        price: 1800,
        img: "https://martinguitarmexico.com/wp-content/uploads/2022/02/guitarra-Martin-SC13E-Special-1-900x900.jpg",
    },
    {
        id: 3,
        title: "Guitarra Acústica Fender FA-135CE Black",
        desc: "Concierto Negro",
        stock: 10,
        category: "acustica",
        price: 250,
        img: "http://images.musicstore.de/images/1280/fender-fsr-fa-135ce-concert-v2-black_1_GIT0057131-000.jpg",
    },
    {
        id: 4,
        title: "Guitarra Acústica Gibson J45 Cherry",
        desc: "Cherry Pícea de Sitka",
        stock: 2,   
        category: "acustica",
        price: 2850,
        img: "https://media.guitarcenter.com/is/image/MMGS7/L28131000002000-02-720x720.jpg",
    },
    {
        id: 5,
        title: "Guitarra Acústica Gibson Hummingbird Original Natural",
        desc: "Natural Dreadnought Abeto Antique",
        stock: 1,
        category: "acustica",
        price: 4000,
        img: "https://media.guitarcenter.com/is/image/MMGS7/L73686000001000-02-720x720.jpg",   
    },
    {
        id: 6,
        title: "Guitarra Acústica Epiphone PRO-1 Natural",
        desc: "Natural Dreadnought Abeto",
        stock: 12,
        category: "acustica",
        price: 190,
        img: "https://media.guitarcenter.com/is/image/MMGS7/J09893000004000-02-720x720.jpg",
    },
    {
        id: 7,
        title: "Guitarra Acústica Yamaha FX335C Black",
        desc: "Natural Dreadnought Palo Rosa",
        stock: 8,
        category: "acustica",
        price: 290,
        img: "https://media.guitarcenter.com/is/image/MMGS7/J29063000002000-02-720x720.jpg",
    },
    {
        id: 8,
        title: "Guitarra Eléctrica Gibson Les Paul Pro V Cherry Satin",
        desc: "Les Paul Pro V Satin Caoba",
        stock: 5,
        category: "electrica",
        price: 2400,
        img: "https://media.guitarcenter.com/is/image/MMGS7/L74455000002000-02-720x720.jpg",
    },
    {
        id: 9,
        title: "Guitarra Eléctrica Fender Telecaster Surf Pearl",
        desc: "Telecaster Surf Pearl Edición Limitada Maple",
        stock: 8,
        category: "electrica",
        price: 850,
        img: "https://media.guitarcenter.com/is/image/MMGS7/L59796000001000-02-720x720.jpg",
    },
    {
        id: 10,
        title: "Guitarra Eléctrica Ibanez GRGR120EX White",
        desc: "GRGR Maple",
        stock: 10,
        category: "electrica",
        price: 230,
        img: "https://media.guitarcenter.com/is/image/MMGS7/J48397000002000-02-720x720.jpg",
    },
    {
        id: 11,
        title:"Guitarra Eléctrica Fender Stratocaster HSS Pau Ferro Candy Red",
        desc: "Stratocaster HSS Pau Ferro Edición Limitada",
        stock: 9,
        category: "electrica",
        price: 880,
        img: "https://media.guitarcenter.com/is/image/MMGS7/L46834000001000-02-720x720.jpg"
    },
    {
        id: 12,
        title: "Guitarra Eléctrica Epiphone SG Traditional Pro Graphite Black",
        desc: "Guitarra Eléctrica SG Traditional Pro Caoba",
        stock: 16,
        category: "electrica",
        price: 500,
        img: "https://media.guitarcenter.com/is/image/MMGS7/L79164000002000-02-720x720.jpg",
    },
    {
        id: 13,
        title: "Bajo Eléctrico Ibanez TMB100 Black",
        desc: "Bajo Eléctrico Maple",
        stock: 6,
        category: "bajo",
        price: 250,
        img: "https://media.guitarcenter.com/is/image/MMGS7/J18871000003000-02-720x720.jpg",
    },
    {
        id: 14,
        title: "Bajo Eléctrico Fender Squier Mini Precision Black",
        desc: "Bajo Eléctrico Mini Precision",
        stock: 6,
        category: "bajo",
        price: 180,
        img: "https://media.guitarcenter.com/is/image/MMGS7/L72267000001000-02-720x720.jpg",
    },
    {
        id: 15,
        title: "Bajo Eléctrico Jackson JS2 Spectra Black",
        desc: "Bajo Eléctrico JS2 Spectra",
        stock: 5,
        category: "bajo",
        price: 200,
        img: "https://media.guitarcenter.com/is/image/MMGS7/L48530000001000-02-720x720.jpg",
    }
]

export let simFetch = (id)=>{
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res(id ? products.find(item => item.id == id): products)
        }, 2000)
    })
}

