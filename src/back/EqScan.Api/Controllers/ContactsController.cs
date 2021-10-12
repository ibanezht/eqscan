using System.Linq;
using EqScan.Api.Models;
using EqScan.Common;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;

namespace EqScan.Api.Controllers
{
    public class ContactsController : EqScanControllerBase<Contact>
    {
        private readonly EqScanDbContext _db;

        public ContactsController(EqScanDbContext context)
            : base(context)
        {
            _db = context;
        }

        [EnableQuery]
        public IActionResult Get(string key)
        {
            return Ok(_db.Contacts.FirstOrDefault(c => c.Id == key));
        }
    }
}