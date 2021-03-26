import React from "react";
import Product from "./Product";
import "./ProductData.css";

function ProductData() {
  const shopData = [
    {
      id: 49538104,
      title: "The Avengers",
      price: 6.99,
      rating: 5,
      image: "./images/avengers.jpg",
    },
    {
      id: 49538092,
      title: "Home Alone",
      price: 13.99,
      rating: 5,
      image: "./images/homealone.jpg",
    },
    {
      id: 49538093,
      title: "Now You See Me",
      price: 6.99,
      rating: 4,
      image: "./images/nysm.jpg",
    },
    {
      id: 49538094,
      title: "The Great Gatsby",
      price: 6.99,
      rating: 4,
      image: "./images/thegreat.jpg",
    },
    {
      id: 49538095,
      title: "Tron Legacy",
      price: 3.99,
      rating: 4,
      image: "./images/tron.jpg",
    },
    {
      id: 49538096,
      title: "Iron Man 3",
      price: 6.99,
      rating: 4,
      image: "./images/ironman.jpg",
    },
    {
      id: 49538097,
      title: "Maleficient",
      price: 6.99,
      rating: 4,
      image: "./images/malefi.jpeg",
    },
    {
      id: 49538098,
      title: "Coco",
      price: 13.99,
      rating: 4,
      image: "./images/coco.jpg",
    },
    {
      id: 49538099,
      title: "The Book of Life",
      price: 13.99,
      rating: 4,
      image: "./images/bol.jpg",
    },
    {
      id: 49538100,
      title: "Jungle Book",
      price: 6.99,
      rating: 4,
      image: "./images/jungle.jpg",
    },
    {
      id: 49538101,
      title: "Tron Legacy",
      price: 3.99,
      rating: 4,
      image: "./images/tron.jpg",
    },
    {
      id: 49538102,
      title: "The Lion King",
      price: 6.99,
      rating: 4,
      image: "./images/lionking.jpeg",
    },
  ];

  return (
    <div>
        {
          ( Array.from( Array( Math.ceil(shopData.length/4) ).keys() ) ).map((_, i) => {
            // console.log("Row: ", i);
            return (
              <div className="productformat" key={"subitem_"+i}>
                {
                  [0,1,2,3].map(j => {
                    let data = shopData[i*4+j];
                    if(data === undefined) return;

                    return (
                      <Product
                        key = {"product_"+(i*4+j)}
                        className="products"
                        id={data.id}
                        title={data.title}
                        price={data.price}
                        rating={data.rating}
                        image={data.image}
                      />
                    )
                  })
                }
                
              </div>
            )
          })
        }        
    </div>
  );
}

export default ProductData;
