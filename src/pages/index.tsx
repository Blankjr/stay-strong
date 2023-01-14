import { type NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useState, useEffect} from "react";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const Home: NextPage = () => {

// const [count, setCount] = useState(0);
const [isMuted, setMuted] = useState(true);

  // Similar to componentDidMount and componentDidUpdate: 
  useEffect(() => {    // Update the document title using the browser API 
    document.title = `Keep moving`; 
    // setCount(1)
    });
  return (
    <>
      <Head>
        <title>Stay Strong!</title>
        <meta name="description" content="Motivation Video" />
        <link rel="icon" href="/icon48x48.png" />
      </Head>
      <main onClick={()=>setMuted(!isMuted)} className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Stay <span className="text-[hsl(280,100%,70%)]">Strong</span>, :)
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:gap-8 w-max h-fit">
           <ReactPlayer playing muted={isMuted} controls loop url='baki.mp4' width='100%' height='700px'/> 
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
