export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    const { fileName, content, modulo } = req.body;

    if (!fileName || !content) {
      return res.status(400).json({ success: false, error: "Parametri mancanti" });
    }

    // ✅ INVIO AL NUOVO WEB APP CORRETTO
    const response = await fetch("https://script.google.com/macros/s/AKfycbw9bF_y3zNraXjD8_7s8a_7s80vWo8Qx71rcQCENGHRGtLwTblcK6ml1WhrekJ6zSC4/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fileName, content })
    });

    const data = await response.json();

    if (data.success) {
      return res.status(200).json({ success: true, fileId: data.fileId, fileName });
    } else {
      throw new Error(data.error || "Errore Apps Script");
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
