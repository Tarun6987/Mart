import React, { useContext, useEffect, useState } from 'react'
import productImg01 from "../Images/double-sofa-01.png";
import productImg02 from "../Images/double-sofa-02.png";
import productImg03 from "../Images/double-sofa-03.png";
import productImg04 from "../Images/single-sofa-01.jpg";
import productImg05 from "../Images/single-sofa-02.jpg";
import productImg06 from "../Images/single-sofa-03.jpg";
import productImg007 from "../Images/single-sofa-04.png";
import productImg07 from "../Images/arm-chair-01.jpg";
import productImg08 from "../Images/arm-chair-02.jpg";
import productImg09 from "../Images/arm-chair-03.jpg";
import productImg10 from "../Images/arm-chair-01.jpg";
import table from '../Images/table.jpg';

import phone01 from "../Images/phone-01.jpg";
import phone02 from "../Images/phone-02.jpg";
import phone03 from "../Images/phone-03.png";
import phone04 from "../Images/phone-04.jpg";
import phone05 from "../Images/phone-05.jpg";
import phone06 from "../Images/phone-06.jpg";

import watch01 from "../Images/watch-01.jpg";
import watch02 from "../Images/watch-02.jpg";
import watch03 from "../Images/watch-03.jpg";
import watch04 from "../Images/watch-04.jpg";

import wireless01 from "../Images/wireless-01.png";
import wireless02 from "../Images/wireless-02.png";
import wireless03 from "../Images/wireless-03.png";
import wireless04 from "../Images/wireless-04.png";

import { Link } from 'react-router-dom';
import { AppContext } from './App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export default function Shop() {
  const { products, setProducts } = useContext(AppContext);
  const [search, setSearch] = useState('')
  const [change, setChange] = useState('sofa')
  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase())
  }
  const handleChange = (e) => {
    setChange(e.target.value)
  }
  const filteredProducts = products
    .filter((product) => product.productName.toLowerCase().includes(search) && product.category === change)
  // .filter((product)=>product.category==change)
  useEffect(() => {
    setProducts([
      {
        id: "01",
        productName: "Stone and Beam Westview ",
        imgUrl: productImg01,
        category: "sofa",
        price: 193,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.7,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.5,
      },

      {
        id: "02",
        productName: "Rivet Bigelow Modern ",
        imgUrl: productImg02,
        category: "sofa",
        price: 253,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.7,
      },

      {
        id: "03",
        productName: "Amazon Brand Modern Sofa",
        imgUrl: productImg03,
        category: "sofa",
        price: 173,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.7,
      },
      {
        id: "26",
        productName: "Rivet Bigelow Modern ",
        imgUrl: productImg02,
        category: "sofa",
        price: 253,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.7,
      },
      {
        id: "04",
        productName: "Fllufy Sheep Sofa",
        imgUrl: productImg04,
        category: "sofa",
        price: 163,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.7,
      },

      {
        id: "05",
        productName: "Faux Velvet Sofa",
        imgUrl: productImg05,
        category: "sofa",
        price: 163,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.7,
      },

      {
        id: "06",
        productName: "Fllufy Sheep Sofa",
        imgUrl: productImg06,
        category: "sofa",
        price: 163,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.7,
      },
      {
        id: "07",
        productName: "Sakarias Armchair",
        imgUrl: productImg07,
        category: "chair",
        price: 99,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.7,
      },

      {
        id: "27",
        productName: "Modern Arm Sofa",
        imgUrl: productImg007,
        category: "sofa",
        price: 173,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.7,
      },

      {
        id: "08",
        productName: "Baltsar Chair",
        imgUrl: productImg08,
        category: "chair",
        price: 89,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.7,
      },

      {
        id: "09",
        productName: "Helmar Chair",
        imgUrl: productImg09,
        category: "chair",
        price: 112,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.7,
      },

      {
        id: "10",
        productName: "Apple iPhone 12 Pro",
        imgUrl: phone01,
        category: "mobile",
        price: 799,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.8,
      },
      {
        id: "25",
        productName: "Sakarias Armchair",
        imgUrl: productImg10,
        category: "chair",
        price: 99,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.7,
      },
      {
        id: "11",
        productName: "Apple iPhone 12 Max",
        imgUrl: phone02,
        category: "mobile",
        price: 799,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.8,
      },

      {
        id: "12",
        productName: "Realme 8",
        imgUrl: phone03,
        category: "mobile",
        price: 599,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.8,
      },

      {
        id: "13",
        productName: "One Plus Nord",
        imgUrl: phone04,
        category: "mobile",
        price: 799,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.8,
      },

      {
        id: "14",
        productName: "Apple iPhone 13 Pro",
        imgUrl: phone05,
        category: "mobile",
        price: 899,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.8,
      },

      {
        id: "15",
        productName: "Samsung Galaxy S22",
        imgUrl: phone06,
        category: "mobile",
        price: 699,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.8,
      },

      {
        id: "16",
        productName: "Rolex Watch",
        imgUrl: watch01,
        category: "watch",
        price: 299,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.8,
      },

      {
        id: "17",
        productName: "Timex Easy Reader Watch",
        imgUrl: watch02,
        category: "watch",
        price: 299,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.8,
      },

      {
        id: "18",
        productName: "Rolex Watch",
        imgUrl: watch03,
        category: "watch",
        price: 299,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.8,
      },

      {
        id: "19",
        productName: "Apple Watch",
        imgUrl: watch04,
        category: "watch",
        price: 399,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.8,
      },

      {
        id: "20",
        productName: "Beat Studio Wireless",
        imgUrl: wireless01,
        category: "wireless",
        price: 199,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.8,
      },

      {
        id: "21",
        productName: "Beat EP Headphones",
        imgUrl: wireless03,
        category: "wireless",
        price: 199,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.8,
      },
      {
        id: "22",
        productName: "Black Headphones",
        imgUrl: wireless02,
        category: "wireless",
        price: 169,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.8,
      },
      {
        id: "23",
        productName: "Bluetooth Headphones",
        imgUrl: wireless04,
        category: "wireless",
        price: 139,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.8,
      },

    ]
    )
  }, [setProducts])
  return (
    <div className="container-fluid p-0" style={{ marginTop: '100px' }}>
      <div
  id="ctn"
  className="d-flex justify-content-center align-items-center text-black position-relative"
  style={{
    backgroundImage: `url(${table})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'dimgray',
    height: '250px',
    width: '100vw',
    marginTop: '100px',
    marginBottom: '100px',
    overflow: 'hidden',
  }}
>
  {/* Add the water reflection effect */}
  <div
    className="position-absolute top-100 start-0 w-100"
    style={{
      backgroundImage: `url(${table})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transform: 'scaleY(-1)', // Flip vertically for reflection
      opacity: 0.3, // Control reflection visibility
      height: '100%',
      filter: 'blur(4px)',
    }}
  ></div>

  {/* Text Content */}
  <h1
    className="position-relative"
    style={{
      color: 'rgba(255, 255, 255, 1)',
      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)', // Make text more focused
      zIndex: 1, // Ensure text is on top
    }}
  >
    Product
  </h1>
</div>

      {/* Filter Section */}
      <div className="row mb-4">
        <div
          className="col-12 col-md-6 mb-3"
          style={{ width: 'fit-content', marginLeft: '110px' }}
        >
          {/* Select Dropdown */}
          <div style={{ position: 'relative', width: 'fit-content' }}>
  <select
    onClick={handleChange}
    className="form-select custom-select"
    id="product-filter"
    style={{
      backgroundColor: 'rgb(0, 0, 139)', 
      color: 'white', 
      border: '1px solid #ccc',
      paddingRight: '40px', // Space for the custom arrow
      fontSize: '16px',
      appearance: 'none', // Removes default browser arrow
      outline: 'none', // Removes focus outline
      borderRadius: '5px', // Slight rounding for the dropdown
    }}
  >
    <option value="sofa" style={{ backgroundColor: 'white', color: 'black' }}>
      Filter by Category |
    </option>
    <option value="sofa" style={{ backgroundColor: 'white', color: 'black' }}>
      Sofa
    </option>
    <option value="mobile" style={{ backgroundColor: 'white', color: 'black' }}>
      Mobile
    </option>
    <option value="watch" style={{ backgroundColor: 'white', color: 'black' }}>
      Watch
    </option>
    <option value="wireless" style={{ backgroundColor: 'white', color: 'black' }}>
      Wireless
    </option>
    <option value="chair" style={{ backgroundColor: 'white', color: 'black' }}>
      Chair
    </option>
  </select>
  {/* Custom White Arrow */}
  <span
    style={{
      position: 'absolute',
      right: '10px', // Position the arrow
      top: '50%', // Center vertically
      transform: 'translateY(-50%)',
      pointerEvents: 'none', // Prevent interaction
      color: 'white', // White color for the arrow
      fontSize: '16px', // Font size for the arrow
    }}
  >
    <i className="fa fa-chevron-down"></i>
    {/* &#x2304; */}
  </span>
</div>
        </div>
        {/* Search Input */}
        <div className="col-12 col-md-6 mb-3">
          <div className="input-group" style={{ position: 'relative' }}>
            <input
              type="search"
              onChange={handleSearch}
              className="form-control"
              placeholder="Search..."
              style={{
                borderRadius: '50px',
                paddingLeft: '30px',
                paddingRight: '30px',
                outline: 'none', // Removes focus outline
                boxShadow: 'none', // Prevents shadow focus
              }}
            />
            <span
              className="input-group-text"
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                borderRadius: '25px',
                border: 'none',
              }}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
          </div>
        </div>
      </div>
  
      {/* Product Cards Section */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredProducts.map((product, index) => (
          <Link
            to="/shop/detail"
            className="text-decoration-none"
            state={{ product }}
            key={index}
          >
            <div className="col d-flex justify-content-center">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src={product.imgUrl}
                  alt={product.productName}
                  className="card-img-top"
                  style={{ height: '150px', objectFit: 'contain' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">
                    {product.productName.slice(0, 20)}
                  </h5>
                  <div>
                    {[...Array(5)].map((_, index) => (
                      <i
                        key={index}
                        className="fas fa-star"
                        style={{ color: 'gold' }}
                      ></i>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <h4 className="card-text mb-0">${product.price}</h4>
                    {/* Add "Add to Cart" Button or Other Action */}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}  