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
    public class T_MD_MATERIAL_Dto : IMapFrom
    {
        public string CODE { get; set; }
        public string TEXT { get; set; }
        public string TYPE { get; set; }
        public string UNIT { get; set; }
        public bool ACTIVE { get; set; }
        public void Mapping(Profile profile)
        {
            profile.CreateMap<T_MD_MATERIAL, T_MD_MATERIAL_Dto>().ReverseMap();
        }
    }
}
