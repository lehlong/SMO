﻿using PROJECT.Core.Common;
using System.ComponentModel.DataAnnotations;

namespace PROJECT.Core.Models.AD
{
    public class T_AD_USER_GROUP : BaseEntity
    {
        [Key]
        public string PKID { get; set; }
        public string CODE { get; set; }
        public string NAME { get; set; }
        public string COMPANY_CODE { get; set; }
        public string NOTES { get; set; }
        public bool ACTIVE { get; set; }
    }
}
