using System.Linq;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using EqScan.Api.Models;
using EqScan.Common.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EqScan.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UnitsController : ControllerBase
    {
        private readonly EqScanDbContext _db;
        private readonly IMapper _mapper;

        public UnitsController(EqScanDbContext context, IMapper mapper)
        {
            _db = context;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            var retval = _db.Units
                .ProjectTo<UnitDto>(_mapper.ConfigurationProvider)
                .SingleOrDefault(u => u.Id == id);

            if (retval == null)
                return NotFound();

            return Ok(retval);
        }

        [HttpGet("{id}/contact")]
        public IActionResult GetContact(string id)
        {
            var retval = _db.Units
                .Include(u => u.Contact)
                .Where(u => u.Id == id)
                .Select(u => u.Contact)
                .ProjectTo<ContactDto>(_mapper.ConfigurationProvider)
                .SingleOrDefault();

            if (retval == null)
                return NotFound();

            return Ok(retval);
        }
    }
}