import React, { useEffect, useState } from "react";
import "../assets/smarphone.css";
export const Smarphone = () => {
  const [position, setPosition] = useState(0);
  const cuadros = [1,2,3,4];
  var mia = 0;
  const bucle = () => {
    setInterval(() => {
      mia = mia + 1;
      setPosition(mia);
      // console.log(mia);
      if (mia > 2) {
        mia = 0;
        setPosition(mia);
      }
    }, 3000);
  };
  const brands = [
    "https://res.cloudinary.com/dutj1bbos/image/upload/v1628442169/4145_upvog5.png",
    "https://res.cloudinary.com/dutj1bbos/image/upload/v1628439481/Apple-logo_hpzet7.png",
    "https://res.cloudinary.com/dutj1bbos/image/upload/v1628442299/oUH9hNy_jxhllq.png",
  ];

  useEffect(() => {
    bucle();
    return () => {
      setPosition({});
    };
  }, []);

  return (
    <div className="smartphone">
      <div className="container-brands">
        {/* {position} */}
        <img className="brands" src={brands[position]} alt="img"></img>
      </div>
      {cuadros.map((cuadro) => (
        <div className="container-body-smarphone" key={cuadro}>
          <div className="body-smarphone"></div>
        </div>
      ))}
    </div>
  );
};
