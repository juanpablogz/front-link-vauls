import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "../assets/profilePage.css";
import "../assets/smarphone.css";
import useAppProvider from "../appContext/useAppProvider";
export const ProfilePage = () => {
  const { links, getAllLinks } = useAppProvider();
  useEffect(getAllLinks, [])
  const { username } = useParams()
  return (
    <div>
      <img className="wallpaper" src="https://res.cloudinary.com/dutj1bbos/image/upload/v1629161716/pexels-simon-berger-1323550_1_mkozuu.jpg"></img>
      <div className="user">
        <img className="user-icon" src="https://res.cloudinary.com/dutj1bbos/image/upload/v1629163050/descarga_naxlln.png"></img>
        <h3 className="">@{username}</h3>
        <div className="container-links-all custom-profile">
          {links.map((link) => (
            <div className="container-body-smarphone" key={link.id}>
              <a href={link.original_url} target="_blank" className="body-smarphone">{link.title}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
