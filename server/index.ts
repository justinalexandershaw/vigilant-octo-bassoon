import express, { Request, Response } from 'express';
import middleware from '../middleware';
import next from 'next';

(async () => {
  try {
    const PORT = process.env.PORT || 3000;
    const isDev = process.env.NODE_ENV !== 'production';
    const nextServer = next({ dev: isDev });
    const nextjsHandler = nextServer.getRequestHandler();
    const app = express();
    middleware(app);
  
    await nextServer.prepare();
  
    app.all('*', (req: Request, res: Response) => nextjsHandler(req, res));
  
    app.listen(PORT, (err?: any) => {
      if (err) throw err;
      if (isDev) console.log(`Ready on http://localhost:${PORT} – env ${process.env.NODE_ENV}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();