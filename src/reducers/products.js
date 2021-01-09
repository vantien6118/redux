let initialState = [
  {
    id: 1,
    name: "Iphone 7 plus",
    image: "https://www.laptopvip.vn/images/thumbnails/500/500/detailed/101/iphone7-rosegold-select-2016-1-www_5xvg-0b.laptopvip.vn-1474858603.png",
    description: "Product off apple",
    price: 500,
    inventory: 1000,
    rating:4
  },
  {
    id: 2,
    name: "Iphone X ",
    image: "https://shopdunk.com/wp-content/uploads/2019/07/iphone-x-1-min-compressor.jpg",
    description: "Product off apple",
    price: 1000,
    inventory: 1000,
    rating:3
  },
  {
    id: 3,
    name: "Iphone 12",
    image: "https://japanlife-guide.com/wp-content/uploads/2020/10/gia-iphone-12-o-nhat-ban-2.jpg",
    description: "Product off apple",
    price: 1200,
    inventory: 1000,
    rating:5
  },
];
const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default products;
