using System.Collections.Generic;

namespace EqScan.Api.Models
{
    public class Contact
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public IEnumerable<Unit> Units { get; set; }
    }
}