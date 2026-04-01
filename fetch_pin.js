const fs = require('fs');
async function run() {
    try {
        const urlToFetch = process.argv[2];
        console.log("Fetching: " + urlToFetch);
        let response = await fetch(urlToFetch, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)"
            }
        });
        
        let url = response.url;
        console.log("Redirected to: " + url);
        
        // Fetch the full page
        let htmlResp = await fetch(url, {
             headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)"
            }           
        });
        let html = await htmlResp.text();
        
        // Find mp4 links in the raw HTML string
        const regex = /"contentUrl":"(https:\/\/[^"]+\.mp4)"/g;
        let match;
        let mp4s = [];
        while ((match = regex.exec(html)) !== null) {
            mp4s.push(match[1]);
        }
        
        if (mp4s.length === 0) {
            const regex2 = /https:\/\/[^"]+\.mp4/g;
            while ((match = regex2.exec(html)) !== null) {
                mp4s.push(match[0]);
            }
        }
        
        // Remove duplicates and decode hex slashes (\/)
        let uniqueMp4s = [...new Set(mp4s)].map(u => u.replace(/\\\//g, '/'));
        console.log("Found mp4 links: ", uniqueMp4s);
        
        // Download the first quality MP4 (prefer 720p or highest available)
        if (uniqueMp4s.length > 0) {
            let targetUrl = uniqueMp4s.find(u => u.includes('720')) || uniqueMp4s[uniqueMp4s.length - 1];
            console.log("Downloading target: " + targetUrl);
            
            const videoRes = await fetch(targetUrl);
            const buffer = await videoRes.arrayBuffer();
            fs.writeFileSync('d:/HACKATHON/Ai mock/background.mp4', Buffer.from(buffer));
            console.log("Saved to d:/HACKATHON/Ai mock/background.mp4");
        } else {
            console.log("Failed to find MP4.");
        }
    } catch (e) {
        console.error("Error:", e);
    }
}
run();
