import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import supabase from './db.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the Vite build directory
const distPath = join(__dirname, '../dist');
app.use(express.static(distPath));

// --- API Routes ---

// 1. Submit New Appointment
app.post('/api/appointments', async (req, res) => {
    try {
        const { name, phone, email, date, service, message } = req.body;

        // Basic validation
        if (!name || !phone || !email || !date || !service) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const { data, error } = await supabase
            .from('appointments')
            .insert([
                { name, phone, email, date, service, message: message || '' }
            ])
            .select();

        if (error) throw error;

        res.status(201).json({
            success: true,
            message: 'Appointment request received successfully',
            data: data[0]
        });
    } catch (error) {
        console.error('Error saving appointment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// 2. Submit New Contact Message
app.post('/api/contacts', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const { data, error } = await supabase
            .from('contacts')
            .insert([
                { name, email, phone: phone || '', message }
            ])
            .select();

        if (error) throw error;

        res.status(201).json({
            success: true,
            message: 'Contact message received successfully',
            data: data[0]
        });
    } catch (error) {
        console.error('Error saving contact message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// 3. Get All Leads for Admin Dashboard
app.get('/api/admin/leads', async (req, res) => {
    try {
        // In a real app, this route would be protected by authentication!

        const { data: appointments, error: apptError } = await supabase
            .from('appointments')
            .select('*')
            .order('created_at', { ascending: false });

        const { data: contacts, error: contactError } = await supabase
            .from('contacts')
            .select('*')
            .order('created_at', { ascending: false });

        if (apptError || contactError) throw (apptError || contactError);

        res.json({
            appointments,
            contacts
        });
    } catch (error) {
        console.error('Error fetching leads:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Catch-all error for undefined API routes
app.use('/api/*', (req, res) => {
    res.status(404).json({ error: 'API route not found' });
});

// For all other routes, serve the index.html from dist (client-side routing)
app.get('*', (req, res) => {
    res.sendFile(join(distPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Backend Express server running on port ${PORT}`);
});
