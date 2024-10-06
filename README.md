# Studify

Studify is a Spotify-inspired app designed for students to discover new tracks and albums, create music playlists, and find the perfect soundtrack for their study sessions.
It also features a to-do list function so you can easily monitor your tasks while listening to your favorite songs.

## Running this App Locally
You need to clone and install the following dependencies to run the project

```bash
git clone https://github.com/princessdlpz/svelte-project.git

npm install --force
```
If you want to use your own spotify credentials, you will need to <br>
• Log into the [Spotify for Developers](https://developer.spotify.com/) - Dashboard using your Spotify account <br>
• Create an app. These will be required for API authorization to obtain an access token. <br>
• Use the access token in your API requests. <br>
• Make sure to add this your redirected URLs  `localhost url`/api/auth/callback (refer to image provided)<br>
![image](https://github.com/princessdlpz/svelte-studify-project/assets/132227818/f5fa58ed-f24d-45ac-bd79-b00a2378ea17)

Create an .env file in your source file containing your API Key and Client ID 
```bash
SPOTIFY_APP_CLIENT_ID= 'your client id here'
SPOTIFY_APP_CLIENT_SECRET= 'your api key here -Client Secret Key' 
SPOTIFY_BASE_URL=https://api.spotify.com/v1
BASE_URL=http://localhost:5173 (or whatever host you are using)
```

## Starting the server

run `npm run dev` to start the project

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building
To a production version of this app

```bash
npm run build
```

## Deployment Configuration
Install with `npm i -D @sveltejs/adapter-vercel`  then add the adapter to ```svelte.config.js``` file

```bash
import adapter from '@sveltejs/adapter-vercel';

export default {
    kit: {
        adapter: adapter({
            // Deployment configuration
        })
    }
};
```
