namespace Egyetemi_kreditnyilvántartás;

public class Repo
{
    public List<StudentCredit> Students = new List<StudentCredit>
    {
        new StudentCredit(46, "asd123","Kiss Anna" ),
        new StudentCredit(44, "asd124","Nagy Péter" ),
        new StudentCredit(38, "asd125","Tóth Eszter" ),
        new StudentCredit(27, "asd126","Varga Máté" ),
        new StudentCredit(41, "asd127","Szabó Lili" )
    };

    public int GetNumberOfStudentsCompletedHalfYear()
    {
        return Students.Count(x => x.Credit >= 44);
    }

    public List<string> GetNameWhoDidntCompletedHalfYear()
    {
        return Students.Where(x => x.Credit < 44).Select(x => x.Name).ToList();
    }

    public List<MissingCreditModel> GetStudentsAndTheirMissingCredits()
    {
        return Students.Where(x => x.Credit < 44).Select(x => new MissingCreditModel(x.Name, 44 - (int)x.Credit)).ToList();
    }
}
