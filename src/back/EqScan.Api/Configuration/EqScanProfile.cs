using AutoMapper;
using EqScan.Api.Models;
using EqScan.Common.Dtos;

namespace EqScan.Api.Configuration
{
    public class EqScanProfile : Profile
    {
        public EqScanProfile()
        {
            CreateMap<Unit, UnitDto>();
            CreateMap<Contact, ContactDto>();
        }
    }
}