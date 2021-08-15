import React from 'react'
import useAuth from '../auth/useAuth';
import { PreviewLink } from './previewLink';

export const Preview = () => {
  const { username } = useAuth();
  const url = `${process.env.REACT_APP_DOMAIN_DEVELOPMENT}${username}`
  console.log(url)
  return (
    <div>
      {process.env.NODE_ENV }
      <a href={url} target="_blank">my linktree: https://linkvauls.com/{username}</a>

      <PreviewLink/>
    </div>
  )
}
