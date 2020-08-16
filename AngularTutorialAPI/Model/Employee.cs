using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularTutorialAPI.Model
{
    /*Creat a table in DataBase*/
    public class Employee
    {
        /*Creat Property
         short cuit of Property is prop and then double tab*/
        public int id { get; set; }
        public string name  { get; set; }
        public string email { get; set; }
        public string password { get; set; }
    }
}
