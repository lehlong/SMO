﻿using PROJECT.Core.Common;
using System.ComponentModel.DataAnnotations;

namespace PROJECT.Core.Models.AD
{
    public class T_AD_USER_GROUP_ROLE : BaseEntity
    {
        public string USER_GROUP_ID { get; set; }
        [Key]
        public string ROLE_ID { get; set; }

    }
}
