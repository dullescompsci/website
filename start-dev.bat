@echo off
title Dulles Computer Science Club Website (Development Server)

echo Notice: website is binded to port 3000 for development. (1024 for prod)

:main
echo [Re]loading website...
cd src
npm start

pause

goto main
