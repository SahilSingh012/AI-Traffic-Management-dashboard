@echo off
TITLE FlowGrid AI Traffic Control Dashboard
echo ======================================================
echo   Starting FlowGrid AI Traffic Analytics Dashboard
echo ======================================================
if not exist "node_modules\" (
    echo [INFO] Installing required npm packages first...
    call npm install
)
echo [INFO] Launching Vite local server on http://localhost:5173 ...
start http://localhost:5173
call npm run dev
pause
