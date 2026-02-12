import Database from "better-sqlite3";

const db = new Database("./db/database.sqlite");

db.prepare(
  "CREATE  TABLE IF NOT EXISTS `diakok`(`id` INTEGER, `nev` TEXT, `email` TEXT, `telefon` TEXT, `telepules` TEXT)",
).run();
db.prepare(
  "CREATE TABLE IF NOT EXISTS `orak`(`id` INTEGER, `datum` DATE, `targy` TEXT, `csoport` TEXT, `terem` TEXT, `tanar` TEXT, `ferohely` INTEGER, `orasorszam` INTEGER, szabad INTEGER)",
).run();
db.prepare(
  "CREATE TABLE IF NOT EXISTS `kapcsolat`(`id` INTEGER, `diakid` INTEGER, `oraid` INTEGER, FOREIGN KEY(diakid) REFERENCES diakok(id), FOREIGN KEY(oraid) REFERENCES orak(id))",
).run();

export const getStudentNamesByCity = (city) =>
  db.prepare("SELECT nev FROM diakok WHERE telepules = ?").all(city);

export const getLessonByLessonName = (lessonName) =>
  db
    .prepare(
      "SELECT datum, terem, orasorszam FROM orak WHERE targy = ? ORDER BY datum ASC, orasorszam ASC",
    )
    .all(lessonName);

export const getLessonByYearAndTwoLessonNames = (
  year,
  lessonName1,
  lessonName2,
) =>
  db
    .prepare(
      "SELECT csoport, targy, datum FROM orak WHERE csoport LIKE ? AND (targy = ? OR targy = ?) ORDER BY targy",
    )
    .all(year, lessonName1, lessonName2);

export const getNumberOfStudentsPerCity = () =>
  db
    .prepare(
      "SELECT COUNT(nev) AS szam FROM diakok GROUP BY telepules ORDER BY szam DESC",
    )
    .all();

export const getLessonNames = () =>
  db.prepare("SELECT DISTINCT(targy) FROM orak ORDER BY targy ").all();

export const getStudentsByTeacherAndDate = (date, teacher) =>
  db
    .prepare(
      "SELECT nev, email, telefon FROM diakok INNER JOIN kapcsolat ON kapcsolat.diakid = diakok.id INNER JOIN orak ON kapcsolat.oraid = orak.id WHERE datum = ? AND tanar = ? ",
    )
    .all(date, teacher);

export const getStudentsByStudentName = (name) =>
  db
    .prepare(
      "SELECT nev FROM diakok WHERE telepules = (SELECT telepules FROM diakok WHERE nev = ?) AND nev != ? ",
    )
    .all(name, name);

export const updateSzabad = () =>
  db
    .prepare(
      "UPDATE orak SET szabad = ferohely - (SELECT COUNT(kapcsolat.id) FROM kapcsolat WHERE kapcsolat.oraid = orak.id) ",
    )
    .run();

export const getLessonsWithFreeSpace = () =>
  db.prepare("SELECT * FROM orak WHERE szabad > 0 ORDER BY szabad DESC ").all();
