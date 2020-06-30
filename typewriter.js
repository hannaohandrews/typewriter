const sentence = "hello there from lighthouse lab";

let interval = 0;


for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, interval += 50);
};

  setTimeout(() => {
    process.stdout.write("\n");
  }, interval += 50);

