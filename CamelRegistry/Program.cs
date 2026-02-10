using CamelRegistry.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);



builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddDbContext<CamelDbContext>(options =>
    options.UseSqlite("Data Source=camels.db"));


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy => policy.WithOrigins("http://localhost:4200") // Angular portja
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

var app = builder.Build();

// DB inicializálás


    app.UseSwagger();
    app.UseSwaggerUI();


app.UseCors("AllowAngular");
app.UseHttpsRedirection();


using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<CamelDbContext>();
    db.Database.EnsureCreated();
}

// API

// 1. GET: Összes teve listázása
app.MapGet("/api/camels", async (CamelDbContext db) =>
    await db.Camels.ToListAsync())
    .WithName("GetCamels")
    .WithOpenApi();

// 2. GET: Egy teve lekérése ID alapján
app.MapGet("/api/camels/{id}", async (int id, CamelDbContext db) =>
    await db.Camels.FindAsync(id)
        is Camel camel
            ? Results.Ok(camel)
            : Results.NotFound())
    .WithName("GetCamelById")
    .WithOpenApi();

//Új teve létrehozása
app.MapPost("/api/camels", async (Camel camel, CamelDbContext db) =>
{
    // "Púpellenőrzés"
    if (camel.HumpCount < 1 || camel.HumpCount > 2)
    {
        return Results.BadRequest("A teve púpjainak száma csak 1 vagy 2 lehet.");
    }

    camel.Id = 0; //Új ID
    db.Camels.Add(camel);
    await db.SaveChangesAsync();

    return Results.Created($"/api/camels/{camel.Id}", camel);
})
.WithName("CreateCamel")
.WithOpenApi();

//Teve adatainak módosítása
app.MapPut("/api/camels/{id}", async (int id, Camel inputCamel, CamelDbContext db) =>
{
    var camel = await db.Camels.FindAsync(id);

    if (camel is null) return Results.NotFound();

    if (inputCamel.HumpCount < 1 || inputCamel.HumpCount > 2)
        return Results.BadRequest("A púpok száma 1 vagy 2 lehet.");

    camel.Name = inputCamel.Name;
    camel.Color = inputCamel.Color;
    camel.HumpCount = inputCamel.HumpCount;
    camel.LastFed = inputCamel.LastFed;

    await db.SaveChangesAsync();

    return Results.NoContent();
})
.WithName("UpdateCamel")
.WithOpenApi();

//Teve törlése
app.MapDelete("/api/camels/{id}", async (int id, CamelDbContext db) =>
{
    if (await db.Camels.FindAsync(id) is Camel camel)
    {
        db.Camels.Remove(camel);
        await db.SaveChangesAsync();
        return Results.Ok(camel);
    }

    return Results.NotFound();
})
.WithName("DeleteCamel")
.WithOpenApi();

app.Run();