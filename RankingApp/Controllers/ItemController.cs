using Microsoft.AspNetCore.Mvc;
using RankingApp.Models;

namespace RankingApp.Controllers
{
    [ApiController]
    [Route("[controller")]
    public class ItemController: ControllerBase
    {
        private static readonly IEnumerable<ItemModel> Items = new[]
        {
            new ItemModel { Id = 1, Title = "The Godfather", ImageId = 1, Ranking = 0, ItemType = 1},
        };
    }
}
