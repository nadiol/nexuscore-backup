
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("❌ Metodo non consentito. Solo POST.");
  }

  try {
    const appsScriptUrl = "https://script.google.com/macros/s/AKfycbwyMGqbH4eE_dx9v-uJFCD5Yp_tjiCJ5FBTxOWMDgftb1keLOf2jzjIkWDcBYiYxYP0/exec";
    const response = await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });

    const result = await response.text();
    return res.status(200).send("✅ Archiviazione completata: " + result);
  } catch (error) {
    console.error("❌ Errore backend Vercel:", error);
    return res.status(500).send("❌ Errore archiviazione: " + error.message);
  }
}
