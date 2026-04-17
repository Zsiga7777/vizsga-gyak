using System;
using System.Collections.Generic;
using System.Text;
using konzol.Enums;

namespace konzol.Model;

public class RoleCount
{
    public ShipRole Role { get; set; }
    public int Count { get; set; }

    public override string ToString()
    {
        return $"{Role}: {Count}";
    }
}
