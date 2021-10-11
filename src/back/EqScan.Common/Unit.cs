namespace EqScan.Common
{
    public class Unit
    {
        public string Id { get; set; }
        public string UnitType { get; set; }
        public string ContactId { get; set; }
        public Contact Contact { get; set; }
    }
}