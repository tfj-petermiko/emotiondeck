@echo off
echo ================================
echo 💫 EmotionDeck — Clean Redeploy
echo ================================
echo.

:: 1️⃣ Usuń lokalny cache Vercela
echo 🧹 Clearing local cache...
rmdir /s /q .vercel

:: 2️⃣ Wymuś pełny redeploy (bez cache, prod)
echo 🚀 Deploying fresh build to Vercel...
vercel --prod --force --no-clipboard

echo.
echo ✅ Done! Check the deploy URL above.
pause
