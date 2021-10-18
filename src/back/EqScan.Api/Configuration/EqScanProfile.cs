using AutoMapper;
using EqScan.Api.Models;
using EqScan.Common.Dtos;

namespace EqScan.Api.Configuration
{
    public class EqScanProfile : Profile
    {
        public EqScanProfile()
        {
            CreateMap<Unit, UnitDto>()
                .ForMember(des => des.Contact, 
                    opt =>
                    {
                        opt.MapFrom(src => src.Contact);
                        opt.ExplicitExpansion();
                    });
            
            CreateMap<Contact, ContactDto>()
                .ForMember(des => des.Units, 
                    opt =>
                    {
                        opt.MapFrom(src => src.Units);
                        opt.ExplicitExpansion();
                    });;
        }
    }
}