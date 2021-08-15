import React, { useEffect } from "react";
import "../assets/smarphone.css";
import useAppProvider from "../appContext/useAppProvider";
export const PreviewLink = () => {
  const { links, getAllLinks } = useAppProvider();
  const brands = [
    "https://res.cloudinary.com/dutj1bbos/image/upload/v1628442169/4145_upvog5.png",
  ];
  useEffect(getAllLinks, [])
  return (
    <div className="container-preview">
      <div className="smartphone custom-smart">
        <div className="container-brands">
          <img className="brands" src={brands[0]} alt="img"></img>
        </div>
        <div className="container-links-all">
          {links.map((link) => (
            <div className="container-body-smarphone" key={link.id}>
              <a href={link.original_url} target="_blank" className="body-smarphone">{link.title}</a>
            </div>
          ))}
        </div>
        { links.length == 0 &&
        <h6>you need to add new link</h6>
        }
      </div>
    </div>
  );
};
