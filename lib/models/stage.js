const pool = require('../utils/pool');

module.exports = class Stage {
  stageId;
  name;
  message;
  choices;
  img;
  sound;

  constructor(row) {
    this.stageId = row.stage_id;
    this.name = row.name;
    this.message = row.message;
    this.choices = row.choices;
    this.img = row.img;
    this.sound = row.sound;
  }

  static async insert(stage) {
    const { rows } = await pool.query(`
    INSERT INTO stories (stage_id, name, message, choices, img, sound)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
    `,
    [stage.stageId, stage.name, stage.message, stage.choices, stage.img, stage.sound]);

    return new Stage(rows[0]);
  }

  static async findById(stageId) {
    const { rows } = await pool.query(`
    SELECT * FROM stories WHERE stage_id=$1
    `,
    [stageId]);
    if(!rows[0]) return null;
    else return new Stage(rows[0]);
  }
};
