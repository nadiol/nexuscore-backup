export default async function handler(req, res) {
  // CORS headers per browser
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Gestione preflight
  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    const { fileName, content, modulo } = req.body;

    if (!fileName || !content) {
      return res.status(400).json({ success: false, error: "Parametri mancanti" });
    }

    // Invio al Web App di Apps Script
    const response = await fetch("https://script.google.com/macros/s/AKfycbxrcc7rok4xlwPQEAl5YJQd5TuNaqoeUJxeijYY4Ny5elkdRUuGZYUPsYgq01AqPgLG/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fileName, content })
    });

    const data = await response.json();

    if (data.success) {
      return res.status(200).json({ success: true, fileId: data.fileId, fileName });
    } else {
      throw new Error(data.error || "Errore sconosciuto Apps Script");
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
