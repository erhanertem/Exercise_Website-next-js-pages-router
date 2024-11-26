import { supabase } from "@/lib/supabase";

// These route handlers are GENERIC and requires HTTP verb check
export default async function handler(req, res) {
  // GUARD CLAUSE
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Please make a post request",
    });
  }

  // // DUMMY DATA
  // const contactData = {
  //   fullName: "Jonas",
  //   email: "test@test.com",
  //   subject: "booking",
  //   message: "Hey there!",
  // };
  const contactData = JSON.parse(req.body); // Deserialize Json req data coming from the client in order to save it in the DB

  const { data, error } = await supabase.from("contact").insert([contactData]);

  // GUARD CLAUSE
  if (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Could not send your message. Please try again.",
    });
    return;
  }

  // Success message
  res.status(200).json({
    success: true,
    message: "Thanks for your message! We will be getting in touch soon.",
  });
}
