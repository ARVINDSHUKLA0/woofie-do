import './blog.css';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import BlogData from '@/Data/BlogData';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  return (
    <>
      <Navbar />

      {/* <section className='container-fluid py-lg-5'>
        <div className='custom-bottom-border d-flex align-items-center gap-3 my-lg-5 my-md-4 my-sm-4'>
          <h2 className='font-size-large'>blog grid</h2>
          <h5 className='mt-5 d-md-block d-none'>/ discover the news</h5>
        </div>
      </section> */}

      <section className='mt-100 blog-main-bg-img'>
        <div className="background-imges">
          <img className='img-fluid w-100' src="/assets/img/blog-imges.PNG" alt="" />
        </div>
      </section>

      <section>
        <div className='container px-md-4 px-2 mb-md-5 mb-3'>
          <div className='row m-0'>
            <h3 className='text-center mb-4 fw-bold pt-3'>Latest stories</h3>
            {
              BlogData.map((BlogItem, index) => (
                <div key={index} className={`col-lg-4 col-md-4 col-sm-4 col-12 `}>
                  <Link className={`text-decoration textHover `} href={`/Blog/${BlogItem.id}`}>
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
            {/* <div className='text-center mt-3'>
              <button className={`width-btn border-0 btn-woofie ${styles.blogbtnwidth} `}>Read Blog</button>
            </div> */}
          </div>
        </div>
      </section>
      {/* 
      <section>
        <div className="row m-0">
          <div className="col-lg-9 col-sm-6 col-12 offset-lg-3">
            <div className="row m-0">
              {BlogData.map((blogValue) => (
                <div key={blogValue.id} className="col-lg-4 col-sm-6 col-12 mb-50 custom-sm-margin">
                  <div className='d-flex align-items-center'>
                    <div className='cutom-border'></div>
                    <p className='m-0 ps-2'>{blogValue.date}</p>
                    <i className="fas fa-circle li-icon-dots ps-2"></i>
                  </div>
                  <p className='m-0'>{blogValue.creativity}</p>
                  <h5 className='fw-bold my-lg-4'>{blogValue.title}</h5>
                  <Image 
                    src={blogValue.image} 
                    alt={blogValue.title}
                    width={400}
                    height={250}
                    className='img-fluid'
                  />
                  <p className='m-0 py-lg-4 py-3'>{blogValue.description}</p>
                  <Link href={`/Blog/${blogValue.id}`}>
                    <button className='custom-border'>read more</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </>
  );
}