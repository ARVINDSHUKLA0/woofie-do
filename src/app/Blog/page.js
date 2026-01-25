import './blog.css';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import BlogData from '@/Data/BlogData';
import Link from 'next/link'; 

export default function BlogPage() {
  
  return (
    <>
      <Navbar />

      <section className='mt-100 blog-main-bg-img'>
        <div className="background-imges">
          <img className='img-fluid w-100' src="/assets/img/blog-imges.webp" alt="" />
        </div>
      </section>

      <section>
        <div className='container px-md-4 px-2 mb-md-5 mb-3'>
          <div className='row m-0'>
            <h3 className='text-center mb-4 fw-bold pt-3'>Latest stories</h3>
            {
              BlogData.map((BlogItem, index) => (
                <div key={index} className={`col-lg-4 col-md-4 col-sm-4 col-12 `}>
                  <Link className={`text-decoration textHover `} href={`/blog/${BlogItem.id}`}>
                    <div>
                      <div className='blogImg'>
                        <img className='img-fluid' src={BlogItem.image}/>
                      </div>
                      <h5 className='fs-16 py-2  fw-bold text-dark'>{BlogItem.title}</h5>
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}