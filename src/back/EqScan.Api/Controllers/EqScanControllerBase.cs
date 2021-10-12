using EqScan.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using Microsoft.EntityFrameworkCore;

namespace EqScan.Api.Controllers
{
    public abstract class EqScanControllerBase<T>
        : ODataController where T : class
    {
        private readonly EqScanDbContext _db;

        protected EqScanControllerBase(EqScanDbContext context)
        {
            _db = context;
            _db.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }

        [EnableQuery(PageSize = 10)]
        public IActionResult Get()
        {
            return Ok(_db.Set<T>());
        }

        [EnableQuery]
        public IActionResult Post([FromBody] T entity)
        {
            _db.Set<T>().Add(entity);
            _db.SaveChanges();
            return Created(entity);
        }
    }
}