using Microfrontend.POC.Models.APIModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Microfrontend.POC.API
{
    public class ProductListController : ApiController
    {
        private static string imageBaseUrl = "https://guesseu.scene7.com/is/image/GuessEU";
        private static readonly List<ProductModel> products = GetProducts().ToList();
        private static List<CartModel> addToCartproducts = new List<CartModel>();


        // GET api/<controller>
        [HttpGet]
        [Route("api/productlist/get")]
        public IEnumerable<ProductModel> GetData()
        {
            return products;
        }
        public static IEnumerable<ProductModel> GetProducts()
        {
            List<ProductModel> productList = new List<ProductModel>();
            productList.Add(new ProductModel() { Id = 1, Img = $"{imageBaseUrl}/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0", Name = "CHECK PRINT SHIRT", Price = 110 });
            productList.Add(new ProductModel() { Id = 2, Img = $"{imageBaseUrl}/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0", Name = "GLORIA HIGH LOGO SNEAKER", Price = 91 });
            productList.Add(new ProductModel() { Id = 3, Img = $"{imageBaseUrl}/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0", Name = "CATE RIGID BAG", Price = 94 });
            productList.Add(new ProductModel() { Id = 4, Img = $"{imageBaseUrl}/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0", Name = "GUESS CONNECT WATCH", Price = 439 });
            productList.Add(new ProductModel() { Id = 5, Img = $"{imageBaseUrl}/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0", Name = "70s RETRO GLAM KEFIAH", Price = 20 });
            return productList;
        }


        // POST api/<controller>
        public void Post([FromUri] int id)
        {
            var addToCartproduct = addToCartproducts.FirstOrDefault(_ => _.Product.Id == id);
            if (addToCartproduct != null)
            {
                addToCartproduct.Quantity = addToCartproduct.Quantity + 1;
                addToCartproduct.Total = addToCartproduct.Quantity * addToCartproduct.Product.Price;
                addToCartproducts[addToCartproducts.FindIndex(_ => _.Product.Id == id)] = addToCartproduct;
            }
            else
            {
                addToCartproducts.Add(new CartModel()
                {
                    Product = products.FirstOrDefault(_ => _.Id == id),
                    Quantity = 1,
                    Total = products.FirstOrDefault(_ => _.Id == id)?.Price ?? 0
                });
            }
        }

        [HttpGet]
        [Route("api/productlist/getcart")]
        public IEnumerable<CartModel> GetCartProducts() => addToCartproducts;
    }
}