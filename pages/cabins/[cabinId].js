import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import Head from "next/head";
// import { useRouter } from "next/router"; // THIS IS FOR PAGES ROUTER
// import { useRouter } from "next/navigation"; // THIS IS FOR APP ROUTER

// DYNAMICALLY GENERATED SERVER SIDE RENDERING (SSR)
// NOTE: THIS FUNCTION HAS ACCESS TO PARAMS AS PARAMS REQUIRES DYNAMIC RENDERING
export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);
  return { props: { cabin } }; // Returns a new prop @ each request
}

function Cabin({ cabin }) {
  // const router = useRouter();

  return (
    <>
      <Head>
        {/* <title>Cabin {router.query.cabinId} / The Wild Oasis</title> */}
        <title>Cabin {cabin.name} / The Wild Oasis</title>
      </Head>

      <div className='max-w-6xl mx-auto mt-8'>
        <CabinView cabin={cabin} />
      </div>
    </>
  ); // CabinId needs to match the name of this file in [....]
}

export default Cabin;
