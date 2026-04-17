namespace Egyetemi_kreditnyilvántartás;

public class StudentCredit
{
    public uint Credit {  get; private set; }

    public string NeptuneCode { get; private set; }

    public string Name { get; set; }

    public StudentCredit(string neptuneCode, string name)
    {

        NeptuneCode =String.IsNullOrEmpty( neptuneCode) ? throw new Exception("Neptun kód nem lehet üres") : neptuneCode;
        Name = String.IsNullOrEmpty(name) ? throw new Exception("Név nem lehet üres") : name;
        Credit = 0;
    }

    public StudentCredit(uint credit, string neptuneCode, string name)
    {
        Credit = credit;
        NeptuneCode = neptuneCode;
        Name = name;
    }

    public void IncreaseCredit(uint credit)
    {
        Credit += credit == null || credit == 0 ? throw new Exception("A kredit csak pozitív értékkel növelhető!") : credit;  
    }

    public void HalfYearCreditSetTo0()
    {
        Credit = 0;
    }

    public void ModifyNeptunCode(string neptuneCode)
    {
        NeptuneCode =String.IsNullOrEmpty( neptuneCode) ? throw new Exception("Neptun kód nem lehet üres") : neptuneCode ;
    }

    public string IsHalfYearDone()
    {
        if(Credit >= 44)
        {
            return "Félév telejsítve.";
        }
        else
        {
            return "Félév nem telejsítve.";
        }
    }

    public int GetMissingNumberOfCredits()
    {
        if(Credit >= 44)
        {
            return 0;
        }
        else
        {
            return 44 - (int)Credit;
        }
    }

    public override string ToString()
    {
        return $"{Name} - {NeptuneCode} (kredit: {Credit})";
    }
}
