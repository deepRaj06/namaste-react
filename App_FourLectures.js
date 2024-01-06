import React from "react"; // This react coming from node_modules
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - logo
 *  - nav items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of res, star rating, cuisine, delivery time etc
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dTxNR_0zHhTPOuAwTwub2XlttD4xLAP9mw&usqp=CAU"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const styleCard = {
//   backgroundColor: "lightgray"
// }

// const RestaurantCard = (props) => {
// const RestaurantCard = ({ resName, cuisine}) => {
const RestaurantCard = (props) => {

  // console.log("props", props);
  const {resData} = props;
  const {id, cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info
  const {slaString} = resData?.info?.sla
  // console.log("resData", resData)
  return (
    // <div className="res-card" style={styleCard}>
    <div className="res-card" style={{ backgroundColor: "lightgray" }}>
      <img
        className="res-logo"
        alt="res-logo"
        // src="https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D"
        // src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
  )
}

// taken from swiggy website
// const resObj = {
//   "info": {
//     "id": "79716",
//     "name": "Burger King",
//     "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
//     "locality": "Aditya Mega Mall",
//     "areaName": "Shahdara",
//     "costForTwo": "₹350 for two",
//     "cuisines": [
//       "Burgers",
//       "American"
//     ],
//     "avgRating": 4.2,
//     "parentId": "166",
//     "avgRatingString": "4.2",
//     "totalRatingsString": "10K+",
//     "sla": {
//       "deliveryTime": 24,
//       "lastMileTravel": 1.9,
//       "serviceability": "SERVICEABLE",
//       "slaString": "24 mins",
//       "lastMileTravelString": "1.9 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2023-12-29 04:00:00",
//       "opened": true
//     },
//     "badges": {
      
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
          
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "60% OFF",
//       "subHeader": "UPTO ₹120"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     }
//   },
//   "analytics": {
    
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/restaurants/burger-king-aditya-mega-mall-shahdara-delhi-79716",
//     "type": "WEBLINK"
//   }
// }

  const resList = [
    {
      "info": {
        "id": "253988",
        "name": "McDonald's",
        "cloudinaryImageId": "6dc3ed2ca21d71acff7c2a51dfe4c720",
        "locality": "Fun City Mall",
        "areaName": "Karkardooma",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "American"
        ],
        "avgRating": 4.3,
        "parentId": "630",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-28 22:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-fun-city-mall-karkardooma-delhi-253988",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "79716",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "Aditya Mega Mall",
        "areaName": "Shahdara",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.2,
        "parentId": "166",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "24 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-29 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-aditya-mega-mall-shahdara-delhi-79716",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "169483",
        "name": "Bakingo",
        "cloudinaryImageId": "0c53fd8f62e3d25ba56d1b4cfe572cef",
        "locality": "West Arjun Nagar",
        "areaName": "Krishna Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Beverages",
          "Snacks"
        ],
        "avgRating": 4.4,
        "parentId": "3818",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "29 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-29 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/bakingo-west-arjun-nagar-krishna-nagar-delhi-169483",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "53747",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Agarwal Fun City Metro Mall",
        "areaName": "Shahdara",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 3.9,
        "parentId": "721",
        "avgRatingString": "3.9",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 1.8,
          "serviceability": "SERVICEABLE",
          "slaString": "31 mins",
          "lastMileTravelString": "1.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-29 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹179"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-agarwal-fun-city-metro-mall-shahdara-delhi-53747",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "152953",
        "name": "Burger Singh (Big Punjabi Burgers)",
        "cloudinaryImageId": "hmloyebpeieeyqcsfowr",
        "locality": "D Block",
        "areaName": "Krishna Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "American",
          "Fast Food",
          "Snacks"
        ],
        "avgRating": 4.1,
        "parentId": "375065",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-29 06:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-singh-big-punjabi-burgers-d-block-krishna-nagar-delhi-152953",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "89841",
        "name": "KFC",
        "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
        "locality": "Swami Dayanand Marg",
        "areaName": "Krishna Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 4.1,
        "parentId": "547",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-28 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "EVERY ITEM",
          "subHeader": "@ ₹179"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-swami-dayanand-marg-krishna-nagar-delhi-89841",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "160829",
        "name": "Keventers - Milkshakes & Desserts",
        "cloudinaryImageId": "89707df532fd993b3d79a1a28038a901",
        "locality": "Agarwal Fun City Metro Mall",
        "areaName": "Maharishi Valmiki Marg",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Beverages",
          "Ice Cream",
          "Desserts",
          "Healthy Food"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "268997",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-29 04:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/keventers-milkshakes-and-desserts-agarwal-fun-city-metro-mall-maharishi-valmiki-marg-delhi-160829",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "214710",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "bbzvsjc394c9a803en4i",
        "locality": "Karkardooma",
        "areaName": "Karkardooma",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4,
        "parentId": "4961",
        "avgRatingString": "4.0",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 3.9,
          "serviceability": "SERVICEABLE",
          "slaString": "31 mins",
          "lastMileTravelString": "3.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-29 05:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹159"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-karkardooma-delhi-214710",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "427432",
        "name": "Nirula's",
        "cloudinaryImageId": "a66fa8f5befa65947d9e20f29a863ce0",
        "locality": "Vishwas Nagar",
        "areaName": "Dilshad Gardens",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Pizzas",
          "Burgers",
          "Ice Cream",
          "North Indian",
          "Fast Food",
          "Pastas",
          "Beverages"
        ],
        "avgRating": 3.8,
        "parentId": "1738",
        "avgRatingString": "3.8",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-29 01:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/nirulas-vishwas-nagar-dilshad-gardens-delhi-427432",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "104701",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "bpq4jqk7zgfyuwu6losb",
        "locality": "Agarwal Fun City Metro Mall",
        "areaName": "Shahdara",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "2456",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 25,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-28 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-agarwal-fun-city-metro-mall-shahdara-delhi-104701",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "110648",
        "name": "Bikanervala",
        "cloudinaryImageId": "qkiuqrk7jwh3bvj13hxo",
        "locality": "Satanam Marg",
        "areaName": "Krishna Nagar",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Chinese",
          "North Indian",
          "South Indian",
          "Desserts",
          "Sweets"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "45936",
        "avgRatingString": "4.1",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "31 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-28 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "FREE ITEM"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/bikanervala-satanam-marg-krishna-nagar-delhi-110648",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "116101",
        "name": "G2 Cafe",
        "cloudinaryImageId": "k1kfr055ro7gfaevngkc",
        "locality": "Karkardooma\t",
        "areaName": "Karkardooma",
        "costForTwo": "₹900 for two",
        "cuisines": [
          "Asian",
          "Continental",
          "Italian",
          "North Indian"
        ],
        "avgRating": 3.7,
        "parentId": "16285",
        "avgRatingString": "3.7",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 42,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "42 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-28 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "15% OFF",
          "subHeader": "ABOVE ₹600",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/g2-cafe-karkardooma-delhi-116101",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "105992",
        "name": "NIC Ice Creams",
        "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
        "locality": "556th Scheme",
        "areaName": "Dilshad Gardens",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "6249",
        "avgRatingString": "4.6",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-29 00:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹149"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/nic-ice-creams-556th-scheme-dilshad-gardens-delhi-105992",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "350774",
        "name": "Subway",
        "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
        "locality": "Satanam Road",
        "areaName": "Krishna Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4,
        "parentId": "2",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "28 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-29 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/subway-satanam-road-krishna-nagar-delhi-350774",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "345365",
        "name": "Cafe Coffee Day",
        "cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
        "locality": "River Mall",
        "areaName": "Shahdara",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Burgers",
          "Ice Cream",
          "Bakery",
          "Fast Food"
        ],
        "avgRating": 4,
        "parentId": "1",
        "avgRatingString": "4.0",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 2,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "2.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-28 22:30:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹169"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-river-mall-shahdara-delhi-345365",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "40330",
        "name": "Sagar Ratna",
        "cloudinaryImageId": "ldjgyyvkgxc9x05acxb6",
        "locality": "S Block",
        "areaName": "Krishna Nagar",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Chinese",
          "Desserts"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "793",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "28 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-28 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sagar-ratna-s-block-krishna-nagar-delhi-40330",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "158652",
        "name": "Faasos - Wraps, Rolls & Shawarma",
        "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
        "locality": "Vivek Vihar",
        "areaName": "Dilshad Gardens",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "21809",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "29 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-28 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹129"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-vivek-vihar-dilshad-gardens-delhi-158652",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "355345",
        "name": "Grameen Kulfi",
        "cloudinaryImageId": "ghxzk3nxotwhwtitt1eo",
        "locality": "556th Scheme",
        "areaName": "Dilshad Gardens",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "12175",
        "avgRatingString": "4.6",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-29 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/grameen-kulfi-556th-scheme-dilshad-gardens-delhi-355345",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "158656",
        "name": "Oven Story Pizza - Standout Toppings",
        "cloudinaryImageId": "f986df6f1a1fcf2ff24d2eaf44d570a7",
        "locality": "Vivek Vihar",
        "areaName": "Dilshad Gardens",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "3534",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "23-29 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-28 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹110"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-vivek-vihar-dilshad-gardens-delhi-158656",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "158682",
        "name": "LunchBox - Meals and Thalis",
        "cloudinaryImageId": "vsnmlorg28v1n6bdzdg1",
        "locality": "Vivek Vihar",
        "areaName": "Shahdara",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Punjabi",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "4925",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "31 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-28 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹110"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-vivek-vihar-shahdara-delhi-158682",
        "type": "WEBLINK"
      }
    }
  ]

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/> */}
        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/> */}
        {
          resList.map((item, index) => (
            // <RestaurantCard resData={resList[0]}/>
            //  React says do not use index as keys.
            // <RestaurantCard resData={item} key={index}/>
            <RestaurantCard resData={item} key={item?.info?.id}/>
            // <RestaurantCard resData={item}/>
          ))
        }
        {/* <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/> */}
      </div>
    </div>
  )
}

const AppLayout = () => {
  return <div className="app">
    <Header/>
    <Body/>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); // To render react component
