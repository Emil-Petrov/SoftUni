using System;

[AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct |
    AttributeTargets.Enum | AttributeTargets.Interface |
    AttributeTargets.Method)]
public class VersionAttribute : System.Attribute
{
    private int _major;
    private int _minor;

    public VersionAttribute(int major, int minor)
    {
        this._minor = minor;
        this._major = major;
    }

    public override string ToString()
    {
        return string.Format("{0}.{1}", this._major, this._minor);
    }
}