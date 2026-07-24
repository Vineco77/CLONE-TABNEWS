exports.up = (pgm) => {
  pgm.createTable("users", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },

    // For reference, GitHub limits usernames to 39 characters.
    username: {
      type: "varchar(30)",
      notNull: true,
      unique: true,
    },

    // The Maximum length of an email address is 254 characters
    email: {
      type: "varchar(254)",
      notNull: true,
      unique: true,
    },

    //The maximum length that bcrypt can hash is 60 bytes. Anything longer than that will produce the same hash.
    password: {
      type: "varchar(60)",
      notNull: true,
    },

    //The "tz" at the end of timestamptz stands for "time zone" and specidies the client's time zone.
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("timezone('utc', now())"),
    },

    updated_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("timezone('utc', now())"),
    },
  });
};

exports.down = false;
