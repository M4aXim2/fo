const OWNER_ID = '405356071989936129'; 
module.exports = {
  name: "shutdown",
  description: "Shut's down the bot",
  run: async (client, message, args) => {
    if (!OWNER_ID)
      return message.channel.send("This command is developer Only");

    message.channel.send("Shutting down...").then((m) => 
        client.destroy()
        );
    },
    };