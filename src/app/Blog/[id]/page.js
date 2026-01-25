import { use } from 'react'; 
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import BlogData from '@/Data/BlogData';

export function generateStaticParams() {
  return BlogData.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export const dynamicParams = false; 

export default function BlogDetailsPage({ params }) { 
  const { id } = use(params);
  
  const blog = BlogData.find(
    (b) => b.id.toString() === id.toString() 
  );
   

  if (!blog) {
    return (
      <>
        <Navbar />
        <h2 className="text-center py-5 mt-100">Blog not found</h2>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="container-fluid mt-100">
        <div className="row m-0 blog-layout">
          <div className="col-lg-6 col-md-6 col-12 image-column">
            <div className="image-column-inner">
              <img
                src={blog.image}
                alt={blog.title}
                className="blog-sticky-img"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 content-column">
            <div className="content-scroll">
              <h4 className="fw-bold mb-3">{blog.title}</h4>

              {blog.intro && <p className="fs-14 mb-3">{blog.intro}</p>}

              {blog.subDataDecHed?.map((item, index) => (
                <div key={index} className="mb-3">
                  {item.subHading && <h5 className="fw-bold">{item.subHading}</h5>}
                  {item.subDec && <p className="fs-14 mb-1">{item.subDec}</p>}
                  {item.takewayHeading && (
                    <p className="fw-bold fs-14 m-0">{item.takewayHeading}</p>
                  )}
                  {item.takewayDec && <p className="fs-14">{item.takewayDec}</p>}
                  {item.dataList && (
                    <ul className="ps-3">
                      {item.dataList.map((li, i) => (
                        <li key={i} className="fs-14">{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}




 