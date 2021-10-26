using System.Linq;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using EqScan.Api.Models;
using EqScan.Common.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace EqScan.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactsController : ControllerBase
    {
        private readonly EqScanDbContext _db;
        private readonly IMapper _mapper;

        public ContactsController(EqScanDbContext context, IMapper mapper)
        {
            _db = context;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            var retval = _db.Contacts
                .ProjectTo<ContactDto>(_mapper.ConfigurationProvider)
                .SingleOrDefault(u => u.Id == id);

            if (retval == null)
                return NotFound();

            return Ok(retval);
        }
    }
}