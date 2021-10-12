using System.Linq;
using EqScan.Api.Models;
using EqScan.Common;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;

namespace EqScan.Api.Controllers
{
    public class UnitsController : EqScanControllerBase<Unit>
    {
        private readonly EqScanDbContext _db;

        public UnitsController(EqScanDbContext context)
            : base(context)
        {
            _db = context;
        }

        [EnableQuery]
        public IActionResult Get(string key)
        {
            return Ok(_db.Units.FirstOrDefault(c => c.Id == key));
        }
    }
}