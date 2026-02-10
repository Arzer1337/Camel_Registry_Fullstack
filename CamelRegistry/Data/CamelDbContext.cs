using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace CamelRegistry.Data;


public class Camel
{
    public int Id { get; set; }

    [Required] 
    public string Name { get; set; } = string.Empty;

    public string? Color { get; set; }

    [Range(1, 2, ErrorMessage = "A teve csak 1 vagy 2 púpú lehet.")]
    public int HumpCount { get; set; }

    public DateTime LastFed { get; set; }
}


public class CamelDbContext : DbContext
{
    public CamelDbContext(DbContextOptions<CamelDbContext> options) : base(options) { }

    public DbSet<Camel> Camels => Set<Camel>();
}