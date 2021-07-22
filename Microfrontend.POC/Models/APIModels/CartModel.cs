using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Microfrontend.POC.Models.APIModels
{
    public class CartModel
    {
        public ProductModel Product { get; set; }
        public int Quantity { get; set; }
        public int Total { get; set; }
    }
}