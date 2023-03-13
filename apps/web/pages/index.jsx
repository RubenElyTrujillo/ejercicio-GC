import React, { useState, createContext } from 'react'
import Cover from "../src/components/Cover/cover";
import Sports from '../src/components/Sports/sports';
import Layout from "../src/layout/layout";

export const VideoContext = createContext();

export default function Web(){
  const [ videoId, setVideoId ] = useState('Zv11L-ZfrSg')
  const changeVideo = (newVideo) =>{
    setVideo(newVideo)
  }
  return (
    <VideoContext.Provider value={{ videoId, setVideoId }}>
      <Layout>
        <Cover />
        <Sports />
      </Layout>
    </VideoContext.Provider>
  );
}
