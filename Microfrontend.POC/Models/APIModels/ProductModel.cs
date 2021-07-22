using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Microfrontend.POC.Models.APIModels
{
    public class ProductModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Img { get; set; }
        public int Price { get; set; }
    }
}