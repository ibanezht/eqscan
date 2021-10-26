using Microsoft.EntityFrameworkCore.Migrations;

namespace EqScan.Api.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Units",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UnitType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ContactId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Units", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Units_Contacts_ContactId",
                        column: x => x.ContactId,
                        principalTable: "Contacts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "Id", "Email", "Name", "Phone" },
                values: new object[] { "1", "jlahey@sunnyvale.com", "Jim Lahey", "(843)230-5555" });

            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "Id", "Email", "Name", "Phone" },
                values: new object[] { "2", "randy@sunnyvale.com", "Randy", "(843)230-5556" });

            migrationBuilder.InsertData(
                table: "Units",
                columns: new[] { "Id", "ContactId", "UnitType" },
                values: new object[] { "1", "1", "Radio" });

            migrationBuilder.InsertData(
                table: "Units",
                columns: new[] { "Id", "ContactId", "UnitType" },
                values: new object[] { "2", "2", "Radio" });

            migrationBuilder.CreateIndex(
                name: "IX_Units_ContactId",
                table: "Units",
                column: "ContactId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Units");

            migrationBuilder.DropTable(
                name: "Contacts");
        }
    }
}
