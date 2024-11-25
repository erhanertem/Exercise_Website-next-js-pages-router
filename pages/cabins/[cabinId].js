import { useRouter } from "next/router"; // THIS IS FOR PAGES ROUTER
// import { useRouter } from "next/navigation"; // THIS IS FOR APP ROUTER

function Cabin() {
  const router = useRouter();
  return <div>Cabin # {router.query.cabinId}</div>; // CabinId needs to match the name of this file in [....]
}

export default Cabin;
