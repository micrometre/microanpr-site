import type { APIRoute } from "astro";



export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const first_name = data.get("first-name");
  const last_name = data.get("last-name");
  const email = data.get("email");
  const phone = data.get("phone");
  const company = data.get("company");
  const message = data.get("message");
  // Validate the data - you'll probably want to do more than this
  if (!first_name || !last_name || !email || !phone || company || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }
  // Do something with the data, then return a success response
    console.log(data)
  return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  );

};