import Head from "next/head";
import Link from "next/link";

import axios from "src/configs/axios";

import Header from "src/parts/Header";
import Hero from "src/parts/Hero";
import ListCourses from "src/parts/ListCourses";
import ListCategories from "src/parts/ListCategories";
import Footer from "src/parts/Footer"; 



function Home({data}) {

return (
    <>
      <Head>
        <title>Nusaedu Digital Learning</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

        <main>
        <section className="navbar pt-10">
          <div className="container mx-auto">
            <Header></Header>
          </div>
        </section>
        
        <section className="hero">
          <div className="container mx-auto">
        <Hero></Hero>
        </div>
        </section>

        <section className="courses">
        <div className="container mx-auto pt-24">
          <ListCourses data={data}></ListCourses>    
        </div>
        </section>

        <section className="categories">
        <div className="container mx-auto pt-24">
          <ListCategories></ListCategories>    
        </div>
        </section>
        <section className="footer mt-24 py-12">
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () =>{
  try {
    const data = await axios.get(`/courses`)
    return {data:data.data.data};
  } catch(error) {
    return error
  }
}; 

export default Home 