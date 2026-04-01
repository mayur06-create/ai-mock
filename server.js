const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Groq = require('groq-sdk');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('./')); // Serve static HTML files from the current folder

let groq;
try {
    if (process.env.GROQ_API_KEY) {
        groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    }
} catch (e) {
    console.warn("Groq SDK failed to initialize. Check your GROQ_API_KEY.");
}

app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;
        
        if (!message) {
             return res.status(400).json({ error: "Message is required." });
        }
        
        if (!process.env.GROQ_API_KEY) {
            return res.status(500).json({ error: "GROQ_API_KEY is missing from the .env file." });
        }
        
        if (!groq) {
             groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
        }

        const systemPrompt = `You are Alex, a supportive and professional AI mock interviewer. 
        The user is a candidate practicing for an interview. 
        Evaluate their latest response briefly, provide a tiny piece of constructive feedback, and then ask a realistic follow-up question. 
        Keep your response concise, naturally conversational, and within 2-4 sentences. Do not use markdown styling.`;

        const response = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: `Candidate said: "${message}"` }
            ],
            temperature: 0.7,
            max_tokens: 300
        });

        res.json({ response: response.choices[0]?.message?.content || "Sorry, I couldn't formulate a response." });
    } catch (error) {
        console.error('Error calling Groq API:', error);
        res.status(500).json({ error: 'Failed to generate response from AI.' });
    }
});

app.listen(port, () => {
    console.log(`[Server] running on http://localhost:${port}`);
    console.log(`[Config] Make sure your GROQ_API_KEY is set in the .env file!`);
});
