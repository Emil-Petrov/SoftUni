

namespace Company_Hierarchy.Interface.People
{
    using Models.Jobs;
    using System.Collections.Generic;

    interface IDeveloper : IEmployee
    {
        List<Project> Projects { get; }
    }
}
