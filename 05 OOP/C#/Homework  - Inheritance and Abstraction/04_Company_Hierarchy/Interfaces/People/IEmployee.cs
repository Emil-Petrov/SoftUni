namespace Company_Hierarchy.Interface.People
{
    using Enums;
    interface IEmployee : IPerson
    {
        double Salary { get; }
        Departments Department { get; }
    }
}
