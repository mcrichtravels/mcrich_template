import Head from 'next/head'
import Nav from "@/components/nav"
import BannerVid from "@/components/banner"
import Main from "@/components/main"
import LowerMain from "@/components/lower-main"
import Footer from '@/components/footer'

export default function Home(){
  return (
      <> 
        <Nav />
        <BannerVid/>
        <Main/>
        <LowerMain/>
        <Footer/>
      </>
  	)
}
