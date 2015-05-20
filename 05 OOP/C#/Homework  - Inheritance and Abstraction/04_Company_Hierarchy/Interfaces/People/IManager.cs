namespace Company_Hierarchy.Interface.People
{
    using System.Collections.Generic;
    using Models.People;

    interface IManager : IEmployee
    {
        List<Employee> Employees { get; } 
    }

}
