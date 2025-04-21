export default async function handler(req, res) {
  // ✅ CORS: consenti richieste da qualsiasi origine
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // ✅ Gestione preflight CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 🔽 Il resto del codice esistente va qui, ad esempio:
  try {
    const { fileName, content, modulo } = req.body;

    // logica per salvare il file su Google Drive (già presente nel tuo backend)
    // ...

    res.status(200).json({ success: true, message: `File ${fileName} archiviato correttamente.` });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message

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
