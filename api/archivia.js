export default async function handler(req, res) {
  // ✅ CORS headers per tutte le richieste
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ✅ Gestione preflight OPTIONS (obbligatoria per i browser moderni)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const { fileName, content, modulo } = req.body;

    if (!fileName || !content || !modulo) {
      return res.status(400).json({ success: false, error: "Parametri mancanti." });
    }

    // Qui ci sarebbe il salvataggio su Google Drive
    console.log(`📁 Ricevuto file ${fileName} dal modulo ${modulo}`);
    console.log(`📄 Contenuto: ${content.slice(0, 100)}...`);

    // Simulazione risposta OK
    return res.status(200).json({
      success: true,
      message: `File ${fileName} archiviato correttamente.`
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
