using EqScan.Common;
using Microsoft.EntityFrameworkCore;

namespace EqScan.Api.Models
{
    public class EqScanDbContext : DbContext
    {
        public EqScanDbContext(DbContextOptions<EqScanDbContext> options)
            : base(options) { }

        public DbSet<Unit> Units { get; set; }
        public DbSet<Contact> Contacts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region seed db data

            var units = new[]
            {
                new Unit
                {
                    Id = "1",
                    UnitType = "Radio",
                    ContactId = "1"
                },
                new Unit
                {
                    Id = "2",
                    UnitType = "Radio",
                    ContactId = "2"
                }
            };

            var contacts = new[]
            {
                new Contact
                {
                    Id = "1",
                    Name = "Jim Lahey",
                    Email = "jlahey@sunnyvale.com",
                    Phone = "(843)230-5555"
                },
                new Contact
                {
                    Id = "2",
                    Name = "Randy",
                    Email = "randy@sunnyvale.com",
                    Phone = "(843)230-5556"
                }
            };

            #endregion

            modelBuilder.Entity<Unit>().HasData(units);
            modelBuilder.Entity<Contact>().HasData(contacts);

            base.OnModelCreating(modelBuilder);
        }
    }
}