const { exec } = require("node:child_process");

function checkForPostgres() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);

  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout._write(".");
      checkForPostgres();
      return;
    }
    console.log("\n🟢 Postgres está pronto e aceitando conexões!");
  }
}

process.stdout._write("\n\n🔴 Aguardando Postgres aceitar conexões");
checkForPostgres();
