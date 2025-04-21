
# chat_backup_api (per Vercel)

Questa funzione serverless riceve dati da ChatGPT e li inoltra alla tua Google Web App per l'archiviazione automatica delle chat su Google Drive.

## Struttura

- api/archivia.js → endpoint POST compatibile con ChatGPT

## Deploy

1. Carica questo progetto su GitHub
2. Collegalo a Vercel
3. Deploy automatico

Endpoint API su Vercel:
```
https://[tuo-progetto].vercel.app/api/archivia
```

ChatGPT invierà automaticamente i dati a questo endpoint.
