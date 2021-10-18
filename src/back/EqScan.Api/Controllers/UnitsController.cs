using System.Threading.Tasks;
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
        public async Task<IActionResult> GetAsync(string id)
        {
            var unit = await _db.Units
                .ProjectTo<UnitDto>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(c => c.Id == id);
            return Ok(unit);
        }
    }
}