﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PROJECT.Core.Models.MD;
using PROJECT.Service.Extention;
using PROJECT.Service.Filter.AD;
using PROJECT.Service.Filter.MD;
using PROJECT.Service.Interfaces.MD;

namespace PROJECT.API.Controllers.MD
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class SaleOfficeController : ControllerBase
    {
        public readonly ISaleOfficeService _service;
        public SaleOfficeController(ISaleOfficeService service)
        {
            _service = service;
        }

        [HttpGet]
        //[Right(ClaimTypes.Role, "R1, R192")]
        [Route("GetList")]
        public async Task<IActionResult> GetList([FromQuery] SaleOfficeFilter page)
        {
            var tranferObject = new TranferObject();
            var pagination = await _service.Search(page);
            if (_service.Status)
            {
                tranferObject.Data = pagination;
            }
            return Ok(tranferObject);
        }

        [HttpPut]
        //[Right(ClaimTypes.Role, "R1, R192")]
        [Route("Update")]
        public async Task<IActionResult> Update([FromBody] T_MD_SALEOFFICE SaleOffice)
        {
            var tranferObject = new TranferObject();
            var pagination = await _service.Update(SaleOffice);
            if (_service.Status)
            {
                tranferObject.Data = pagination;
            }
            return Ok(tranferObject);
        }
    }
}