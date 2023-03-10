import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./lib/routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes);

app.listen({
	host: "192.168.0.119",
	port: 3333,
}).then(() => {
	console.log("HTTP Server Running");
});
