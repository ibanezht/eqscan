using EqScan.Common;
using Microsoft.EntityFrameworkCore;

namespace EqScan.Api.Models
{
    public class UnitsDbContext : DbContext
    {
        public UnitsDbContext(DbContextOptions<UnitsDbContext> options) : base(options) { }
       
        public DbSet<Unit> Units { get; set; }
        public DbSet<Contact> Contacts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Unit>()
                .OwnsOne(u => u.Contact);
        }
    }
}