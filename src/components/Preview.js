import React from 'react'
import useAuth from '../auth/useAuth';
import { PreviewLink } from './previewLink';

export const Preview = () => {
  const { username } = useAuth();
  const url = `https://link-vauls.netlify.app/${username}`
  console.log(url)
  return (
    <div>
      <a href={url} target="_blank">my linkvauls: https://linkvauls.com/{username}</a>
      <PreviewLink/>
    </div>
  )
}
