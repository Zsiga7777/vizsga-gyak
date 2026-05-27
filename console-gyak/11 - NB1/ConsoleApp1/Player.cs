

namespace ConsoleApp1;

public class Player
{
    public string ClubName { get; set; }
    public int PlayerNumber { get; set; }
    public string? FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime BirthDay { get; set; }
    public bool HungarianCitizen { get; set; }
    public bool OutsiderCitizen { get; set; }
    public int Value { get; set; }
    public string PostName { get; set; }

  public Player(string clubName, int playerNumber, string? firstName, string lastName, DateTime birthDay, bool hungarianCitizen, bool outsiderCitizen, int value, string postName)
    {
        ClubName = clubName;
        PlayerNumber = playerNumber;
        FirstName = firstName;
        LastName = lastName;
        BirthDay = birthDay;
        HungarianCitizen = hungarianCitizen;
        OutsiderCitizen = outsiderCitizen;
        Value = value;
        PostName = postName;
    }

    public override string ToString()
    {
        return $"{ClubName}\t{PlayerNumber}\t{FirstName}\t{LastName}\t{BirthDay}\t{(HungarianCitizen ? "-1" : "0")}\t{(OutsiderCitizen ? "-1" : "0")}\t{Value}\t{PostName}";
    }
}