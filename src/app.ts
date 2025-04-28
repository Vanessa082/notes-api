import express from 'express';
import noteRoutes from './routes/note.routes';
import notebookRoutes from './routes/notebook.routes';


const app = express();

app.use(express.json());
app.use('/notes', noteRoutes);
app.use('/notebooks', notebookRoutes);

export default app;
