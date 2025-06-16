const express = require('express');
const path = require('path');
const { createClient } = require('@supabase/supabase-js'); // Import Supabase
const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON data from incoming requests
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html file from public directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Supabase connection
const SUPABASE_URL = 'https://your_database.supabase.co'; // TODO: change to your supabase database
const SUPABASE_ANON_KEY = 'your_anon_key'; // TODO: change to your own anon key
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// API route to handle form submissions
app.post('/submit-data', async (req, res) => {
    const { visual_count, auditory_count, kinesthetic_count, resposta_libre, age, gender, diagnostico } = req.body;

    try {
        // Insert data into the 'results' table
        const { data, error } = await supabaseClient
            .from('results')
            .insert([
                {
                    visual_count,
                    auditory_count,
                    kinesthetic_count,
                    resposta_libre,
                    age,
                    gender,
                    diagnostico,
                    universitario,
                    informatico
                }
            ]);

        if (error) throw error;

        res.status(200).json({ message: 'Data inserted successfully', data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
