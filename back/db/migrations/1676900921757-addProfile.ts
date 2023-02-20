import { MigrationInterface, QueryRunner } from 'typeorm';

export class addProfile1676900921757 implements MigrationInterface {
  name = 'addProfile1676900921757';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.commitTransaction();
    await queryRunner.query('PRAGMA foreign_keys=off');
    await queryRunner.startTransaction();
    await queryRunner.query(
      `CREATE TABLE "temporary_event" ("id" varchar PRIMARY KEY NOT NULL, "userCreatorId" varchar NOT NULL, "dateCreate" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "title" varchar NOT NULL, "description" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (true), "userId" varchar, CONSTRAINT "FK_01cd2b829e0263917bf570cb672" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_event"("id", "userCreatorId", "dateCreate", "title", "description", "isActive", "userId") SELECT "id", "userCreatorId", "dateCreate", "title", "description", "isActive", "userId" FROM "event"`,
    );
    await queryRunner.query(`DROP TABLE "event"`);
    await queryRunner.query(`ALTER TABLE "temporary_event" RENAME TO "event"`);
    await queryRunner.commitTransaction();
    await queryRunner.query('PRAGMA foreign_keys=on');
    await queryRunner.startTransaction();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.commitTransaction();
    await queryRunner.query('PRAGMA foreign_keys=off');
    await queryRunner.startTransaction();
    await queryRunner.query(`ALTER TABLE "event" RENAME TO "temporary_event"`);
    await queryRunner.query(
      `CREATE TABLE "event" ("id" varchar PRIMARY KEY NOT NULL, "userCreatorId" varchar NOT NULL, "dateCreate" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "title" varchar NOT NULL, "description" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (true), "userId" varchar, CONSTRAINT "FK_01cd2b829e0263917bf570cb672" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "event"("id", "userCreatorId", "dateCreate", "title", "description", "isActive", "userId") SELECT "id", "userCreatorId", "dateCreate", "title", "description", "isActive", "userId" FROM "temporary_event"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_event"`);
    await queryRunner.commitTransaction();
    await queryRunner.query('PRAGMA foreign_keys=on');
    await queryRunner.startTransaction();
  }
}
