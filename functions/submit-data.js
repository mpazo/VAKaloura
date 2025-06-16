const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://your_database.supabase.co'; // TODO: change to your supabase database
const SUPABASE_ANON_KEY = 'your_anon_key'; // TODO: change to your own anon key
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    }

    const { visual_count, auditory_count, kinesthetic_count, resposta_libre, age, gender, diagnostico, universitario, informatico } = JSON.parse(event.body);

    try {
        const { data, error } = await supabaseClient
            .from('results')
            .insert([{ visual_count, auditory_count, kinesthetic_count, resposta_libre, age, gender, diagnostico, universitario, informatico }]);

        if (error) throw error;

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Data inserted successfully', data }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
