
namespace Company_Hierarchy.Interface.Jobs
{
    using System;
    using Enums;

    interface IProject
    {
        string Name { get; }
        DateTime StartDate { get; }
        string Details { get; }
        ProjectState State { get; }

        void CloseProject();
    }
}
