namespace EqScan.Common.Dtos
{
    public class ContactDto
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public UnitDto[] Units { get; set; }
    }
}