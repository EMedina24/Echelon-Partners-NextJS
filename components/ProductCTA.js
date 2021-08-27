import React from "react";
import { useState } from "react";
import { GraphQLClient } from 'graphql-request';











export default function ProductCTA({  product ,index, toggleCart }) {




  const [showModal, setShowModal] = React.useState(false);
 
  const [bikeColor, setBikeColor] = useState("black");
  const [currentBike, setCurrentBike] = useState(
    "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTk3NjU4MjU1MzY4Mg=="
  );
  let productVar;
  let selectedBike;




  

  const [openTab, setOpenTab] = React.useState(1);


  //toggle learnmore modal
  const toggleLearnMore = () => {
    setShowModal(!showModal);
  };




  ////// logic for the img gallery 3
  //   const renderImages = () => {
  //     let renderedImages;
  //     renderedImages = img.map((item) => {
  //       let imgComponent;
  //       let isActive = item.originalSrc === imgSrc ? "active" : "";

  //       imgComponent = (
  //         <div className={`thumbnail ${isActive}`}>
  //           <img
  //             src={item.originalSrc}
  //             loading="lazy"
  //             alt="Echelon Smart Connect Bike EX3 - Echelon Fit US"
  //             className={"thumbnail-image"}
  //             onClick={() => setImgSrc(item.originalSrc)}
  //           />
  //         </div>
  //       );

  //       return imgComponent;
  //     });

  //     return renderedImages;
  //   };

  /********swatch functions.************ */
  const colorRed = () => {
    setCurrentBike(
      "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTk3NjU4MjQ4ODE0Ng=="
    );
    setShowBike(product.images[0].originalSrc);
  };

  const colorBlack = () => {
    setCurrentBike(
      "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTk3NjU4MjU1MzY4Mg=="
    );
    setShowBike(product.images[2].originalSrc);
  };

  const colorWhite = () => {
    setCurrentBike(
      "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTYzNzg3MTcyMjU3OA=="
    );
    setShowBike(product.images[1].originalSrc);
  };

  /********Swatch markup ; currently will only show on EX-3 PDP. ************ */
  const colorBikes = () => {
    if (product.node.handle == "Echelon EX-3 Connect Bike") {
      return (
        <>
          <div className="flex">
            <span className="mr-3">Color</span>
            <button
              onClick={() => {
                colorBlack();
                setBikeColor("black");
              }}
              className={
                bikeColor == "black"
                  ? "border-4 border-blue-800 rounded-full  bg-black w-6 h-6 focus:outline-none"
                  : "border-2 border-gray-800 rounded-full  bg-black w-6 h-6 focus:outline-none"
              }
            ></button>
            <button
              onClick={() => {
                colorRed();
                setBikeColor("red");
              }}
              className={
                bikeColor == "red"
                  ? "border-4 border-blue-800 rounded-full ml-1 bg-red-500 w-6 h-6 focus:outline-none"
                  : "border-2 border-gray-800 rounded-full ml-1 bg-red-500 w-6 h-6 focus:outline-none"
              }
            ></button>
            <button
              onClick={() => {
                colorWhite();
                setBikeColor("white");
              }}
              className={
                bikeColor == "white"
                  ? "border-4 border-blue-800 rounded-full ml-1 bg-white w-6 h-6 focus:outline-none"
                  : "border-2 border-gray-800 rounded-full ml-1 bg-white w-6 h-6 focus:outline-none"
              }
            ></button>
          </div>
        </>
      );
    } else {
     // productVar = product.variants[0].shopifyId;
    }
  };

  let lifeStyleImage;
  let itemWeight;
  let itemHeight;
  let hasTablet;
  let tagLine;

  const ex3LifeStylePic =
    "//cdn.shopify.com/s/files/1/2422/9487/files/Connect_EX-3_-_Lifestyle_6-1201x801-d21b45d_1024x.jpg?v=1617886078";
  const ex5sLifeStylePic =
    "//cdn.shopify.com/s/files/1/2422/9487/files/200717_Echelon_EX5S0473-1200x800-5b2df79_1024x.jpg?v=1617885563";
  const ex5LifeStylePic =
    "//cdn.shopify.com/s/files/1/2422/9487/files/190624_Echelon_Bike1108-1200x800-5b2df79_1024x.jpg?v=1617885581";
  const rowerLifeStylePic =
    "//cdn.shopify.com/s/files/1/2422/9487/files/Row_-_Lifestyle_1-1201x801-d21b45d_1024x.jpg?v=1617885640";
  const strideLifeStylePic =
    "//cdn.shopify.com/s/files/1/2422/9487/files/Echelon_Stride_-_Lifestyle_-_Class_Screen_1-1201x801-d21b45d_1024x.jpg?v=1617885704";
  const reflectLifeStylePic =
    "//cdn.shopify.com/s/files/1/2422/9487/files/Reflect_Touch_-_Lifestyle_4-1201x801-d21b45d_1024x.jpg?v=1617885757";
  const ex7sLifeStylePic =
    "//cdn.shopify.com/s/files/1/2422/9487/files/Connect_EX-7s_-_Lifestyle_11-801x1201-dc98797_1024x.jpg?v=1617885786";
  const rowsLifeStylePic =
    "//cdn.shopify.com/s/files/1/2422/9487/files/RowS_-_Lifestyle_11-1200x800-5b2df79_1024x.jpg?v=1617885860";
  const row7LifeStylePic =
    "//cdn.shopify.com/s/files/1/2422/9487/files/Row7s_Lifestyle3-1201x801-83b3acf.png?v=1620997368";
  const exProLifeStylePic =
    "//cdn.shopify.com/s/files/1/2422/9487/files/EX-PRO_UCFGym1126_copy_2x_720x720_crop_center_f622e9c5-2a8b-4366-81f7-9a0f29a66105_1600x.jpg?v=1614804534";
  const reflect40LifeStylePic =
    "https://cdn.shopify.com/s/files/1/2422/9487/products/210428_Reflect_Upstairs0170_Square_580x640.jpg?v=1621515088";

  
  let cartURL;

  /********Ex3 gallery markup ; currently will only show on EX-3 PDP. ************ */
  const multipic = (selectedBike) => {
    if (product.node.handle == "Echelon EX-3 Connect Bike") {
      let multipic;

      multipic = (
        <>
          <img
            alt="ecommerce"
            className="w-full pt-5  h-64 object-fit object-center rounded"
            src={showBike}
          />
        </>
      );
      return multipic;
    } else {
      let multipic;
      multipic = (
        <img
          alt="ecommerce"
          className="w-full pt-5  h-64 object-fit object-center rounded"
          src={imgSrc}
        />
      );
      return multipic;
    }
  };

  /**************** check product to apply correct discount *****************/
  

  return (
    <>
      <section
        className="text-gray-600 body-font overflow-hidden mx-auto "
        style={
          index % 2 === 0
            ? { backgroundColor: "#fff", width: "100vw" }
            : { backgroundColor: "#f8f8f8", width: "100vw" }
        }
      >
        <div
          className="container px-5 py-16 mx-auto"
          style={{ maxWidth: "1800px" }}
        >
          <div className="mx-auto flex items-center justify-center flex-wrap lg:flex-nowrap xl:flex-nowrap">
            <div
              style={{
                width: "30%",
                minWidth: "350px",
                height: "350px",
                overflow: "hidden",
                order: "2",
              }}
            >
              <img
                alt="ecommerce"
                src={product.node.images.edges[0].node.originalSrc}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              className={
                index % 2 === 0
                  ? "order-3 md:p-6"
                  : "order-3 md:p-6 xl:order-1 lg:order-1 md:order-3"
              }
              style={{ minWidth: "350px", width: "66%" }}
            >
              <h2 className="text-black tracking-widest">
                {tagLine != null ? tagLine : "Echelon Fitness"}
              </h2>
              <h1 className="text-gray-900 text-4xl title-font font-medium mb-1">
                {product.node.handle}
              </h1>
            
              <div className="flex mb-4"></div>
              <p className="leading-relaxed">{product.node.description}</p>
              <div className="flex mt-6 items-center pb-5">{colorBikes()}</div>
              <div className="flex justify-start flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap">
                <div className="flex flex-row align-center p-2 flex-nowrap">
                  <input
                   // onChange={(event) =>
                     // setQuantity(Number(event.target.value))
                  //  }
                    type="number"
                    className="focus:outline-none text-center font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
                    max="100"
                    min="1"
                    name="custom-input-number"
                    defaultValue="1"
                    style={{ border: "2px solid #716c6c", width: "60px" }}
                  />
                  <a
                   // onClick={() => {
                      //addToCart(product.title);
                     // toggleCart();
                   // }}
                    target="_self"
                    title="Shop Connect Bikes"
                    aria-label="Shop Connect Bikes"
                    style={{ cursor: "pointer" }}
                    className="credera-snippet primary-button primary-button-with-icon"
                  >
                    <span className="button-content" tabIndex="0">
                      <span>Add to Cart</span>
                      <svg
                        fill="none"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m10 20c-1.9778 0-3.9112-0.5865-5.5557-1.6853s-2.9262-2.6606-3.6831-4.4879c-0.75688-1.8272-0.9549-3.8379-0.56905-5.7777s1.3383-3.7216 2.7368-5.1202c1.3985-1.3985 3.1803-2.3509 5.1201-2.7368s3.9504-0.18782 5.7777 0.56905c1.8273 0.75688 3.3891 2.0386 4.4879 3.6831 1.0988 1.6445 1.6853 3.5779 1.6853 5.5557 0 2.6522-1.0536 5.1957-2.929 7.0711-1.8753 1.8753-4.4188 2.9289-7.071 2.9289zm0-18.333c-1.6482 0-3.2593 0.48874-4.6297 1.4044s-2.4385 2.2172-3.0692 3.7399-0.79579 3.1982-0.47424 4.8147c0.32154 1.6165 1.1152 3.1014 2.2807 4.2669 1.1654 1.1654 2.6502 1.9591 4.2668 2.2806 1.6165 0.3216 3.2921 0.1565 4.8148-0.4742s2.8242-1.6989 3.7399-3.0693 1.4044-2.9815 1.4044-4.6297c0-2.2101-0.878-4.3298-2.4408-5.8926s-3.6824-2.4408-5.8925-2.4408zm4.9833 8.4008v0.0225c-0.0053 0.0736-0.0193 0.1463-0.0416 0.2167-0.0167 0.0291-0.0334 0.0533-0.05 0.0833-0.0287 0.0582-0.0652 0.1124-0.1084 0.1608-0.0281 0.0261-0.0588 0.0493-0.0916 0.0692l-2.1334 3.16c-0.1422 0.1886-0.3463 0.321-0.5764 0.3741-0.2301 0.053-0.4715 0.0232-0.6819-0.0841-0.1017-0.0394-0.1933-0.1011-0.2679-0.1807-0.0746-0.0795-0.1304-0.1749-0.1632-0.2789s-0.0418-0.2141-0.0263-0.3221c0.0155-0.1079 0.055-0.211 0.1157-0.3016l1.45-2.1525h-6.575c-0.22102 0-0.43302-0.0878-0.5893-0.2441s-0.24404-0.3683-0.24404-0.5893c0-0.22098 0.08776-0.43296 0.24404-0.58924s0.36828-0.24406 0.5893-0.24406h6.575l-1.45-2.1517c-0.0605-0.09066-0.0999-0.19376-0.1153-0.30169s-0.0065-0.21794 0.0263-0.32191 0.0886-0.19926 0.1631-0.27883 0.166-0.1414 0.2676-0.18092c0.2105-0.10685 0.4518-0.13634 0.6818-0.08333 0.23 0.053 0.434 0.18516 0.5765 0.37335l2.1167 3.135c0.0136 0.01067 0.025 0.02399 0.0333 0.03916 0.0719 0.06084 0.1337 0.13255 0.1834 0.21251 0.0546 0.09525 0.0859 0.20201 0.0916 0.31166v0.01332c0.0032 0.00376 0.0056 0.00816 7e-3 0.0129 0.0015 0.00473 0.0019 0.00971 0.0014 0.01462 0 0.01333 0.0083 0.02499 0.0083 0.03832 0 0.01331-0.0083 0.02581-0.0083 0.03831 0.0011 0.0105-0.0019 0.0209-0.0084 0.0292z"
                          clipRule="evenodd"
                          fill="#fff"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </div>
                <div className="p-2">
                  <a
                    //onClick={() => setShowModal(true)}
                    //href={`/product/${newTitle}`}
                    title="Shop Connect Bikes"
                    aria-label="Shop Connect Bikes"
                    style={{ cursor: "pointer" }}
                    className="credera-snippet primary-button primary-button-with-icon"
                  >
                    <span className="button-content" tabIndex="0">
                      <span>Learn More</span>
                      <svg
                        fill="none"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m10 20c-1.9778 0-3.9112-0.5865-5.5557-1.6853s-2.9262-2.6606-3.6831-4.4879c-0.75688-1.8272-0.9549-3.8379-0.56905-5.7777s1.3383-3.7216 2.7368-5.1202c1.3985-1.3985 3.1803-2.3509 5.1201-2.7368s3.9504-0.18782 5.7777 0.56905c1.8273 0.75688 3.3891 2.0386 4.4879 3.6831 1.0988 1.6445 1.6853 3.5779 1.6853 5.5557 0 2.6522-1.0536 5.1957-2.929 7.0711-1.8753 1.8753-4.4188 2.9289-7.071 2.9289zm0-18.333c-1.6482 0-3.2593 0.48874-4.6297 1.4044s-2.4385 2.2172-3.0692 3.7399-0.79579 3.1982-0.47424 4.8147c0.32154 1.6165 1.1152 3.1014 2.2807 4.2669 1.1654 1.1654 2.6502 1.9591 4.2668 2.2806 1.6165 0.3216 3.2921 0.1565 4.8148-0.4742s2.8242-1.6989 3.7399-3.0693 1.4044-2.9815 1.4044-4.6297c0-2.2101-0.878-4.3298-2.4408-5.8926s-3.6824-2.4408-5.8925-2.4408zm4.9833 8.4008v0.0225c-0.0053 0.0736-0.0193 0.1463-0.0416 0.2167-0.0167 0.0291-0.0334 0.0533-0.05 0.0833-0.0287 0.0582-0.0652 0.1124-0.1084 0.1608-0.0281 0.0261-0.0588 0.0493-0.0916 0.0692l-2.1334 3.16c-0.1422 0.1886-0.3463 0.321-0.5764 0.3741-0.2301 0.053-0.4715 0.0232-0.6819-0.0841-0.1017-0.0394-0.1933-0.1011-0.2679-0.1807-0.0746-0.0795-0.1304-0.1749-0.1632-0.2789s-0.0418-0.2141-0.0263-0.3221c0.0155-0.1079 0.055-0.211 0.1157-0.3016l1.45-2.1525h-6.575c-0.22102 0-0.43302-0.0878-0.5893-0.2441s-0.24404-0.3683-0.24404-0.5893c0-0.22098 0.08776-0.43296 0.24404-0.58924s0.36828-0.24406 0.5893-0.24406h6.575l-1.45-2.1517c-0.0605-0.09066-0.0999-0.19376-0.1153-0.30169s-0.0065-0.21794 0.0263-0.32191 0.0886-0.19926 0.1631-0.27883 0.166-0.1414 0.2676-0.18092c0.2105-0.10685 0.4518-0.13634 0.6818-0.08333 0.23 0.053 0.434 0.18516 0.5765 0.37335l2.1167 3.135c0.0136 0.01067 0.025 0.02399 0.0333 0.03916 0.0719 0.06084 0.1337 0.13255 0.1834 0.21251 0.0546 0.09525 0.0859 0.20201 0.0916 0.31166v0.01332c0.0032 0.00376 0.0056 0.00816 7e-3 0.0129 0.0015 0.00473 0.0019 0.00971 0.0014 0.01462 0 0.01333 0.0083 0.02499 0.0083 0.03832 0 0.01331-0.0083 0.02581-0.0083 0.03831 0.0011 0.0105-0.0019 0.0209-0.0084 0.0292z"
                          clipRule="evenodd"
                          fill="#fff"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}
