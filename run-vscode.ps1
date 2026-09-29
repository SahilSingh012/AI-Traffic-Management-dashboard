# PowerShell Script to run FlowGrid in VS Code
Write-Host "======================================================" -ForegroundColor Cyan
Write-Host "  Starting FlowGrid AI Traffic Analytics Dashboard    " -ForegroundColor Cyan
Write-Host "======================================================" -ForegroundColor Cyan

if (-not (Test-Path "node_modules")) {
    Write-Host "[INFO] Installing npm packages..." -ForegroundColor Yellow
    npm install
}

Write-Host "[INFO] Opening http://localhost:5173 and running Vite..." -ForegroundColor Green
Start-Process "http://localhost:5173"
npm run dev
