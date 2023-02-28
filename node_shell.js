const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'1bf4cd0b-762f-4524-904d-bbf80ae221d2'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
