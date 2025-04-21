
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Solo POST supportato.");
  }

  const url = "https://script.google.com/macros/s/AKfycbwyMGqbH4eE_dx9v-uJFCD5Yp_tjiCJ5FBTxOWMDgftb1keLOf2jzjIkWDcBYiYxYP0/exec";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const result = await response.text();
    res.status(200).send("✅ Risposta da Apps Script: " + result);
  } catch (err) {
    res.status(500).send("❌ Errore durante l'invio a Apps Script: " + err.message);
  }
}
