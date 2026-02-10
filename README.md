
🐫 Teve Nyilvántartó (Camel Registry)
<br>
Ez a projekt egy Full-Stack webapp, amely tevék adatainak kezelésére (CRUD műveletek) szolgál. A megoldás egy .NET 8 alapú Minimal API backendet és egy Angular 17 alapú frontedet tartalmaz.


🚀 Stack


<br>
Backend 🗄️

Keretrendszer: ASP.NET Core 8 (.NET 8)

Architektúra: Minimal API 

Adatbázis: SQLite (Entity Framework Core)

ORM: EF Core Code-First

Dokumentáció: Swagger / OpenAPI

Tesztelés: xUnit

Frontend 💻
Keretrendszer: Angular 17+ 

Nyelv: TypeScript

Stílus: Bootstrap 5 + Egyedi CSS (Sivatagi téma 🌵)

Kommunikáció: HttpClient (Reactive)

Validáció: Reactive Forms

Tesztelés: Jasmine / Karma

✨ Funkciók
Tevék listázása: Az összes rögzített teve megjelenítése kártyás/táblázatos elrendezésben.

Új teve felvétele: Validált űrlap segítségével (név hossza, púpok száma).

Szerkesztés: Meglévő adatok módosítása.

Törlés: Tevék eltávolítása az adatbázisból.

Validáció:

A név kötelező, minimum 2 karakter.

A púpok száma kizárólag 1 vagy 2 lehet.

Hibaüzenetek: User friendly visszajelzés, ha a backend nem elérhető.

🛠️ Telepítés és Futtatás
A projekt futtatásához szükség van a .NET 8 SDK-ra és a Node.js-re.

1. A Repository klónozása
Bash
git clone https://github.com/FELHASZNALONEV/camel_registry_fullstack.git
cd camel-registry
2. Backend Indítása (ASP.NET Core)
A backend automatikusan létrehozza az camels.db SQLite adatbázist induláskor.

Bash
cd CamelRegistry
dotnet restore
dotnet run
A backend alapértelmezetten a http://localhost:5121 címen indul el. Swagger dokumentáció: http://localhost:5121/swagger

3. Frontend Indítása 
Nyiss egy új terminált, és lépj a frontend mappába:

Bash
cd camel-frontend
npm install
npm start
A frontend a http://localhost:4200 címen érhető el.

✅ Tesztek Futtatása
A projekt tartalmaz Unit teszteket mind a backend, mind a frontend oldalon.

Backend tesztek (xUnit):

Bash
cd CamelRegistry.Tests
dotnet test
Frontend tesztek (Jasmine):

Bash
cd camel-frontend
npm test
