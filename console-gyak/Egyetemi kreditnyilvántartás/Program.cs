using Egyetemi_kreditnyilvántartás;

try
{
    StudentCredit student1 = new StudentCredit("", "Béla");
}
catch(Exception ex)
{
    Console.WriteLine(ex.Message);
}

StudentCredit student2 = new StudentCredit("gsfes", "Kiss Anna");
Console.WriteLine(student2.ToString());

student2.IncreaseCredit(12);
Console.WriteLine(student2.ToString());

try
{
    student2.IncreaseCredit(0);
}
catch (Exception ex)
{
    Console.WriteLine(ex.Message);
}

student2.IncreaseCredit(50);
Console.WriteLine(student2.IsHalfYearDone());

student2.HalfYearCreditSetTo0();
student2.IncreaseCredit(38);
int numberOfMissingCredits = student2.GetMissingNumberOfCredits();
Console.WriteLine($"{numberOfMissingCredits} kredit hiányzik a félév teljesítéséhez.");

student2.HalfYearCreditSetTo0();
Console.WriteLine(student2.ToString());

Repo repo = new Repo();

int numberOfStudentsCompletedTheHalfYear = repo.GetNumberOfStudentsCompletedHalfYear();
Console.WriteLine($"${numberOfStudentsCompletedTheHalfYear} hallgató teljesítette a félévet.");

List<string> studentsWhoDidntCompletedHalfYear = repo.GetNameWhoDidntCompletedHalfYear();
string resText = "A félévet nem teljesítette: ";
foreach(string student in studentsWhoDidntCompletedHalfYear)
{
    resText += $"{student}, ";
}
resText = resText.Remove(resText.Length - 2, 2);
Console.WriteLine(resText);

List<MissingCreditModel> studentsAndMissingTokens = repo.GetStudentsAndTheirMissingCredits();
foreach(MissingCreditModel student in studentsAndMissingTokens)
{
    Console.WriteLine(student.ToString());
}