#!/usr/bin/env node
const {exec} = require("child_process");
const {promises} = require("fs");
const {stderr, stdout} = process;
const log = console.log;

const year = process.argv[3] || 2020;
const day = process.argv[2];

if (!day) {
	stderr.write("no day provided")
	process.exit();
}

const cookie = "53616c7465645f5f37223573e57a1a404e4924262ffc7d81038c0d213040f41ee0f48637b542c64f4a812637a445f200";
const url = `https://adventofcode.com/${year}/day/${day}/input`;
const command = `curl ${url} --cookie "session=${cookie}"`;

exec(command, (err, out, stderr)=>{
	if (err) return err;
	// stdout.write(out);
	// write (will rewrite) vs append (only append) !!!
	promises.writeFile(`${day}_input.txt`, out)
		.then(()=>{
			console.log("input written to", `${day}_input.txt`);
			// process.exit();
		})
	// reading code
	// const input = await (promises.readFile(filename, "utf8")).toString();
})