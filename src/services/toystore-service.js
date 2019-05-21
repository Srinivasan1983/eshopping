export default class ToyStoreService {
  data = [
    {
      id: 1,
      title: `Transformers Optimus Prime`,
      manufacturer: `Baymax`,
      price: 49,
      coverImage: `http://www.pngonly.com/wp-content/uploads/2017/06/Transformers-Optimus-Prime-PNG-Picture.png`,
      discountPrice: 39
    },
    {
      id: 2,
      title: `Toy Bear!`,
      manufacturer: `Sclance`,
      price: 39,
      coverImage: `http://pluspng.com/img-png/toy-bear-png-toys-bears-png-image-png-image-2803.png`,
      discountPrice: 29
    },
    {
      id: 3,
      title: `Toy Sets`,
      manufacturer: `Sclance`,
      price: 23,
      coverImage: `http://www.sclance.com/pngs/toy-png/toy_png_1398665.png`,
      discountPrice: 13
    },
    {
      id: 4,
      title: `Baymax Transparent Walle!`,
      manufacturer: `Baymax`,
      price: 33,
      coverImage: `https://i.ya-webdesign.com/images/baymax-transparent-walle-1.png`,
      discountPrice: 23
    },
    {
      id: 5,
      title: `Soft Joker`,
      manufacturer: `Pixabay`,
      price: 32,
      coverImage: `http://www.pngmart.com/files/6/Toy-PNG-HD.png`,
      discountPrice: 22
    },
    {
      id: 6,
      title: `Turtle!`,
      manufacturer: `Pixabay`,
      price: 12,
      coverImage: `https://cdn.pixabay.com/photo/2017/09/12/20/41/turtle-2743634_960_720.png`,
      discountPrice: 8
    }
  ];

  getAllToy = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error(`something bad happend`));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
