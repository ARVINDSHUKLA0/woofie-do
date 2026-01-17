// 'use client';

// import Footer from '@/Components/Footer';
// import Navbar from '@/Components/Navbar';
// import BlogData from '@/Data/BlogData';
// import { useParams } from 'next/navigation';


// export default function BlogDetailsPage() {
//   const { id } = useParams();
//   const numericId = parseInt(id);
//   const blog = BlogData.find((b) => b.id === numericId);

//   if (!blog) {
//     return <h2 className="text-center py-5">Blog not found</h2>;
//   }

//   return (
//     <>
//       <Navbar />

//       {/* <section className="container-fluid mt-100">
//         <div className="row m-0">
//           <div className="col-lg-6 col-md-6 col-12">
//             <img 
//               src={blog.image}
//               alt={blog.title}
//               className="w-100 d-block mx-auto my-4 img-fluid"
//             />
//           </div> 
//           <div className="col-lg-6 col-md-6 col-12">
//             <div className="pt-3"> 
//               <h4 className="fw-bold mb-3">{blog.title}</h4>
//               {blog.intro && (
//                 <p className="fs-14 mb-3">{blog.intro}</p>
//               )}
 
//               {blog.subDataDecHed?.map((item, index) => (
//                 <div key={index} className="mb-3">

//                   {item.subHading && (
//                     <h5 className="fw-bold">{item.subHading}</h5>
//                   )}

//                   {item.subDec && (
//                     <p className="fs-14 mb-1">{item.subDec}</p>
//                   )}

//                   {item.takewayHeading && (
//                     <p className="fw-bold fs-14 m-0">
//                       {item.takewayHeading}
//                     </p>
//                   )}

//                   {item.takewayDec && (
//                     <p className="fs-14">{item.takewayDec}</p>
//                   )}
//                   {item.dataList && (
//                     <ul className="ps-3">
//                       {item.dataList.map((li, i) => (
//                         <li key={i} className="fs-14">
//                           {li}
//                         </li>
//                       ))}
//                     </ul>
//                   )}

//                 </div>
//               ))}

//             </div>
//           </div>
//         </div>
//       </section> */}

//       <section className="container-fluid mt-100">
//         <div className="row m-0 blog-layout">

//           {/* LEFT IMAGE (FIXED) */}
//           <div className="col-lg-6 col-md-6 col-12 image-column mb-4">
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="blog-sticky-img"
//             />
//           </div>

//           {/* RIGHT CONTENT (SCROLL) */}
//           <div className="col-lg-6 col-md-6 col-12 content-column mt-3">
//             <div className="content-scroll mt-3">

//               <h4 className="fw-bold mb-3">{blog.title}</h4>

//               {blog.intro && (
//                 <p className="fs-14 mb-3">{blog.intro}</p>
//               )}

//               {blog.subDataDecHed?.map((item, index) => (
//                 <div key={index} className="mb-3">

//                   {item.subHading && (
//                     <h5 className="fw-bold">{item.subHading}</h5>
//                   )}

//                   {item.subDec && (
//                     <p className="fs-14 mb-1">{item.subDec}</p>
//                   )}

//                   {item.takewayHeading && (
//                     <p className="fw-bold fs-14 m-0">
//                       {item.takewayHeading}
//                     </p>
//                   )}

//                   {item.takewayDec && (
//                     <p className="fs-14">{item.takewayDec}</p>
//                   )}

//                   {item.dataList && (
//                     <ul className="ps-3">
//                       {item.dataList.map((li, i) => (
//                         <li key={i} className="fs-14">{li}</li>
//                       ))}
//                     </ul>
//                   )}

//                 </div>
//               ))}

//             </div>
//           </div>

//         </div>
//       </section>


//       <Footer />
//     </>
//   );
// }



'use client';

import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import BlogData from '@/Data/BlogData';
import { useParams } from 'next/navigation';

export default function BlogDetailsPage() {
  const { id } = useParams();
  const numericId = parseInt(id);
  const blog = BlogData.find((b) => b.id === numericId);

  if (!blog) {
    return <h2 className="text-center py-5">Blog not found</h2>;
  }

  return (
    <>
      <Navbar />

      <section className="container-fluid mt-100">
        <div className="row m-0 blog-layout">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 col-md-6 col-12 image-column">
            <div className="image-column-inner">
              <img
                src={blog.image}
                alt={blog.title}
                className="blog-sticky-img"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 col-md-6 col-12 content-column">
            <div className="content-scroll">

              <h4 className="fw-bold mb-3">{blog.title}</h4>

              {blog.intro && (
                <p className="fs-14 mb-3">{blog.intro}</p>
              )}

              {blog.subDataDecHed?.map((item, index) => (
                <div key={index} className="mb-3">

                  {item.subHading && (
                    <h5 className="fw-bold">{item.subHading}</h5>
                  )}

                  {item.subDec && (
                    <p className="fs-14 mb-1">{item.subDec}</p>
                  )}

                  {item.takewayHeading && (
                    <p className="fw-bold fs-14 m-0">
                      {item.takewayHeading}
                    </p>
                  )}

                  {item.takewayDec && (
                    <p className="fs-14">{item.takewayDec}</p>
                  )}

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
