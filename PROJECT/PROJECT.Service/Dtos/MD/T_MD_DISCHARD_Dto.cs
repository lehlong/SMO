﻿using AutoMapper;
using PROJECT.Core.Models.MD;
using PROJECT.Service.Commons.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PROJECT.Service.Dtos.MD
{
    public class T_MD_DISCHARD_Dto : IMapFrom
    {
        public string CODE { get; set; }
        public string TEXT { get; set; }
        public string CUSTOMER_CODE { get; set; }
        public bool ACTIVE { get; set; }
        public void Mapping(Profile profile)
        {
            profile.CreateMap<T_MD_DISCHARD, T_MD_DISCHARD_Dto>().ReverseMap();
        }
    }
}
