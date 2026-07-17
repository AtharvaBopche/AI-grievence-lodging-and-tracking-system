/* ==========================================
   Configuration File
   AI-Powered Grievance Lodging & Tracking System
   ========================================== */

/*
|--------------------------------------------------------------------------
| Backend Configuration
|--------------------------------------------------------------------------
|
| Change this URL only if your FastAPI backend
| is hosted on a different server.
|
| Local Development:
| http://127.0.0.1:8000
|
| Example Production:
| https://your-backend-url.com
|
*/

const CONFIG = {

    API_BASE_URL: "http://127.0.0.1:8000",

    REQUEST_TIMEOUT: 10000,

    APP_NAME: "AI-Powered Grievance Lodging & Tracking System",

    VERSION: "1.0.0"

};

/*
|--------------------------------------------------------------------------
| Freeze configuration to prevent accidental changes
|--------------------------------------------------------------------------
*/

Object.freeze(CONFIG);
