const myProducts = [
    { id: "1", name: "Duramo Protect", price: 120, stock: 10,img: "../img/Shoes/DuramoProtect.png", categoryID: "2"},
    { id: "2", name: "SolarGlide 6", price: 90, stock: 10,img: "../img/Shoes/Solarglide.png", categoryID: "2"},
    { id: "3", name: "Evostripe Core", price: 75, stock: 10,img: "../img/Clothing/Evostripe.jpeg", categoryID: "1"},
    { id: "4", name: "RYV Hoodie", price: 65, stock: 10,img: "../img/Clothing/RYV.webp", categoryID: "1"},
    { id: "5", name: "Puma Cap", price: 25, stock: 10,img: "../img/Accessories/PumaCap.webp", categoryID: "3"},
    { id: "6", name: "Adidas Cap", price: 25, stock: 10,img: "../img/Accessories/AdidasCap.jpeg", categoryID: "3"}
]

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {res(myProducts);},2000)
    })
}

export const getProduct = (id) => {
    return new Promise(res => {
        setTimeout( () => {
            const product = myProducts.find(prod=> prod.id == id);
            res(product);
        }, 2000)
    })
}

export const getCategory = (categoryID) =>{
    return new Promise(res => {
        setTimeout(() => {
            const categoryProducts = myProducts.filter(prod => prod.categoryID === categoryID)
            res(categoryProducts);
        }, 2000)
    })
}