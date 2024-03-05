using Microsoft.AspNetCore.Mvc;

namespace LBW.Controllers
{
    public class GRController : Controller
    {
        public IActionResult Analisis()
        {
            @ViewBag.analisis = "active";
            return View();
        }
        public IActionResult Autorizar()
        {
            @ViewBag.autorizar = "active";
            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View();
        }
    }
}
