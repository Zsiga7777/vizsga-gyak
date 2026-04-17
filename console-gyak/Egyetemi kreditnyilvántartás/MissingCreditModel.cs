namespace Egyetemi_kreditnyilvántartás;

public class MissingCreditModel
{
    public string Name { get; set; }

    public int NumberOfMissingCredits { get; set; }

    public MissingCreditModel(string name, int numberOfMissingCredits)
    {
        Name = name;
        NumberOfMissingCredits = numberOfMissingCredits;
    }

    public override string ToString()
    {
        return $"{Name}hallgatónak {NumberOfMissingCredits} kredit hiányzik.";
    }
}
