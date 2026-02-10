
🐫 Teve Nyilvántartó (Camel Registry)
<br>
Ez a projekt egy Full-Stack webapp, amely tevék adatainak kezelésére (CRUD műveletek) szolgál. A megoldás egy .NET 8 alapú Minimal API backendet és egy Angular 17 alapú frontedet tartalmaz.
<br>
<br>

🚀 Stack

<br>
Backend 🗄️
<br>
<br>
Keretrendszer: ASP.NET Core 8 (.NET 8)

Architektúra: Minimal API 

Adatbázis: SQLite (Entity Framework Core)

ORM: EF Core Code-First

Dokumentáció: Swagger / OpenAPI

Tesztelés: xUnit
<br>
<br>

Frontend 💻
<br>

Keretrendszer: Angular 17+ 

Nyelv: TypeScript

Stílus: Bootstrap 5 + Egyedi CSS (Sivatagi téma 🌵)

Kommunikáció: HttpClient (Reactive)

Validáció: Reactive Forms

Tesztelés: Jasmine / Karma
<br>
<br>

✨ Funkciók
<br>
Tevék listázása: Az összes rögzített teve megjelenítése kártyás/táblázatos elrendezésben.

Új teve felvétele: Validált űrlap segítségével (név hossza, púpok száma).

Szerkesztés: Meglévő adatok módosítása.

Törlés: Tevék eltávolítása az adatbázisból.

Validáció:

A név kötelező, minimum 2 karakter.

A púpok száma kizárólag 1 vagy 2 lehet.

Hibaüzenetek: User friendly visszajelzés, ha a backend nem elérhető.
<br>
<br>

🛠️ Telepítés és Futtatás
A projekt futtatásához szükség van a .NET 8 SDK-ra és a Node.js-re.
<br>

 A Repository klónozása
 <br>
git clone https://github.com/FELHASZNALONEV/camel_registry_fullstack.git<br>
cd camel-registry<br>

 Backend Indítása (ASP.NET Core)
A backend automatikusan létrehozza az camels.db SQLite adatbázist induláskor.

<br>
cd CamelRegistry<br>
dotnet restore<br>
dotnet run<br>
A backend alapértelmezetten a http://localhost:5121 címen indul el. Swagger dokumentáció: http://localhost:5121/swagger
<br>
<br>
<br>

 Frontend Indítása 
Nyiss egy új terminált, és lépj a frontend mappába:
<br>
<br>
<br>
cd camel-frontend<br>
npm install<br>
npm start<br>
<br>

A frontend a http://localhost:4200 címen érhető el.
<br>
<br>
✅ Tesztek Futtatása
A projekt tartalmaz Unit teszteket mind a backend, mind a frontend oldalon.
<br>
Backend tesztek (xUnit):

<br>
cd CamelRegistry.Tests<br>
dotnet test<br>
<br>
Frontend tesztek (Jasmine):

<br>
cd camel-frontend<br>
npm test
