import CabinList from "@/components/CabinList";
import { getCabins } from "@/lib/data-service";
import Head from "next/head";

// > INCREMENTAL STATICALLY GENERATED (SSG+ISR)
// THIS CODE IS EXECUTED @ SERVER SIDE - WHATEVER IS RETURNED FROM THIS FUNCTION IS PASSED ONTO Cabins COMPONENT.
export async function getStaticProps() {
  const cabins = await getCabins();
  return { props: { cabins }, revalidate: 3600 }; // Return the fetched data as props onto Cabins component
  // NOTE: Instead of revalidate @ top level, in pages router setup, revalidate is provided within the props object
}
// // > STATICALLY GENERATED (SSG)
// // THIS CODE IS EXECUTED @ SERVER SIDE - WHATEVER IS RETURNED FROM THIS FUNCTION IS PASSED ONTO Cabins COMPONENT.
// export async function getStaticProps() {
//   const cabins = await getCabins();
//   return { props: { cabins } }; // Return the fetched data as props onto Cabins component
// }

export default function Cabins({ cabins }) {
  // console.log(cabins);
  return (
    <>
      <Head>
        <title>Cabins / The Wild Oasis</title>
      </Head>

      <div>
        <h1 className='text-4xl mb-5 text-accent-400 font-medium'>
          Our Luxury Cabins
        </h1>
        <p className='text-primary-200 text-lg mb-10'>
          Cozy yet luxurious cabins, located right in the heart of the Italian
          Dolomites. Imagine waking up to beautiful mountain views, spending
          your days exploring the dark forests around, or just relaxing in your
          private hot tub under the stars. Enjoy nature&apos;s beauty in your
          own little home away from home. The perfect spot for a peaceful, calm
          vacation. Welcome to paradise.
        </p>

        <CabinList cabins={cabins} />
      </div>
    </>
  );
}
