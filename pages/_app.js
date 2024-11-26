import "@/styles/globals.css";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import { useRouter } from "next/router";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

// > #1 MULTI CONDITIONAL LAYOUT
export default function App({ Component, pageProps }) {
  // Define routes for sub-layouts
  const router = useRouter();
  const isCabinsRoute = router.pathname.startsWith("/cabins");

  return (
    <div
      className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}>
      <Header />

      {isCabinsRoute ? (
        <CabinsLayout>
          <Component {...pageProps} />
        </CabinsLayout>
      ) : (
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      )}
    </div>
  );
}

function DefaultLayout({ children }) {
  return <main className='p-4'>{children}</main>;
}

function CabinsLayout({ children }) {
  return (
    <div className='flex'>
      <aside className='w-52 bg-gray-100 p-4 h-screen shadow-md'>
        <nav>
          <ul className='space-y-2'>
            <li>
              <a
                href='/dashboard'
                className='text-gray-700 hover:text-blue-600'>
                Cabins Side Panel
                <br />
                <em>**This is an alternate layout**</em>
              </a>
            </li>
            <li>
              <a
                href='/dashboard/analytics'
                className='text-gray-700 hover:text-blue-600'>
                Analytics
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <div className='flex-1 p-4'>{children}</div>
    </div>
  );
}

// // > #2 SINGLE LAYOUT
// export default function App({ Component, pageProps }) {
//   return (
//     <div
//       className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}>
//       <Header />

//       <div className='flex-1 px-8 py-12 grid'>
//         <main className='max-w-7xl mx-auto w-full'>
//           {/* CONTENT GOES HERE */}
//           {/* NOTE: IN APP ROUTER WE HAVE USED CHILDREN PROP. HERE WE USE THIS SPECIAL COMPONENT */}
//           <Component {...pageProps} />
//         </main>
//       </div>
//     </div>
//   );
// }
